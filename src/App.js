import { Box, Button, Flex, Spacer } from '@chakra-ui/react';

import Palette from './components/Palette';
import SimpleFlower from './templates/SimpleFlower';
import { useState } from 'react';

function App() {
  const [fillColors, setFillColors] = useState(Array(22).fill('white'));
  const [currentColor, setCurrentColor] = useState('blue');

  function onFillColor(fillIndex) {
    let newFillColors = fillColors.slice(0);
    newFillColors[fillIndex] = currentColor;
    setFillColors(newFillColors);
  }

  function resetTemplate() {
    setFillColors(Array(22).fill('white'));
  }

  return (
    <Flex direction="row">
      <Box className="template">
        <SimpleFlower fillColors={fillColors} onFill={onFillColor} />
      </Box>
      <Spacer />
      <Box p='20px 50px'>
        <Palette currentColor={currentColor} changeColor={setCurrentColor} />
        <Button colorScheme={'blue'} onClick={resetTemplate} mt='10px'>Reset</Button>
      </Box>
    </Flex>
  );
}

export default App;
