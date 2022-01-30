import { Grid, GridItem } from "@chakra-ui/react";

import Alofo from "../templates/Alofo";
import FigmaBox from "../templates/FigmaBox";
import SimpleFlower from "../templates/SimpleFlower";

const Gallery = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem w="150px" h="150px">
        <SimpleFlower
          preview={true}
          svgProps={{ width: "inherit", height: "inherit" }}
        />
      </GridItem>
      <GridItem w="150px" h="150px" bg="blue.500">
        <FigmaBox
          preview={true}
          svgProps={{ width: "inherit", height: "inherit" }}
        />
      </GridItem>
      <GridItem w="150px" h="150px" bg="blue.500" />
      <GridItem w="150px" h="150px" bg="blue.500" />
      <GridItem w="150px" h="150px" bg="blue.500" />
    </Grid>
  );
};

export default Gallery;
