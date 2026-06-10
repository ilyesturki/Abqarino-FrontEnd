import Header from "@/components/Header/Header";

export default function MoyenneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-black-100">
      <Header />
      {children}
    </div>
  );
}
