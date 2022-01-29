import { Grid, GridItem } from "@chakra-ui/react";

import Alofo from "../templates/Alofo";
import SimpleFlower from "../templates/SimpleFlower";

const Gallery = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500">
        <SimpleFlower preview={true} />
      </GridItem>
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
    </Grid>
  );
};

export default Gallery;
