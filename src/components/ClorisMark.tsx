type Props = {
  className?: string
  size?: number
}

export function ClorisMark({ className, size = 280 }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>Cloris mark</title>
      <path
        d="M75 25C65 15 50 15 40 25C30 35 30 65 40 75C50 85 65 85 75 75"
        fill="none"
        className="cloris-mark__stroke"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="75" cy="25" r="4" className="cloris-mark__dot" />
    </svg>
  )
}
