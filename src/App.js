import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

import Gallery from "./components/Gallery";
import Palette from "./components/Palette";
import Templates from "./components/Templates";
import { useState } from "react";

function App() {
  const [view, setView] = useState("GALLERY");
  const [fillCount, setFillCount] = useState(22);
  const [fillColors, setFillColors] = useState(Array(22).fill("white"));
  const [currentColor, setCurrentColor] = useState("blue");
  const [templateDetails, setTemplateDetails] = useState({});

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

  function renderDifficulty() {
    if (fillCount <= 100) return "Easy";
    if (fillCount > 100 && fillCount < 500) return "Average";
    return "Advanced";
  }

  function renderView() {
    if (view == "GALLERY") {
      return (
        <Gallery
          onSelectTemplate={(template) => {
            setView("TEMPLATE");
            setTemplateDetails(template);
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
            alignItems={"center"}
            direction="column"
          >
            <Heading fontFamily={"cursive"} mb={"10px"}>
              {templateDetails.displayName}
            </Heading>
            <Text>{fillCount} areas to fill</Text>
            <Text>Difficulty: {renderDifficulty()}</Text>
            <Templates
              templateId={templateDetails.id}
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
              <Button colorScheme={"red"} onClick={() => setView("GALLERY")}>
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
