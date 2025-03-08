import Footer from "@/components/Home/footer"
import Header from "@/components/Home/header"
import type { Metadata } from "next"
import type React from "react"


export const metadata: Metadata = {
    title: "Trust Legal",
    description: "Strategic business consulting services for sustainable growth",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">

            <body >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
