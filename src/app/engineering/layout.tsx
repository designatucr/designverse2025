import Navigation from "@/components/engineering/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full">
      <Navigation />
      <div className="mt-20">{children}</div>
    </div>
  );
};

export default Layout;
