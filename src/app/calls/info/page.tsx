import { CallInfoScreen } from "@/components/CallInfoScreen";
import { callsData } from "@/data/calls";

export default function CallInfoPage() {
  return <CallInfoScreen data={callsData} />;
}
