export interface iconProps {
  className?: string;
}

export default function IconPlay({className = ""}: iconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M22.32 12L5 2V22L22.32 12Z"/>
    </svg>
  )
}