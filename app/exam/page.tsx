import { getAllQuestions } from "@/lib/data";
import ExamEngine from "@/components/ExamEngine";

export default function ExamPage() {
  const allQuestions = getAllQuestions();
  return <ExamEngine allQuestions={allQuestions} />;
}

