import React from "react";
import WindowWrapper from "@hoc/WindowWrapper";
import { WindowControls } from "@components";
import useWindowStore from "@store/window";

const Image = () => {
  const { windows } = useWindowStore();
  if (!windows.imgfile.data) return null;

  const { name, imageUrl} = windows.imgfile.data;
  return (
    <>
      <div className="window-header">
        <WindowControls target="imgfile" />
        <h2>{name || "Image"}</h2>
      </div>
      <div className="window-content p-5 ">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-auto max-h-[70vh] object-contain rounded-2xl" />
        ) : null}
      </div>
    </>
  );
};
const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
