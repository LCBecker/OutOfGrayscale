import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

import Alofo from "./templates/Alofo";
import FigmaBox from "./templates/FigmaBox";
import Gallery from "./components/Gallery";
import LayeredBoxes from "./templates/LayeredBoxes";
import Palette from "./components/Palette";
import Scales from "./templates/Scales";
import SimpleFlower from "./templates/SimpleFlower";
import { useState } from "react";

function App() {
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

  return (
    // <Gallery />
    <Flex direction="row">
      <Box className="template" w="40vw">
        <Scales
          updateFillCount={updateFillCount}
          fillColors={fillColors}
          onFill={onFillColor}
        />
        {/* <SimpleFlower
          updateFillCount={updateFillCount}
          fillColors={fillColors}
          onFill={onFillColor}
        /> */}
        {/* <Alofo
          updateFillCount={updateFillCount}
          fillColors={fillColors}
          onFill={onFillColor}
        /> */}
      </Box>
      <Spacer />
      <Box p="20px 50px">
        <Palette currentColor={currentColor} changeColor={setCurrentColor} />
        <Button colorScheme={"blue"} onClick={resetTemplate} mt="10px">
          Reset
        </Button>
      </Box>
    </Flex>
  );
}

export default App;
