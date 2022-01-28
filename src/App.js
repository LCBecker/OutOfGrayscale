import { Button } from '@chakra-ui/react';
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
    <div className="App">
      <div className="template">
        <SimpleFlower fillColors={fillColors} onFill={onFillColor} />
      </div>
      <Button colorScheme={'blue'} onClick={resetTemplate}>Reset</Button>
      <Palette currentColor={currentColor} changeColor={setCurrentColor} />
    </div>
  );
}

export default App;
