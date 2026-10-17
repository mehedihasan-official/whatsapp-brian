export function DateChip({ label }: { label: string }) {
  return (
    <li className="date-row" aria-label={label}>
      <span className="date-chip">{label}</span>
    </li>
  );
}
