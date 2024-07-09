import { Excalidraw, MainMenu, WelcomeScreen, convertToExcalidrawElements, serializeAsJSON } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types";
import { getSceneVersion } from "@excalidraw/excalidraw";
import { writedoc, readdoc } from "@/lib/firebase/crud";
import './vals.css';
import { useSession } from "next-auth/react";
type Timer = ReturnType<typeof setTimeout>;

interface ExcaliProps {
  id: string;
  setIsBoxVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isBoxVisible: boolean;
}

let ver = 0;

const ExcalidrawWrapper: React.FC<ExcaliProps> = ({ id = "123", setIsBoxVisible, isBoxVisible }) => {
  const { data: session } = useSession();

  console.info(
    convertToExcalidrawElements([
      {
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
        groupIds: [],
      },
    ])
  );

  const onchange = (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ): void => {
    if (getSceneVersion(elements) !== ver) {
      ver = getSceneVersion(elements);
      const content = serializeAsJSON(elements, appState, files, "local");
      if (!session) {
        localStorage.setItem(`excalidraw_${id}`, content);
        console.log("stored to local");
      } else {
        writedoc(id, content, `${session?.user?.email}`);
      }
    }
  };

  const retrieveInitialData = async (): Promise<any> => {
    try {
      const cont = await readdoc(id, `${session?.user?.email}`);
      if (cont) {
        console.log("Fetched data from remote:");
        console.log(cont);
        return JSON.parse(cont);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }

  const debouncedonchange = debounce(onchange, 1000);

  return (
    <div className="custom-height custom-styles">
      <Excalidraw
        onChange={debouncedonchange}
        initialData={retrieveInitialData()}
      >
        <WelcomeScreen>
          <WelcomeScreen.Center>
            <WelcomeScreen.Center.Logo />
            <WelcomeScreen.Center.Heading>
              Welcome {id}!
              Open the problem from main menu
            </WelcomeScreen.Center.Heading>
            <WelcomeScreen.Center.Menu>
              <WelcomeScreen.Center.MenuItemLink href="https://github.com/excalidraw/excalidraw">
                Excalidraw GitHub
              </WelcomeScreen.Center.MenuItemLink>
              <WelcomeScreen.Center.MenuItemHelp />
            </WelcomeScreen.Center.Menu>
          </WelcomeScreen.Center>
        </WelcomeScreen>
        <MainMenu>
          <MainMenu.DefaultItems.Socials />
          <MainMenu.DefaultItems.Export />
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.ToggleTheme />
          <MainMenu.Item onSelect={() => setIsBoxVisible(!isBoxVisible)}>
            {isBoxVisible ? "Close" : "Open"} Problem
          </MainMenu.Item>
          <MainMenu.DefaultItems.ChangeCanvasBackground />
        </MainMenu>
      </Excalidraw>
    </div>
  );
};

export default ExcalidrawWrapper;
