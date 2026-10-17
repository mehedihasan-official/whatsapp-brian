type AvatarProps = {
  name: string;
  src: string;
  size: "small" | "regular" | "large";
};

export function Avatar({ name, src, size }: AvatarProps) {
  return (
    <span
      className={`avatar avatar-${size}`}
      role="img"
      aria-label={`${name} avatar`}
      style={{ backgroundImage: `url("${src}")` }}
    />
  );
}
