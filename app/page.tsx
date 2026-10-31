import { getAllCategories } from "@/lib/data";
import HomeView from "@/components/HomeView";

export default function HomePage() {
  const categories = getAllCategories();
  return <HomeView categories={categories} />;
}
