export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{background: 'red'}}>
       {children}
    </div>
  );
}
