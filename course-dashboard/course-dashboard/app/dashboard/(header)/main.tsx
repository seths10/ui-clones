import { Bell, BookOpenText, Info, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="mx-auto px-8 py-4 border-b border-slate-200">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-favCol flex items-center justify-center rounded">
            <BookOpenText className="text-white" size={20} />
          </div>
          <p className="font-bold text-favCol">Belagar.co</p>
        </div>

        <div className="flex gap-2">
          <div className="rounded-lg flex items-center px-2.5 py-2 border border-slate-200 justify-center">
            <Bell className="text-black w-4 h-4" />
          </div>
          <div className="rounded-lg flex items-center px-2.5 py-2 border border-slate-200 justify-center">
            <Info className="text-black w-4 h-4" />
          </div>
          <div className="rounded-lg flex gap-1 items-center px-2 py-2 border border-slate-200 justify-center">
            <Avatar className="h-5 w-5">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>OS</AvatarFallback>
            </Avatar>

            <div className="flex items-center gap-2">
              <p className="text-sm">Onky Soerya</p>
              <ChevronDown className="text-black w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
