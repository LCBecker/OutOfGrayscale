import { Box, Flex, Heading } from "@chakra-ui/react";

import Templates from "./Templates";

const Gallery = ({ onSelectTemplate }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Box p={"20px 50px"}>
        <Heading
          size={"3xl"}
          backgroundImage={
            "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(249,255,0,1) 10%, rgba(0,212,255,1) 20%)"
          }
          backgroundColor="white"
          backgroundSize="100%"
          backgroundClip={"text"}
          pb={"10px"}
        >
          Out of Grayscale
        </Heading>
        <Heading size={"sm"} textColor={"white"}>
          <i>An Online Coloring Book</i>
        </Heading>
      </Box>
      <Heading m={"10"} textColor="white">
        Select a Template
      </Heading>
      <Flex gap={10} m={"10"}>
        <Templates forGallery={true} onSelectTemplate={onSelectTemplate} />
      </Flex>
    </div>
  );
};

export default Gallery;
