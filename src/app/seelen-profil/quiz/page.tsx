import type { Metadata } from "next";
import { QuizContainer } from "@/components/seelen-profil/QuizContainer";

export const metadata: Metadata = {
  title: "Seelen-Profil Quiz | Entdecke deinen Archetyp",
  description:
    "Beantworte 8 intuitive Fragen und wähle 5 Tarot-Karten, um dein einzigartiges 9-dimensionales Seelen-Profil zu berechnen.",
};

export default function QuizPage() {
  return <QuizContainer />;
}
