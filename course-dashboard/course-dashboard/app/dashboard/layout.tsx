import Header from "./(header)/main";
import SideBar from "./(sidebar)/main";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="flex h-[100vh]">
        <div className="w-2/5 border-r border-slate-200">
          <SideBar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
