import type { Conversation, ConversationMessage } from "@/types/conversation";
import { Avatar } from "./Avatar";
import { MessageMeta } from "./MessageBubble";
import { MicIcon, PlayIcon } from "./icons";

const barHeights = [
  9, 16, 12, 21, 14, 25, 18, 11, 27, 17, 23, 12, 29, 16, 21, 10, 25, 15, 28, 12,
  20, 16, 26, 10, 18, 24, 13, 20, 11, 17,
];

export function VoiceMessage({
  message,
  bubbleClass,
  contact,
}: {
  message: ConversationMessage;
  bubbleClass: string;
  contact: Conversation["contact"];
}) {
  return (
    <div
      className={`${bubbleClass} voice-bubble`}
      aria-label={`Voice message, ${message.duration}`}
    >
      <span className="voice-avatar-wrap">
        <Avatar name={contact.name} src={contact.avatar} size="small" />
        <span className="voice-mic-badge">
          <MicIcon />
        </span>
      </span>
      <button
        type="button"
        className="voice-play"
        aria-label="Play voice message"
      >
        <PlayIcon />
      </button>
      <div className="voice-track">
        <div className="waveform" aria-hidden="true">
          <span className="progress-dot" />
          {barHeights.map((height, index) => (
            <span className="wave-bar" style={{ height }} key={index} />
          ))}
        </div>
        <span className="voice-duration">{message.duration}</span>
      </div>
      <MessageMeta message={message} />
    </div>
  );
}
