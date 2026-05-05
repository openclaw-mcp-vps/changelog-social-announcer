import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Changelog Social Announcer — Auto-post changelogs to social media',
  description: 'Automatically format and post product changelogs to Twitter, LinkedIn, and other social platforms. Built for product managers and indie hackers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="af8b12ff-5821-4d48-8ba6-1e7436f4b070"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
