"use client";

import type { Conversation } from "@/types/conversation";
import { useEffect, useRef } from "react";
import { DateChip } from "./DateChip";
import { ChatHeader } from "./Header";
import { InputBar } from "./InputBar";
import { MessageBubble } from "./MessageBubble";

export function ChatScreen({ conversation }: { conversation: Conversation }) {
  const historyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (historyRef.current)
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
  }, []);

  return (
    <main className="app-shell">
      <div className="app-surface chat-screen">
        <ChatHeader contact={conversation.contact} />
        <section
          className="chat-history"
          aria-label={`Conversation with ${conversation.contact.name}`}
          ref={historyRef}
        >
          <ol className="message-list">
            {conversation.messages.map((item, index) => {
              if (item.type === "date")
                return <DateChip label={item.text} key={item.id} />;

              const previous = conversation.messages[index - 1];
              const isFirst =
                !previous ||
                previous.type === "date" ||
                previous.from !== item.from;
              return (
                <li
                  className={`message-row ${item.from === "me" ? "row-outgoing" : "row-incoming"} ${isFirst ? "run-start" : "same-run"}`}
                  key={item.id}
                >
                  <MessageBubble
                    message={item}
                    isFirst={isFirst}
                    contact={conversation.contact}
                  />
                </li>
              );
            })}
          </ol>
        </section>
        <InputBar />
      </div>
    </main>
  );
}
