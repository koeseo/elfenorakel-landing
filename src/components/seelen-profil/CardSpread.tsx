"use client";

import { useState, useMemo, useCallback } from "react";
import { allCards, type TarotCard } from "@/lib/seelen-profil/tarot-karten";

interface CardSpreadProps {
  selected: string[];
  onSelect: (cardIds: string[]) => void;
  maxCards: number;
}

/**
 * Shuffle an array deterministically using a simple seed from current date.
 * This ensures the same 12 cards appear for a user within a session.
 */
function shuffleCards(cards: TarotCard[], count: number): TarotCard[] {
  const shuffled = [...cards];
  // Fisher-Yates shuffle using Math.random (non-deterministic, new shuffle each mount)
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export const CardSpread = ({ selected, onSelect, maxCards }: CardSpreadProps) => {
  // Pick 12 random cards on first render
  const displayCards = useMemo(() => shuffleCards(allCards, 12), []);

  // Track which cards have been flipped (revealed)
  const [flipped, setFlipped] = useState<Set<string>>(new Set());

  const handleCardClick = useCallback(
    (cardId: string) => {
      // Always flip the card to reveal it
      setFlipped((prev) => {
        const next = new Set(prev);
        next.add(cardId);
        return next;
      });

      // Toggle selection
      if (selected.includes(cardId)) {
        onSelect(selected.filter((id) => id !== cardId));
      } else if (selected.length < maxCards) {
        onSelect([...selected, cardId]);
      }
    },
    [selected, onSelect, maxCards]
  );

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto">
      {displayCards.map((card) => {
        const isFlipped = flipped.has(card.id);
        const isSelected = selected.includes(card.id);
        const isDisabled = !isSelected && selected.length >= maxCards;

        return (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            disabled={isDisabled && !isFlipped}
            className={`
              relative aspect-[2/3] rounded-xl cursor-pointer
              transition-all duration-300
              ${isDisabled && !isSelected ? "opacity-40" : ""}
              ${isSelected ? "scale-[1.03]" : "hover:scale-[1.02]"}
            `}
            style={{ perspective: "600px" }}
          >
            {/* Card flipper container */}
            <div
              className="relative w-full h-full transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Card Back */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div
                  className="w-full h-full rounded-xl border border-[var(--glass-border)] flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #1a1a2e 100%)",
                  }}
                >
                  {/* Cosmic card back pattern */}
                  <div className="absolute inset-2 rounded-lg border border-[var(--gold)]/20">
                    <div className="absolute inset-2 rounded-md border border-[var(--gold)]/10 flex items-center justify-center">
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full opacity-60"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(201,163,92,0.4) 0%, rgba(201,163,92,0.1) 50%, transparent 70%)",
                          boxShadow: "0 0 30px rgba(201,163,92,0.2)",
                        }}
                      />
                    </div>
                  </div>
                  {/* Corner symbols */}
                  <div className="absolute top-3 left-3 text-[var(--gold)]/30 text-xs">&#10022;</div>
                  <div className="absolute bottom-3 right-3 text-[var(--gold)]/30 text-xs">&#10022;</div>
                </div>
              </div>

              {/* Card Front (shown after flip) */}
              <div
                className={`
                  absolute inset-0 rounded-xl overflow-hidden
                  border-2 transition-all duration-300
                  ${
                    isSelected
                      ? "border-[var(--gold)] shadow-[0_0_20px_rgba(201,163,92,0.4)]"
                      : "border-[var(--glass-border)]"
                  }
                `}
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                {/* Card image */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-2">
                  <p className="text-[10px] md:text-xs text-center text-white font-medium truncate">
                    {card.name}
                  </p>
                </div>
                {/* Selected checkmark */}
                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[var(--gold)] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};
