import { notFound } from "next/navigation";
import { getAllCategories, getCategoryById } from "@/lib/data";
import QuizEngine from "@/components/QuizEngine";

export function generateStaticParams() {
  const categories = getAllCategories();
  const params: { categoryId: string }[] = [];

  categories.forEach((cat) => {
    params.push({ categoryId: cat.id });
  });

  // Dodatkowe numery i aliasy
  params.push({ categoryId: "1" });
  params.push({ categoryId: "2" });
  params.push({ categoryId: "3" });
  params.push({ categoryId: "4" });
  params.push({ categoryId: "5" });
  params.push({ categoryId: "pm" });
  params.push({ categoryId: "scrum" });
  params.push({ categoryId: "po" });
  params.push({ categoryId: "agile" });

  return params;
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;
  const category = getCategoryById(categoryId);

  if (!category) {
    notFound();
  }

  return <QuizEngine category={category} />;
}

