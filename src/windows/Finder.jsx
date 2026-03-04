import React from "react";
import { WindowControls } from "@components";
import { Search } from "lucide-react";
import WindowWrapper from "@hoc/WindowWrapper";
import { locations } from "@constants";
import useLocationStore from "@store/location";
import clsx from "clsx";
import useWindowStore from "@store/window";

const Finder = () => {
  const {openWindow} = useWindowStore()
  const { activeLocation, setActiveLocation } = useLocationStore();
  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active:  ",
            )}
          >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  const openItem = (item) => {
    if (item.fileType==="pdf") return openWindow('resume')
    if(item.kind==="folder") return setActiveLocation(item)
    if(["fig","url"].includes(item.fileType) && item.href){
      return window.open(item.href,"_blank")
    }
    openWindow(`${item.fileType}${item.kind}`,item)
 }
  return (
    <>
      <div className="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
            {renderList("Favourites",Object.values(locations))}
            {renderList("My Projects",locations.work.children)}
        </div>
        <ul className="content">
        {
          activeLocation.children.map((item)=>(
            <li key={item.id} className={item.position} onClick={()=>openItem(item)}>
                <img src={item.icon} className="w-4"alt={item.name} />
                <p>{item.name}</p>
            </li>
          ))
        }
      </ul>
      </div>

      
    </>
  );
};
const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
