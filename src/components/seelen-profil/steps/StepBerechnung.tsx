"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface QuizData {
  vorname: string;
  geburtsdatum: string;
  geburtszeit: string;
  kartenwahl: string[];
  seelenFragen: { frageId: string; antwort: string }[];
  email: string;
}

interface StepBerechnungProps {
  quizData: QuizData;
}

const messages = [
  "Deine Karten werden gelesen...",
  "Die Sterne werden befragt...",
  "Dein Element-Signatur entsteht...",
  "Dein Seelen-Profil wird gewoben...",
];

export const StepBerechnung = ({ quizData }: StepBerechnungProps) => {
  const router = useRouter();
  const [messageIndex, setMessageIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const apiCalled = useRef(false);
  const profileId = useRef<string | null>(null);
  const animationDone = useRef(false);

  // Cycle through messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev < messages.length - 1) return prev + 1;
        return prev;
      });
    }, 1800);

    // Mark animation as done after ~7s
    const timeout = setTimeout(() => {
      animationDone.current = true;
      // If API already responded, redirect
      if (profileId.current) {
        router.push(`/seelen-profil/vorschau?id=${profileId.current}`);
      }
    }, 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  // Call API on mount
  useEffect(() => {
    if (apiCalled.current) return;
    apiCalled.current = true;

    async function calculate() {
      try {
        const res = await fetch("/seelen-profil/api/calculate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(quizData),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || "Berechnung fehlgeschlagen");
        }

        const data = await res.json();
        profileId.current = data.profilId;

        // If animation already done, redirect immediately
        if (animationDone.current) {
          router.push(`/seelen-profil/vorschau?id=${data.profilId}`);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Ein Fehler ist aufgetreten."
        );
      }
    }

    calculate();
  }, [quizData, router]);

  if (error) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <div className="glass-card p-8">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Erneut versuchen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center min-h-[50vh]">
      {/* Cosmic calculation animation */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 mb-12">
        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-full border border-[var(--gold)]/20"
          style={{ animation: "quiz-spin-slow 12s linear infinite" }}
        />
        {/* Middle ring */}
        <div
          className="absolute inset-4 rounded-full border border-[var(--teal)]/30"
          style={{ animation: "quiz-spin-slow 8s linear infinite reverse" }}
        />
        {/* Inner ring */}
        <div
          className="absolute inset-8 rounded-full border border-[var(--gold)]/40"
          style={{ animation: "quiz-spin-slow 6s linear infinite" }}
        />
        {/* Core ring */}
        <div
          className="absolute inset-12 rounded-full border-2 border-[var(--gold)]/50"
          style={{ animation: "quiz-pulse-ring 2s ease-in-out infinite" }}
        />
        {/* Center glow */}
        <div className="absolute inset-16 rounded-full flex items-center justify-center">
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(201,163,92,0.4) 0%, rgba(201,163,92,0.1) 50%, transparent 70%)",
              animation: "quiz-pulse-glow-center 3s ease-in-out infinite",
            }}
          />
        </div>

        {/* Orbiting dots */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              animation: `quiz-spin-slow ${10 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? "var(--gold)" : "var(--teal)",
                top: "0",
                left: "50%",
                transform: "translateX(-50%)",
                boxShadow: `0 0 10px ${i % 2 === 0 ? "rgba(201,163,92,0.6)" : "rgba(45,212,191,0.6)"}`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Text messages */}
      <div className="h-8 flex items-center justify-center">
        <p
          key={messageIndex}
          className="text-[var(--text-secondary)] text-sm md:text-base text-center quiz-fade-in"
        >
          {messages[messageIndex]}
        </p>
      </div>
    </div>
  );
};
