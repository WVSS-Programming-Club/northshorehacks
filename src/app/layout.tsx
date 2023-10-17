import type { Metadata } from "next"
import "./globals.scss"


export const metadata: Metadata = {
    title: "WVSS Programming Club",
    description: "WVSS' premier programming club for all your coding needs.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
