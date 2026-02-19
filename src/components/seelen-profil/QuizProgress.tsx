"use client";

import { Check } from "lucide-react";

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = [
  "Geburtsdaten",
  "Kartenwahl",
  "Seelen-Fragen",
  "E-Mail",
  "Berechnung",
];

export const QuizProgress = ({ currentStep, totalSteps }: QuizProgressProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8 md:mb-12 px-4">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => {
          const step = i + 1;
          const isActive = step === currentStep;
          const isCompleted = step < currentStep;

          return (
            <div key={step} className="flex items-center flex-1 last:flex-none">
              {/* Step dot + label */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center
                    text-sm font-medium transition-all duration-500
                    ${
                      isCompleted
                        ? "bg-[var(--gold)] text-[var(--bg-primary)]"
                        : isActive
                        ? "bg-[var(--gold)]/20 border-2 border-[var(--gold)] text-[var(--gold)] shadow-[0_0_20px_rgba(201,163,92,0.3)]"
                        : "bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-muted)]"
                    }
                  `}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    step
                  )}
                </div>
                {/* Label — hidden on mobile, shown on md+ */}
                <span
                  className={`
                    hidden md:block mt-2 text-xs whitespace-nowrap transition-colors duration-300
                    ${
                      isActive
                        ? "text-[var(--gold)]"
                        : isCompleted
                        ? "text-[var(--text-secondary)]"
                        : "text-[var(--text-muted)]"
                    }
                  `}
                >
                  {stepLabels[i]}
                </span>
              </div>

              {/* Connector line */}
              {step < totalSteps && (
                <div className="flex-1 mx-2 md:mx-3 mt-0 md:-mt-5">
                  <div className="h-[2px] rounded-full overflow-hidden bg-[var(--glass-border)]">
                    <div
                      className="h-full bg-[var(--gold)] transition-all duration-700 ease-out"
                      style={{
                        width: isCompleted ? "100%" : "0%",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
