"use client";

import { useState, useCallback } from "react";
import { QuizProgress } from "./QuizProgress";
import { StepGeburtsdaten } from "./steps/StepGeburtsdaten";
import { StepKartenwahl } from "./steps/StepKartenwahl";
import { StepSeelenFragen } from "./steps/StepSeelenFragen";
import { StepEmail } from "./steps/StepEmail";
import { StepBerechnung } from "./steps/StepBerechnung";

interface QuizState {
  step: 1 | 2 | 3 | 4 | 5;
  vorname: string;
  geburtsdatum: string;
  geburtszeit: string;
  kartenwahl: string[];
  seelenFragen: { frageId: string; antwort: string }[];
  email: string;
}

export const QuizContainer = () => {
  const [state, setState] = useState<QuizState>({
    step: 1,
    vorname: "",
    geburtsdatum: "",
    geburtszeit: "",
    kartenwahl: [],
    seelenFragen: [],
    email: "",
  });

  const goToStep = useCallback((step: QuizState["step"]) => {
    setState((prev) => ({ ...prev, step }));
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const updateFields = useCallback(
    (fields: Partial<Omit<QuizState, "step">>) => {
      setState((prev) => ({ ...prev, ...fields }));
    },
    []
  );

  return (
    <div className="min-h-screen py-8 md:py-12 px-4">
      {/* Progress bar -- hidden on step 5 (calculation) */}
      {state.step < 5 && (
        <QuizProgress currentStep={state.step} totalSteps={5} />
      )}

      {/* Step container with CSS transition */}
      <div className="relative">
        <div key={state.step} className="quiz-step-enter">
          {state.step === 1 && (
            <StepGeburtsdaten
              vorname={state.vorname}
              geburtsdatum={state.geburtsdatum}
              geburtszeit={state.geburtszeit}
              onUpdate={(data) => updateFields(data)}
              onNext={() => goToStep(2)}
            />
          )}

          {state.step === 2 && (
            <StepKartenwahl
              kartenwahl={state.kartenwahl}
              onUpdate={(kartenwahl) => updateFields({ kartenwahl })}
              onNext={() => goToStep(3)}
            />
          )}

          {state.step === 3 && (
            <StepSeelenFragen
              seelenFragenAnswers={state.seelenFragen}
              onUpdate={(seelenFragen) => updateFields({ seelenFragen })}
              onNext={() => goToStep(4)}
            />
          )}

          {state.step === 4 && (
            <StepEmail
              email={state.email}
              onUpdate={(email) => updateFields({ email })}
              onSubmit={() => goToStep(5)}
            />
          )}

          {state.step === 5 && (
            <StepBerechnung
              quizData={{
                vorname: state.vorname,
                geburtsdatum: state.geburtsdatum,
                geburtszeit: state.geburtszeit,
                kartenwahl: state.kartenwahl,
                seelenFragen: state.seelenFragen,
                email: state.email,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
