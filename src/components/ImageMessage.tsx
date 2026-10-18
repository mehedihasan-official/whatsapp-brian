import type { ConversationMessage } from "@/types/conversation";
import { MessageMeta } from "./MessageBubble";

export function ImageMessage({
  message,
  bubbleClass,
}: {
  message: ConversationMessage;
  bubbleClass: string;
}) {
  const layoutClass =
    message.layout === "receipt"
      ? "receipt-bubble"
      : message.layout === "sticker"
        ? "sticker-bubble"
        : "";

  return (
    <div className={`${bubbleClass} image-bubble ${layoutClass}`}>
      <div
        className="message-image"
        role="img"
        aria-label={message.text}
        style={{ backgroundImage: `url("${message.src}")` }}
      >
        <MessageMeta message={message} />
      </div>
      {message.caption && <p className="image-caption">{message.caption}</p>}
    </div>
  );
}
