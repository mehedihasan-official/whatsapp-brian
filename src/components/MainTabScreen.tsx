import Link from "next/link";
import type { Conversation, ConversationMessage } from "@/types/conversation";
import type { CallsData } from "@/data/calls";
import { Avatar } from "./Avatar";
import { DoubleCheckIcon } from "./icons";
import {
  CameraIcon,
  CallsTabIcon,
  ChatsTabIcon,
  IncomingCallIcon,
  MoreVertIcon,
  NewChatIcon,
  PhoneIcon,
  SearchIcon,
  ToolsTabIcon,
  UpdatesTabIcon,
} from "./icons";

export type MainTab = "chats" | "calls" | "updates" | "tools";

const tabs: { id: MainTab; label: string; href: string }[] = [
  { id: "chats", label: "Chats", href: "/" },
  { id: "calls", label: "Calls", href: "/calls" },
  { id: "updates", label: "Updates", href: "/updates" },
  { id: "tools", label: "Tools", href: "/tools" },
];

function TabIcon({ tab }: { tab: MainTab }) {
  switch (tab) {
    case "chats":
      return <ChatsTabIcon />;
    case "calls":
      return <CallsTabIcon />;
    case "updates":
      return <UpdatesTabIcon />;
    case "tools":
      return <ToolsTabIcon />;
  }
}

function ChatRow({ conversation }: { conversation: Conversation }) {
  const lastMessage = [...conversation.messages]
    .reverse()
    .find((item): item is ConversationMessage => item.type !== "date");

  return (
    <Link className="main-list-row chat-list-row" href="/chat">
      <Avatar
        name={conversation.contact.name}
        src={conversation.contact.avatar}
        size="large"
      />
      <span className="main-row-content">
        <span className="main-row-topline">
          <span className="main-row-name">{conversation.contact.name}</span>
          <time className="main-row-date">7/28/26</time>
        </span>
        <span className="main-row-preview">
          {lastMessage?.from === "me" && (
            <DoubleCheckIcon className="preview-read-ticks" />
          )}
          <span className="main-row-preview-text">
            {lastMessage?.text ?? ""}
          </span>
        </span>
        <span className="client-tag">CLIENT</span>
      </span>
    </Link>
  );
}

function CallsRow({ calls }: { calls: CallsData }) {
  return (
    <Link className="main-list-row calls-list-row" href="/calls/info">
      <Avatar
        name={calls.contact.name}
        src={calls.contact.avatar}
        size="large"
      />
      <span className="main-row-content">
        <span className="main-row-name">{calls.contact.name}</span>
        <span className="calls-row-subtitle">
          <IncomingCallIcon />
          <span>{calls.latestCall.subtitle}</span>
        </span>
      </span>
      <span className="calls-row-action" aria-hidden="true">
        <PhoneIcon />
      </span>
    </Link>
  );
}

function EmptyState({ tab }: { tab: "updates" | "tools" }) {
  return (
    <div className="main-empty-state">
      <span className="main-empty-icon">
        <TabIcon tab={tab} />
      </span>
      <p>{tab === "updates" ? "No updates yet" : "No tools available"}</p>
    </div>
  );
}

export function MainTabScreen({
  activeTab,
  conversation,
  calls,
}: {
  activeTab: MainTab;
  conversation?: Conversation;
  calls?: CallsData;
}) {
  const title = tabs.find((tab) => tab.id === activeTab)?.label ?? "WhatsApp";

  return (
    <main className="app-shell main-tabs-shell">
      <div className="app-surface main-tabs-screen">
        <header className="main-header">
          <h1>{activeTab === "chats" ? "WhatsApp" : title}</h1>
          <div className="main-header-actions">
            <button type="button" aria-label="Camera">
              <CameraIcon />
            </button>
            <button type="button" aria-label="More options">
              <MoreVertIcon />
            </button>
          </div>
        </header>

        <div className="main-search" role="search">
          <SearchIcon />
          <span>Search…</span>
        </div>

        <section className="main-tab-content" aria-label={title}>
          {activeTab === "chats" && conversation && (
            <ChatRow conversation={conversation} />
          )}
          {activeTab === "calls" && calls && <CallsRow calls={calls} />}
          {(activeTab === "updates" || activeTab === "tools") && (
            <EmptyState tab={activeTab} />
          )}
        </section>

        {activeTab === "chats" && (
          <button className="new-chat-fab" type="button" aria-label="New chat">
            <NewChatIcon />
          </button>
        )}

        <nav className="bottom-menu" aria-label="Main navigation">
          {tabs.map((tab) => (
            <Link
              className={`bottom-menu-item ${activeTab === tab.id ? "active" : ""}`}
              href={tab.href}
              key={tab.id}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              <span className="bottom-menu-icon-wrap">
                <TabIcon tab={tab.id} />
                {(tab.id === "updates" || tab.id === "tools") && (
                  <span className="bottom-menu-badge" />
                )}
              </span>
              <span className="bottom-menu-label">{tab.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
