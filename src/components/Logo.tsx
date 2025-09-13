export default function Logo({ className = 'h-7 w-7' }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="bn-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#22D3EE" />
                </linearGradient>
            </defs>

            <rect x="3" y="3" width="26" height="26" rx="6" fill="url(#bn-grad)" opacity="0.25" />
            <path
                d="M9 22V10h5.6c2.2 0 3.4 1.2 3.4 2.9 0 1.1-.6 2-1.7 2.4 1.4.4 2.2 1.4 2.2 2.8 0 1.9-1.3 3-3.6 3H9Zm3-7.8h2.1c.9 0 1.4-.4 1.4-1.1s-.5-1.1-1.4-1.1H12v2.2Zm0 5h2.6c1 0 1.6-.4 1.6-1.2s-.6-1.2-1.6-1.2H12v2.4Z"
                fill="#fff"
            />
            <path
                d="M19 22V10h3l3 5.4L28 10h3v12h-3v-7l-3 5-3-5v7h-3Z"
                fill="#fff"
                opacity="0.95"
            />
        </svg>
    )
}