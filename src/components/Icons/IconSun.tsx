export interface IconSunProps {
  className?: string;
}

export default function IconSun({ className = "" }: IconSunProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1200 1200">
      <g>
        <circle cx="599.7" cy="600.7" r="354.3" fill="currentColor" />
        <circle cx="599.5" cy="77.5" r="77.5" fill="currentColor" />
        <circle cx="599.5" cy="1121.5" r="77.5" fill="currentColor" />
        <circle cx="1122.5" cy="599.5" r="77.5" fill="currentColor" />
        <circle cx="76.5" cy="599.5" r="77.5" fill="currentColor" />
        <circle cx="978.5" cy="232.5" r="77.5" fill="currentColor" />
        <circle cx="218.5" cy="966.5" r="77.5" fill="currentColor" />
        <circle cx="1002.5" cy="926.5" r="77.5" fill="currentColor" />
        <circle cx="218.5" cy="232.5" r="77.5" fill="currentColor" />
      </g>
    </svg>
  )
}