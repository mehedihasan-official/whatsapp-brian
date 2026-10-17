import Link from "next/link";
import type { Conversation } from "@/types/conversation";
import { Avatar } from "./Avatar";
import { ChevronLeftIcon, ContactCardIcon, PhoneIcon } from "./icons";

export function ChatHeader({ contact }: { contact: Conversation["contact"] }) {
  return (
    <header className="chat-header">
      <Link className="back-button" href="/" aria-label="Back to chats">
        <ChevronLeftIcon />
        <span className="unread-count" aria-label="51 unread messages">51</span>
      </Link>
      <Link className="header-profile" href="/contact" aria-label={`Open ${contact.name} details`}>
        <Avatar name={contact.name} src={contact.avatar} size="regular" />
        <span className="header-copy">
          <span className="header-name">{contact.username}</span>
        </span>
      </Link>
      <div className="header-actions">
        <button type="button" className="header-action" aria-label="Contact information"><ContactCardIcon /></button>
        <button type="button" className="header-action" aria-label="Start audio call"><PhoneIcon /></button>
      </div>
    </header>
  );
}
