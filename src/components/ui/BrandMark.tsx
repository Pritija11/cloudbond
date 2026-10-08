export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M9 19L19 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="7" cy="21" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="21" cy="7" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}
