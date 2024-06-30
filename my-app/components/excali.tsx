"use client";
import { Excalidraw, MainMenu, WelcomeScreen, convertToExcalidrawElements, serializeAsJSON } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types";
import { GetStaticProps } from "next";

interface ExcaliProps {
  id: string;
}

const ExcalidrawWrapper: React.FC<ExcaliProps> = ({id = "123"}) => {
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
  

  const onchange = (
    elements : readonly ExcalidrawElement[], 
    appState: AppState,
    files: BinaryFiles
  ): void => {
    console.log("function invoked")
    const content = serializeAsJSON(elements, appState, files, "local")
    localStorage.setItem(`excalidraw_${id}`, content)
  }
  
  const retrieveInitialData = () => {
    const content =localStorage.getItem(`excalidraw_${id}`)
    if (content!=null) {
      return JSON.parse(content)
    }
    
  }

  return (

    <div style={{height:"96vh", width:"98.9vw"}}>  
      <Excalidraw onChange={onchange} initialData={retrieveInitialData()}>
        <WelcomeScreen>
          <WelcomeScreen.Hints.HelpHint/>
        </WelcomeScreen>
        <MainMenu>
        <MainMenu.ItemLink href="https://google.com">
            Google
          </MainMenu.ItemLink>
          <MainMenu.ItemLink href="https://excalidraw.com">
            Excalidraw
          </MainMenu.ItemLink>
        </MainMenu>
      </Excalidraw>
    </div> 
  );
};
export default ExcalidrawWrapper;

//style={{height:"100vh", width:"98.9vw"}}