import Navbar from "@/components/navigation/navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default PageLayout;
