import React from "react";
import WindowWrapper from "@hoc/WindowWrapper";
import { WindowControls } from "@components";
import { Search } from "lucide-react";
import { TrashItems } from "@constants";
const Archive = () => {
  return (
    <>
      <div className="window-header gap-50">
        <WindowControls target="archive" />
        <h2>Trash</h2>
        <Search className="icon" />
      </div>
      <div className="bg-white border-amber-600 h-100 p-4">
        {TrashItems.map(({ id, name, link, img }) => (
          <div key={id} className="h-30 w-30 flex flex-col p-2 gap-2 group">
            <div className="rounded-2xl max-w-30 overflow-hidden">  
              <img src={img} className=" object-cover " alt="" />
            </div>
            <h3 className="text-sm group-hover:bg-blue-500 group-hover:text-white rounded-xl px-2">{name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};
const ArchiveWindow = WindowWrapper(Archive, "archive");
export default ArchiveWindow;
