import { MainTabScreen } from "@/components/MainTabScreen";
import conversationData from "@/data/conversation.json";
import type { Conversation } from "@/types/conversation";

const conversation = conversationData as Conversation;

export default function Home() {
  return <MainTabScreen activeTab="chats" conversation={conversation} />;
}
