import Link from "next/link";
import type { CallsData, CallKind } from "@/data/calls";
import { Avatar } from "./Avatar";
import {
  CallHistoryIcon,
  ChevronLeftIcon,
  InfoCircleIcon,
  MessageActionIcon,
  PhoneIcon,
  VideoIcon,
} from "./icons";

const actions = [
  { label: "Message", icon: MessageActionIcon },
  { label: "Voice", icon: PhoneIcon },
  { label: "Video", icon: VideoIcon },
  { label: "Info", icon: InfoCircleIcon },
];

function CallHistoryRow({
  kind,
  type,
  time,
  duration,
}: {
  kind: CallKind;
  type: string;
  time: string;
  duration: string;
}) {
  return (
    <li className="call-history-row">
      <CallHistoryIcon kind={kind} className={`call-history-icon kind-${kind}`} />
      <span className="call-history-copy">
        <span className="call-history-type">{type}</span>
        <time className="call-history-time">{time}</time>
      </span>
      <span className="call-history-duration">{duration}</span>
    </li>
  );
}

export function CallInfoScreen({ data }: { data: CallsData }) {
  return (
    <main className="app-shell call-info-shell">
      <section className="app-surface call-info-screen">
        <header className="call-info-header">
          <Link className="call-info-back" href="/calls" aria-label="Back to Calls">
            <ChevronLeftIcon />
          </Link>
          <h1>Call info</h1>
          <button className="call-info-edit" type="button">Edit</button>
        </header>

        <div className="call-info-scroll">
          <section className="call-profile">
            <Avatar
              name={data.contact.name}
              src={data.contact.avatar}
              size="large"
            />
            <h2>{data.contact.name}</h2>
            <p>{data.contact.phone}</p>
          </section>

          <div className="call-info-actions" aria-label="Contact actions">
            {actions.map(({ label, icon: Icon }) => (
              <button className="call-info-action" type="button" key={label}>
                <Icon />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <section className="call-history" aria-label="Call history">
            {data.groups.map((group) => (
              <section className="call-date-group" key={group.date}>
                <h3>{group.date}</h3>
                <ul className="call-history-card">
                  {group.calls.map((call) => (
                    <CallHistoryRow key={call.id} {...call} />
                  ))}
                </ul>
              </section>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
