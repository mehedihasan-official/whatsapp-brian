import { ContactScreen } from "@/components/ContactScreen";
import conversationData from "@/data/conversation.json";
import type { Conversation } from "@/types/conversation";

const conversation = conversationData as Conversation;

export default function ContactPage() {
  return <ContactScreen conversation={conversation} />;
}
