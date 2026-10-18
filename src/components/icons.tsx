import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m15 18-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m9 18 6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VideoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="6"
        width="12"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m15 10 6-3v10l-6-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.2 3.5h2.4l1.2 4.1-2 1.7a15 15 0 0 0 5.9 5.9l1.7-2 4.1 1.2v2.4a2 2 0 0 1-2.2 2c-7.1-.7-12.7-6.3-13.4-13.4a2 2 0 0 1 2-2.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StickerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M19 13V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M20 14h-4a2 2 0 0 0-2 2v4l6-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 9h7M8 13h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 8a2 2 0 0 1 2-2h2l1.3-2h5.4L16 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="3.3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function MicIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="9"
        y="3"
        width="6"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3m-3 0h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5.8c0-.8.9-1.3 1.6-.9l9.2 6.1a1.2 1.2 0 0 1 0 2l-9.2 6.1c-.7.4-1.6-.1-1.6-.9V5.8Z" />
    </svg>
  );
}

export function DoubleCheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="m1.5 8 4 4 8-8M7.5 8l4 4 7-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SingleCheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="m2 8 4 4 8-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle
        cx="10.8"
        cy="10.8"
        r="6.3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m15.5 15.5 4.2 4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoreVertIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="12" cy="5" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="12" cy="19" r="1.8" />
    </svg>
  );
}

export function ChatsTabIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 5h16v12H9l-5 3V5Z" fill="currentColor" />
      <path d="M8 9h8M8 13h6" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CallsTabIcon(props: IconProps) {
  return <PhoneIcon {...props} />;
}

export function UpdatesTabIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="5.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function ToolsTabIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 8h16v11H4zM3 5h18v2H3zM8 12h8M8 15h5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function NewChatIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 5h16v12H9l-5 3V5Z" fill="currentColor" />
      <path d="M12 8v6M9 11h6" stroke="#111" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MessageActionIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.2-3A7.5 7.5 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function InfoCircleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 11v5M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IncomingCallIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7.2 3.5h2.4l1.2 4.1-2 1.7a15 15 0 0 0 5.9 5.9l1.7-2 4.1 1.2v2.4a2 2 0 0 1-2.2 2c-7.1-.7-12.7-6.3-13.4-13.4a2 2 0 0 1 2-2.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.5 3.5h-4m4 0v4m0-4-5.2 5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CallHistoryIcon({
  kind,
  ...props
}: IconProps & { kind: "incoming" | "missed" | "unanswered" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6.5 3.5h2.3l1.4 4.1-2 1.7a15 15 0 0 0 6 6l1.7-2 4.1 1.4v2.3a2 2 0 0 1-2.2 2C10.7 18.2 5.8 13.3 5 6.2a2 2 0 0 1 1.5-2.7Z" fill="currentColor" />
      {kind !== "missed" && (
        <path
          d={kind === "incoming" ? "M19 4h-4m4 0v4m0-4-5 5" : "M14 4h5v5m0-5-6 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
