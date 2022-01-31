import { Flex, Heading } from "@chakra-ui/react";

import Templates from "./Templates";

const Gallery = ({ onSelectTemplate }) => {
  return (
    <div>
      <Heading m={"10"}>Select a Template</Heading>
      <Flex gap={10} m={"10"}>
        <Templates forGallery={true} onSelectTemplate={onSelectTemplate} />
      </Flex>
    </div>
  );
};

export default Gallery;
