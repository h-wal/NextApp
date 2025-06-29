export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
            <div className="border border-white rounded-b-2xl p-4">
                Header
            </div>
        {children}
        <div className="border border-white rounded-t-2xl p-4 m02">
            Footer
        </div>
        </body>
    </html>
  );
}
