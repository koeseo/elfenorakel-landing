"use client";

import { useState, useCallback } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  seelenFragen,
  type SeelenFrageOption,
} from "@/lib/seelen-profil/seelen-fragen";

interface StepSeelenFragenProps {
  seelenFragenAnswers: { frageId: string; antwort: string }[];
  onUpdate: (answers: { frageId: string; antwort: string }[]) => void;
  onNext: () => void;
}

export const StepSeelenFragen = ({
  seelenFragenAnswers,
  onUpdate,
  onNext,
}: StepSeelenFragenProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const totalQuestions = seelenFragen.length;
  const frage = seelenFragen[currentQ];

  // Find current answer for this question
  const currentAnswer = seelenFragenAnswers.find(
    (a) => a.frageId === frage.id
  )?.antwort;

  const handleSelect = useCallback(
    (option: SeelenFrageOption) => {
      const updated = seelenFragenAnswers.filter(
        (a) => a.frageId !== frage.id
      );
      updated.push({ frageId: frage.id, antwort: option.id });
      onUpdate(updated);

      // Auto-advance after a short delay
      setTimeout(() => {
        if (currentQ < totalQuestions - 1) {
          setDirection("forward");
          setCurrentQ((q) => q + 1);
        }
      }, 400);
    },
    [frage.id, seelenFragenAnswers, onUpdate, currentQ, totalQuestions]
  );

  const goBack = useCallback(() => {
    if (currentQ > 0) {
      setDirection("backward");
      setCurrentQ((q) => q - 1);
    }
  }, [currentQ]);

  const allAnswered = seelenFragenAnswers.length === totalQuestions;
  const isLastQuestion = currentQ === totalQuestions - 1;

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Question counter */}
      <div className="text-center mb-6">
        <p className="text-[var(--text-muted)] text-xs uppercase tracking-widest mb-1">
          Frage {currentQ + 1} von {totalQuestions}
        </p>
        {/* Mini progress bar */}
        <div className="w-32 h-1 mx-auto rounded-full bg-[var(--glass-bg)] overflow-hidden">
          <div
            className="h-full bg-[var(--gold)] rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${((currentQ + 1) / totalQuestions) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div
        key={frage.id}
        className={`
          transition-all duration-500 ease-out
          ${direction === "forward" ? "quiz-slide-in-right" : "quiz-slide-in-left"}
        `}
      >
        <h2 className="text-xl md:text-2xl font-bold text-center text-[var(--text-primary)] mb-8">
          {frage.frage}
        </h2>

        {/* Options grid */}
        <div
          className={`grid gap-3 md:gap-4 ${
            frage.optionen.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-2"
          }`}
        >
          {frage.optionen.map((option) => {
            const isChosen = currentAnswer === option.id;

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option)}
                className={`
                  relative overflow-hidden rounded-xl p-4 md:p-6
                  text-center transition-all duration-300
                  border-2
                  ${
                    isChosen
                      ? "border-[var(--gold)] shadow-[0_0_25px_rgba(201,163,92,0.4)] scale-[1.02]"
                      : "border-transparent hover:border-[var(--glass-border-gold)] hover:scale-[1.01]"
                  }
                `}
                style={{ minHeight: frage.optionen.length === 2 ? "120px" : "100px" }}
              >
                {/* Gradient background */}
                <div
                  className="absolute inset-0 opacity-60 rounded-xl"
                  style={{
                    background: option.gradient || "var(--glass-bg)",
                  }}
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/30 rounded-xl" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
                  {option.element && (
                    <span className="text-2xl md:text-3xl">
                      {option.element === "feuer" && "\u{1F525}"}
                      {option.element === "wasser" && "\u{1F4A7}"}
                      {option.element === "luft" && "\u{1F4A8}"}
                      {option.element === "erde" && "\u{1F30D}"}
                    </span>
                  )}
                  <span className="text-sm md:text-base font-medium text-white">
                    {option.label}
                  </span>
                </div>

                {/* Selection indicator */}
                {isChosen && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[var(--gold)] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={goBack}
          disabled={currentQ === 0}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl text-sm
            transition-all duration-300
            ${
              currentQ === 0
                ? "opacity-0 pointer-events-none"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)]"
            }
          `}
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück
        </button>

        {/* Show "Weiter" button on last question when all answered */}
        {isLastQuestion && allAnswered && (
          <button
            onClick={onNext}
            className="
              flex items-center gap-2
              px-8 py-3 rounded-xl font-semibold text-sm uppercase tracking-wider
              bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] text-white
              shadow-[0_4px_24px_rgba(201,163,92,0.3)]
              hover:shadow-[0_8px_40px_rgba(201,163,92,0.5)]
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            Weiter
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
