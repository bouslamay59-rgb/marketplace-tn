// app/layout.tsx
export const metadata = {
  title: 'Marketplace TN',
  description: 'Marketplace tunisien 100% gratuit',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
