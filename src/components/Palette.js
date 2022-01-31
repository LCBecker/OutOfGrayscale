import {
  Box,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";

const Palette = ({ currentColor, changeColor }) => {
  const colors = [
    "black",
    "gray",
    "white",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "turquoise",
    "purple",
    "pink",
    "deeppink",
  ];

  return (
    <div>
      <SimpleGrid minChildWidth="50px" spacing="10px">
        {colors.map((color) => {
          const isActive = currentColor === color;
          return (
            <Box
              bg={color}
              height="50px"
              onClick={() => changeColor(color)}
              border={isActive ? "5px solid black" : null}
            />
          );
        })}
      </SimpleGrid>
      <FormControl>
        <FormLabel htmlFor="customColor">Select a custom color</FormLabel>
        <Input
          id="customColor"
          type="color"
          onChange={(e) => changeColor(e.target.value)}
        />
      </FormControl>
    </div>
  );
};

export default Palette;
