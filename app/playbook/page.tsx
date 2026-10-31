import { getAllPlaybookTopics } from "@/lib/data";
import PlaybookView from "@/components/PlaybookView";

export default function PlaybookPage() {
  const topics = getAllPlaybookTopics();
  return <PlaybookView topics={topics} />;
}
