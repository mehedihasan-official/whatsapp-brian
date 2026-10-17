import { ChatScreen } from "@/components/ChatScreen";
import conversationData from "@/data/conversation.json";
import type { Conversation } from "@/types/conversation";

const conversation = conversationData as Conversation;

export default function Home() {
  return <ChatScreen conversation={conversation} />;
}
