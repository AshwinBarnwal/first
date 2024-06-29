"use client";
import { Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw";

const ExcalidrawWrapper: React.FC = () => {
  console.info(convertToExcalidrawElements([{
    type: "rectangle",
          version: 141,
          versionNonce: 361174001,
          id: "oDVXy8D6rom3H1-LLH2-f",
          fillStyle: "hachure",
          strokeWidth: 1,
          strokeStyle: "solid",
          roughness: 1,
          opacity: 100,
          angle: 0,
          x: 100.50390625,
          y: 93.67578125,
          strokeColor: "#c92a2a",
          backgroundColor: "transparent",
          width: 186.47265625,
          height: 141.9765625,
          seed: 1968410350,
          groupIds: [],},]));
  return (

    <div style={{height:"100vh", width:"100vw"}}>  
      <Excalidraw />
    </div> 
  );
};
export default ExcalidrawWrapper;