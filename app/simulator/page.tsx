import { getAllScenarios } from "@/lib/data";
import ScenarioSimulator from "@/components/ScenarioSimulator";

export default function SimulatorPage() {
  const scenarios = getAllScenarios();
  return <ScenarioSimulator scenarios={scenarios} />;
}

