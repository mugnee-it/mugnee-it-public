import Testimonials from "@/components/sections/Testimonials";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Testimonials />
    </>
  );
}
