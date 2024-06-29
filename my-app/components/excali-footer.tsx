import React from "react";
import { Footer } from "@excalidraw/excalidraw";
import { ExcalidrawPlusAppLink } from "./ExcalidrawPlusAppLink";


export const AppFooter = React.memo(() => {
  return (
    <Footer>
      <div
        style={{
          display: "flex",
          gap: ".5rem",
          alignItems: "center",
        }}
      >
        {<ExcalidrawPlusAppLink />}
      </div>
    </Footer>
  );
});