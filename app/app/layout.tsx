export const metadata = {
  title: "Marketplace TN",
  description: "Marketplace local 100% gratuit",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
