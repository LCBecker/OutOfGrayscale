import { Box, SimpleGrid } from '@chakra-ui/react';

const Palette = ({ currentColor, changeColor }) => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'turquoise', 'purple', 'pink', 'deeppink'];

  return (
    <SimpleGrid minChildWidth='50px' spacing='10px'>
      {colors.map(color => {
        const isActive = currentColor === color;
        return (
          <Box bg={color} height='50px' onClick={() => changeColor(color)} border={isActive ? '5px solid black' : null} />
        )
      })}
    </SimpleGrid>
  )
};

export default Palette;
