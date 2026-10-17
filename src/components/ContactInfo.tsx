import type { Conversation } from "@/types/conversation";
import { Avatar } from "./Avatar";
import { ChevronRightIcon, PhoneIcon, SearchIcon, VideoIcon } from "./icons";

type ContactInfoProps = {
  contact: Conversation["contact"];
  mediaCount: number;
  mediaPreviews: string[];
};

function DetailRow({ label, value }: { label: string; value?: string }) {
  return (
    <button type="button" className="detail-row">
      <span className="detail-row-copy">
        <span className="detail-label">{label}</span>
        {value && <span className="detail-value">{value}</span>}
      </span>
      <ChevronRightIcon />
    </button>
  );
}

function ActionButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" className="contact-action">
      <span className="contact-action-icon">{children}</span>
      <span>{label}</span>
    </button>
  );
}

export function ContactInfo({
  contact,
  mediaCount,
  mediaPreviews,
}: ContactInfoProps) {
  return (
    <>
      <section className="contact-profile" aria-label="Contact profile">
        <Avatar name={contact.name} src={contact.avatar} size="large" />
        <h2>{contact.name}</h2>
        <p>{contact.phone}</p>
        <div className="contact-actions" aria-label="Contact actions">
          <ActionButton label="Audio">
            <PhoneIcon />
          </ActionButton>
          <ActionButton label="Video">
            <VideoIcon />
          </ActionButton>
          <ActionButton label="Search">
            <SearchIcon />
          </ActionButton>
        </div>
      </section>

      <section className="details-group" aria-label="Contact information">
        <DetailRow label="About" value={contact.about} />
        <div className="media-row">
          <div className="media-row-heading">
            <span>Media, links and docs</span>
            <span className="media-count">{mediaCount}</span>
            <ChevronRightIcon />
          </div>
          <div
            className="media-previews"
            aria-label={`${mediaCount} shared media items`}
          >
            {Array.from({ length: 3 }, (_, index) => (
              <span
                className={`media-preview media-preview-${index + 1}`}
                key={index}
                aria-hidden="true"
                style={
                  mediaPreviews[index]
                    ? { backgroundImage: `url("${mediaPreviews[index]}")` }
                    : undefined
                }
              />
            ))}
          </div>
        </div>
        <DetailRow label="Starred messages" />
      </section>

      <section className="details-group" aria-label="Chat settings">
        <DetailRow label="Notifications" />
        <DetailRow label="Wallpaper" />
      </section>
    </>
  );
}
