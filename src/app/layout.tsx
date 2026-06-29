export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="h-16 border-b flex items-center justify-between px-8 bg-white sticky top-0 z-50">
          <div className="font-black text-xl">extrct.app</div>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="/">Home</a>
            <a href="/tools">Services</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
            <a href="#">Demo</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium">Sign In</button>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold">Get Started for Free</button>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t py-12 text-center text-gray-400 text-sm">
          © 2026 extrct.app Operations Terminal. All rights reserved.
        </footer>
      </body>
    </html>
  );
}