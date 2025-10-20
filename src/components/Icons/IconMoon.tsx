export interface IconMoonProps {
  className?: string;
}

export default function IconMoon({ className = "" }: IconMoonProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1200"
    >
      <g>
        <path d="M502.6,325.9c0-127.7,53.5-242.9,139.3-324.4C628.1,0.5,614.1,0,600,0C268.6,0,0,268.6,0,600s268.6,600,600,600
          c296.4,0,542.6-215,591.3-497.5c-69.6,44.7-152.5,70.6-241.4,70.6C702.9,773.1,502.6,572.9,502.6,325.9z" fill="currentColor" />
      </g>
    </svg>
  )
}