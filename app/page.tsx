import { getAllCategories, getAllCourseSections } from "@/lib/data";
import HomeView from "@/components/HomeView";

export default function HomePage() {
  const categories = getAllCategories();
  const sections = getAllCourseSections();
  return <HomeView categories={categories} sections={sections} />;
}
