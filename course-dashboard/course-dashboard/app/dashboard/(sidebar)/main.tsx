import {
  Plus,
  ArrowLeftFromLine,
  ChevronDown,
  Home,
  CalendarRange,
  Users2,
  Mic,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SideBar = () => {
  return (
    <div className="bg-slate-50 flex gap-3 flex-col px-5 py-5 h-full">
      <div className="flex justify-between items-center bg-white border border-slate-200 rounded-lg px-3 py-3">
        <div className="flex gap-1 items-center">
          <Avatar className="h-5 w-5 rounded">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>OS</AvatarFallback>
          </Avatar>
          <p>Potato Fam</p>
        </div>
        <div className="rounded border px-2 py-2 border-slate-200">
          <ArrowLeftFromLine className="text-black/70 w-3 h-3" />
        </div>
      </div>

      <div className="flex flex-col bg-white border border-slate-200 rounded-lg px-3 pt-3 pb-5">
        <div className="flex items-center justify-between">
          <h1 className="text-md font-semibold mb-2">Getting Started</h1>
          <ChevronDown className="text-black/70 w-4 h-4" />
        </div>
        <div className="flex flex-col mx-1 mt-1 gap-3">
          <div className="flex gap-3 items-center">
            <Home className="text-black w-5 h-5" />
            <p>Home</p>
          </div>
          <div className="flex gap-3 items-center">
            <Users2 className="text-black w-5 h-5" />
            <p>Member</p>
          </div>
          <div className="flex gap-3 items-center">
            <CalendarRange className="text-black w-5 h-5" />
            <p>Courses</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white border border-slate-200 rounded-lg px-3 pt-3 pb-5">
        <div className="flex items-center justify-between">
          <h1 className="text-md font-semibold mb-2">Class</h1>
          <ChevronDown className="text-black/70 w-4 h-4" />
        </div>
        <div className="flex flex-col mx-1 mt-1 gap-3">
          <div className="flex gap-3 py-2 rounded-lg px-2 font-semibold bg-gray-50 items-center">
            <div className="rounded-full w-3 h-3 bg-red-300 border border-red-500"></div>
            <p>Fundamental Design 101</p>
          </div>
          <div className="flex gap-3 py-2 rounded-lg px-2 items-center">
            <div className="rounded-full w-3 h-3 bg-green-300 border border-green-500"></div>
            <p>Fundamental Design 101</p>
          </div>
          <div className="flex gap-3 rounded-lg px-1 items-center">
            <Plus className="text-black/50 w-5 h-5" />
            <p className="text-black/50">Add Class</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white border border-slate-200 rounded-lg px-3 pt-3 pb-5">
        <div className="flex items-center justify-between">
          <h1 className="text-md font-semibold mb-2">Space</h1>
          <ChevronDown className="text-black/70 w-4 h-4" />
        </div>
        <div className="flex flex-col mx-1 mt-1 gap-3">
          <div className="flex gap-3 py-2 rounded-lg px-2 font-semibold bg-gray-50 items-center">
            <div className="flex items-center justify-center rounded-full w-5 h-5 border border-blue-200">
              <Mic className="text-blue-500 w-3 h-3" />
            </div>
            <p>Podcast - Education</p>
          </div>
          <div className="flex gap-3 py-2 rounded-lg px-2 items-center">
            <div className="flex items-center justify-center rounded-full w-5 h-5 border border-blue-200">
              <Mic className="text-blue-500 w-3 h-3" />
            </div>
            <p>Podcast - Traveling</p>
          </div>
          <div className="flex gap-3 rounded-lg px-1 items-center">
            <Plus className="text-black/50 w-5 h-5" />
            <p className="text-black/50">New Spaces</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center bg-white border border-slate-200 rounded-lg px-3 py-3">
        <p className="text-black font-bold">Link</p>
        <Plus className="text-black/70 w-5 h-5" />
      </div>
    </div>
  );
};

export default SideBar;
