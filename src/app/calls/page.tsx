import { MainTabScreen } from "@/components/MainTabScreen";
import conversationData from "@/data/conversation.json";
import { callsData } from "@/data/calls";
import type { Conversation } from "@/types/conversation";

const conversation = conversationData as Conversation;

export default function CallsPage() {
  return (
    <MainTabScreen
      activeTab="calls"
      conversation={conversation}
      calls={callsData}
    />
  );
}
