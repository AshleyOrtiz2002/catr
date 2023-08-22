import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import './globals.css'


export const metadata = {
  title: 'Car',
  description: 'Find best car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
