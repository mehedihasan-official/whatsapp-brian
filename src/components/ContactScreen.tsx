import type { Conversation } from "@/types/conversation";
import Link from "next/link";
import { ContactInfo } from "./ContactInfo";
import { ChevronLeftIcon } from "./icons";

export function ContactScreen({
  conversation,
}: {
  conversation: Conversation;
}) {
  const mediaPreviews = conversation.messages
    .filter((item) => item.type === "image")
    .map((item) => (item.type === "image" ? item.src : undefined))
    .filter((src): src is string => Boolean(src));

  return (
    <main className="app-shell">
      <div className="app-surface contact-screen">
        <header className="contact-header">
          <Link className="contact-back" href="/" aria-label="Back to chat">
            <ChevronLeftIcon />
          </Link>
          <h1>Contact details</h1>
        </header>
        <div className="contact-scroll">
          <ContactInfo
            contact={conversation.contact}
            mediaCount={mediaPreviews.length}
            mediaPreviews={mediaPreviews}
          />
        </div>
      </div>
    </main>
  );
}
