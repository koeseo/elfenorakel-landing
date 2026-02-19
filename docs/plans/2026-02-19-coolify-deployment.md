# Elfenorakel Landing — Deployment Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Ziel:** `elfenorakel-landing` als eigenständigen Docker-Container auf dem ZAP-Server (185.150.25.225) deployen, unter `next.elfenorakel.de`, mit Passwort-Schutz. Die alte Seite auf `elfenorakel.de` bleibt unangetastet.

**Architektur:** Docker Compose mit Traefik-Labels auf dem `coolify`-Netzwerk (externes Docker-Netzwerk). Traefik v3.6 routet nach Hostname — `app.elfenorakel.de` (Port 3000, existiert) und `next.elfenorakel.de` (Port 3000, neu) koexistieren ohne Portkonflikt. Build direkt auf dem Server vom geklonten GitHub-Repo.

**Tech Stack:** Next.js 16 standalone, Docker (node:22-alpine), Traefik v3.6, Docker Compose, SSH-Deploy.

**Referenz-Muster:** `/opt/cloud-integrations/dozzle/docker-compose.yml` auf dem Server.

---

## Pre-Conditions (bereits erledigt)

Ungespeicherte Änderungen auf `feature/seelen-profil`:

- [x] `app.elfenorakel.de` Links aus 4 Dateien entfernt
- [x] Passwort-Middleware (`src/middleware.ts`) + Seite (`src/app/passwort/page.tsx`)
- [x] API-Route (`src/app/api/auth/password/route.ts`)
- [x] `Dockerfile` (multi-stage, standalone)
- [x] `.dockerignore`
- [x] `next.config.ts` → `output: "standalone"`
- [x] `.env.local.example` mit `SITE_PASSWORD` aktualisiert
- [x] Build verifiziert: `npm run build` erfolgreich, standalone Output generiert

---

### Task 1: Commit und Push

**Dateien:** `Dockerfile`, `.dockerignore`, `src/middleware.ts`, `src/app/passwort/page.tsx`, `src/app/api/auth/password/route.ts`, `next.config.ts`, `.env.local.example`, + 4 geänderte Dateien

**Step 1: Deployment-Dateien stagen**

```bash
git add \
  Dockerfile .dockerignore \
  src/middleware.ts src/app/passwort/page.tsx src/app/api/auth/password/route.ts \
  next.config.ts .env.local.example \
  src/app/blog/\[slug\]/page.tsx src/app/readings/page.tsx \
  src/app/tarot/page.tsx src/components/sections/MiniReading.tsx
```

**Step 2: Staged Changes prüfen**

```bash
git diff --cached --stat
```

Erwartet: ~11 Dateien.

**Step 3: Commit**

```bash
git commit -m "feat: Passwort-Schutz, Dockerfile, App-Links entfernt

- Cookie-basierter Passwort-Schutz via Middleware + /passwort
- API-Route /api/auth/password für serverseitige Prüfung
- Multi-stage Dockerfile mit standalone Output
- Alle app.elfenorakel.de Links entfernt
- next.config.ts: output standalone

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

**Step 4: Push**

```bash
git push origin feature/seelen-profil
```

---

### Task 2: Nach main mergen

**Step 1: Merge**

```bash
git checkout main
git merge feature/seelen-profil --no-ff -m "Merge feature/seelen-profil: Deployment + Passwort-Schutz"
```

**Step 2: Push main**

```bash
git push origin main
```

**Step 3: Zurück zum Feature-Branch**

```bash
git checkout feature/seelen-profil
```

---

### Task 3: Docker Compose + Deploy auf Server

Alles per SSH — kein manuelles Dashboard nötig.

**Step 1: Verzeichnis auf Server erstellen**

```bash
ssh root@185.150.25.225 "mkdir -p /opt/cloud-integrations/elfenorakel-landing"
```

**Step 2: Docker Compose erstellen**

Datei: `/opt/cloud-integrations/elfenorakel-landing/docker-compose.yml`

```yaml
services:
  elfenorakel-landing:
    container_name: elfenorakel-landing
    build:
      context: /opt/repos/elfenorakel-landing
      dockerfile: Dockerfile
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - SITE_PASSWORD=elfi2026
      - NEXT_PUBLIC_SUPABASE_URL=https://api.koehub.de
      - NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJyb2xlIjogImFub24iLCAiaXNzIjogInN1cGFiYXNlIiwgImlhdCI6IDE3MzU2ODk2MDAsICJleHAiOiAxODkzNDU2MDAwfQ.A9upG1sJiNvjl24cb4rGD89FkNbIdGyRhNk13Q8UDE4
      - SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJyb2xlIjogInNlcnZpY2Vfcm9sZSIsICJpc3MiOiAic3VwYWJhc2UiLCAiaWF0IjogMTczNTY4OTYwMCwgImV4cCI6IDE4OTM0NTYwMDB9.rxdYrtuDRmqIWw1LS5u3jRq0-DmxrGFTkbS5nGU6b0M
      - NEXT_PUBLIC_APP_URL=https://next.elfenorakel.de
    networks:
      - coolify
    labels:
      - "traefik.enable=true"
      # HTTPS Router
      - "traefik.http.routers.elfenorakel-landing.rule=Host(`next.elfenorakel.de`)"
      - "traefik.http.routers.elfenorakel-landing.entrypoints=https"
      - "traefik.http.routers.elfenorakel-landing.tls=true"
      - "traefik.http.routers.elfenorakel-landing.tls.certresolver=letsencrypt"
      # HTTP Router mit Redirect
      - "traefik.http.routers.elfenorakel-landing-http.rule=Host(`next.elfenorakel.de`)"
      - "traefik.http.routers.elfenorakel-landing-http.entrypoints=http"
      - "traefik.http.routers.elfenorakel-landing-http.middlewares=elfenorakel-landing-redirect"
      # Redirect Middleware
      - "traefik.http.middlewares.elfenorakel-landing-redirect.redirectscheme.scheme=https"
      - "traefik.http.middlewares.elfenorakel-landing-redirect.redirectscheme.permanent=true"
      # Service Port
      - "traefik.http.services.elfenorakel-landing.loadbalancer.server.port=3000"

