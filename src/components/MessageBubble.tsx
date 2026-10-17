import type { Conversation, ConversationMessage } from "@/types/conversation";
import { DoubleCheckIcon, SingleCheckIcon } from "./icons";
import { ImageMessage } from "./ImageMessage";
import { VoiceMessage } from "./VoiceMessage";

function MessageMeta({ message }: { message: ConversationMessage }) {
  return (
    <span className="message-meta">
      <time className="message-time">{message.time}</time>
      {message.from === "me" && (
        <span
          className={`message-ticks ticks-${message.status}`}
          aria-label={message.status}
        >
          {message.status === "sent" ? (
            <SingleCheckIcon />
          ) : (
            <DoubleCheckIcon />
          )}
        </span>
      )}
    </span>
  );
}

export function MessageBubble({
  message,
  isFirst,
  contact,
}: {
  message: ConversationMessage;
  isFirst: boolean;
  contact: Conversation["contact"];
}) {
  const outgoing = message.from === "me";
  const bubbleClass = `message-bubble ${outgoing ? "outgoing" : "incoming"} ${isFirst ? "first-in-run" : ""}`;

  if (message.type === "voice") {
    return (
      <VoiceMessage
        message={message}
        bubbleClass={bubbleClass}
        contact={contact}
      />
    );
  }

  if (message.type === "image") {
    return <ImageMessage message={message} bubbleClass={bubbleClass} />;
  }

  return (
    <div className={bubbleClass}>
      <p className="message-copy">
        {message.text}
        <MessageMeta message={message} />
      </p>
    </div>
  );
}

export { MessageMeta };
