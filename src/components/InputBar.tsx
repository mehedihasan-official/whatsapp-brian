import { CameraIcon, MicIcon, PlusIcon, StickerIcon } from "./icons";

export function InputBar() {
  return (
    <form
      className="input-bar"
      aria-label="Message composer"
      onSubmit={(event) => event.preventDefault()}
    >
      <button
        type="button"
        className="composer-icon"
        aria-label="Add attachment"
      >
        <PlusIcon />
      </button>
      <label className="message-field">
        <span className="visually-hidden">Message</span>
        <input type="text" placeholder="Message" readOnly />
        <button
          type="button"
          className="field-sticker"
          aria-label="Open stickers"
        >
          <StickerIcon />
        </button>
      </label>
      <button type="button" className="composer-icon" aria-label="Open camera">
        <CameraIcon />
      </button>
      <button
        type="button"
        className="composer-mic"
        aria-label="Record voice message"
      >
        <MicIcon />
      </button>
    </form>
  );
}