networks:
  coolify:
    external: true
```

**Step 3: Repo auf Server klonen**

```bash
ssh root@185.150.25.225 "mkdir -p /opt/repos && git clone https://github.com/koeseo/elfenorakel-landing.git /opt/repos/elfenorakel-landing"
```

**Step 4: Docker Image bauen und starten**

```bash
ssh root@185.150.25.225 "cd /opt/cloud-integrations/elfenorakel-landing && docker compose up -d --build"
```

Erwartet: Container baut (~2-3 Min), startet, Traefik routet `next.elfenorakel.de`, SSL automatisch via Let's Encrypt.

---

### Task 4: Deployment verifizieren

**Step 1: Container läuft?**

```bash
ssh root@185.150.25.225 "docker ps | grep elfenorakel-landing"
```

Erwartet: Container mit Status "Up".

**Step 2: Passwort-Redirect testen**

```bash
curl -s -o /dev/null -w "%{http_code} %{redirect_url}" https://next.elfenorakel.de/
```

Erwartet: `302` redirect zu `/passwort`.

**Step 3: Passwort-Seite lädt?**

```bash
curl -s https://next.elfenorakel.de/passwort | grep -o "passwortgeschützt"
```

Erwartet: `passwortgeschützt` gefunden.

**Step 4: Login-Flow testen**

```bash
# Cookie mit richtigem Passwort holen
curl -s -c /tmp/elfi-cookies.txt \
  -X POST https://next.elfenorakel.de/api/auth/password \
  -H "Content-Type: application/json" \
  -d '{"password":"elfi2026"}'

# Geschützte Seite mit Cookie aufrufen
curl -s -b /tmp/elfi-cookies.txt -o /dev/null -w "%{http_code}" https://next.elfenorakel.de/
```

Erwartet: `{"success":true}`, dann `200`.

**Step 5: Falsches Passwort testen**

```bash
curl -s -w "\n%{http_code}" \
  -X POST https://next.elfenorakel.de/api/auth/password \
  -H "Content-Type: application/json" \
  -d '{"password":"falsch"}'
```

Erwartet: `401` mit `{"error":"Invalid password"}`.

**Step 6: API-Routes nicht blockiert?**

```bash
curl -s -o /dev/null -w "%{http_code}" https://next.elfenorakel.de/seelen-profil/api/calculate
```

Erwartet: NICHT 302 (sondern 400/405 — kein Redirect auf `/passwort`).

**Step 7: Alte Seite unangetastet?**

```bash
curl -s -o /dev/null -w "%{http_code}" https://elfenorakel.de/
```

Erwartet: `200` — alte HTML-Seite weiter auf All-Inkl.

**Step 8: app.elfenorakel.de unangetastet?**

```bash
curl -s -o /dev/null -w "%{http_code}" https://app.elfenorakel.de/
```

Erwartet: `200` oder Login-Redirect — App läuft weiter.

---

### Task 5: (ZUKUNFT) DNS umstellen

> **JETZT NICHT AUSFÜHREN.** Nur wenn die Landing Page live-ready ist.

**Step 1: Traefik-Labels erweitern**

In `docker-compose.yml` zusätzliche Host-Rules:
```
Host(`next.elfenorakel.de`) || Host(`elfenorakel.de`) || Host(`www.elfenorakel.de`)
```

**Step 2: DNS bei All-Inkl umstellen**

| Typ | Name | Wert |
|-----|------|------|
| A | `elfenorakel.de` | `185.150.25.225` |
| CNAME | `www.elfenorakel.de` | `elfenorakel.de` |

**Step 3: DNS-Propagation abwarten**

```bash
dig elfenorakel.de +short
```

Erwartet: `185.150.25.225` (kann 1-24h dauern).

**Step 4: Alte GitHub Actions deaktivieren**

Im `koeseo/elfenorakel` Repo FTP-Deploy-Workflow deaktivieren. Alte HTML-Dateien bleiben als Backup.

---

## Update-Workflow (für zukünftige Deploys)

```bash
# Auf dem Server:
cd /opt/repos/elfenorakel-landing && git pull
cd /opt/cloud-integrations/elfenorakel-landing && docker compose up -d --build
```

---

## Server-Kontext

| Item | Wert |
|------|------|
| Server IP | `185.150.25.225` |
| SSH | `ssh root@185.150.25.225` |
| Proxy | Traefik v3.6 (`coolify-proxy`) |
| Docker-Netzwerk | `coolify` (extern) |
| Referenz-Compose | `/opt/cloud-integrations/dozzle/docker-compose.yml` |
| Existierendes `elfenorakel-app` | `app.elfenorakel.de` → Port 3000 |
| GitHub Repo | `koeseo/elfenorakel-landing` |
| Deploy Branch | `main` |
| Repo auf Server | `/opt/repos/elfenorakel-landing` |
| Compose auf Server | `/opt/cloud-integrations/elfenorakel-landing/docker-compose.yml` |
