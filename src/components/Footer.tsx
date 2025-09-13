export default function Footer() {
    return (
        <footer className="mt-24 border-t border-white/10 py-10">
            <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-sm text-neutral-400">
                    © {new Date().getFullYear()} Byte Networks. All rights reserved.
                </p>
                <div className="text-sm text-neutral-400">Built with Next.js + Tailwind</div>
            </div>
        </footer>
    )
}