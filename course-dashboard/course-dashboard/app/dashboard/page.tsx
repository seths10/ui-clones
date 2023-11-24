import {X, AlertTriangle } from "lucide-react";

const MainPage = () => {
  return (
    <div className="h-full p-5">
      <div className="w-[80vw]">
        <div className=" flex items-center justify-between gap-1 px-3 py-2 border border-green-100 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-green-500 w-4 h-4" />
            <p>
              Take advantage of our annual discount (up to 20% off){" "}
              <span className="font-semi-bold text-green-500">Upgrade now</span>
            </p>
          </div>
          <X className="text-black w-4 h-4" />
        </div>
        
      </div>
    </div>
  );
};

export default MainPage;
