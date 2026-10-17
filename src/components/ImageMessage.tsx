import type { ConversationMessage } from "@/types/conversation";
import { MessageMeta } from "./MessageBubble";

export function ImageMessage({
  message,
  bubbleClass,
}: {
  message: ConversationMessage;
  bubbleClass: string;
}) {
  return (
    <div className={`${bubbleClass} image-bubble`}>
      <div
        className="message-image"
        role="img"
        aria-label={message.text}
        style={{ backgroundImage: `url("${message.src}")` }}
      >
        <MessageMeta message={message} />
      </div>
      <p className="image-caption">{message.text}</p>
    </div>
  );
}
