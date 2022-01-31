import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";

import Gallery from "./components/Gallery";
import Palette from "./components/Palette";
import Templates from "./components/Templates";
import { useState } from "react";

function App() {
  const [view, setView] = useState({ view: "GALLERY", template: null });
  const [fillCount, setFillCount] = useState(22);
  const [fillColors, setFillColors] = useState(Array(22).fill("white"));
  const [currentColor, setCurrentColor] = useState("blue");

  function updateFillCount(count) {
    setFillCount(count);
    setFillColors(Array(count).fill("white"));
  }

  function onFillColor(fillIndex) {
    let newFillColors = fillColors.slice(0);
    newFillColors[fillIndex] = currentColor;
    setFillColors(newFillColors);
  }

  function resetTemplate() {
    setFillColors(Array(fillCount).fill("white"));
  }

  function renderView() {
    if (view.view == "GALLERY") {
      return (
        <Gallery
          onSelectTemplate={(template) => {
            setView({ view: "TEMPLATE", template: template });
          }}
        />
      );
    } else {
      return (
        <Flex direction="row">
          <Flex
            className="template"
            w="60vw"
            mt={"20px"}
            justifyContent={"center"}
          >
            <Templates
              templateId={view.template}
              templateProps={{
                updateFillCount: updateFillCount,
                fillColors: fillColors,
                onFill: onFillColor,
              }}
            />
          </Flex>
          <Spacer />
          <Box p="20px 50px">
            <Palette
              currentColor={currentColor}
              changeColor={setCurrentColor}
            />
            <Box>
              <Button
                colorScheme={"blue"}
                onClick={resetTemplate}
                m={"10px 0px"}
              >
                Reset
              </Button>
              <Spacer />
              <Button
                colorScheme={"red"}
                onClick={() => setView({ view: "GALLERY", template: null })}
              >
                Back To Gallery
              </Button>
            </Box>
          </Box>
        </Flex>
      );
    }
  }

  return renderView();
}

export default App;
