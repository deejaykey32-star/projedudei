import { notFound } from "next/navigation";
import { getAllCategories, getCategoryById } from "@/lib/data";
import QuizEngine from "@/components/QuizEngine";

export function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    categoryId: cat.id,
  }));
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

