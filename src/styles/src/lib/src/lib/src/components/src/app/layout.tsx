import './globals.css';
import { ReactNode } from 'react';
import { AuthButtons } from '@/components/AuthButtons';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-bold text-xl">Marketplace TN</a>
            <nav className="flex items-center gap-4 text-sm">
              <a href="/new" className="px-3 py-1.5 rounded-lg bg-black text-white">Publier</a>
              <a href="/inbox" className="px-3 py-1.5 rounded-lg border">Messages</a>
              <AuthButtons />
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
