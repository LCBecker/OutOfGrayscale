import { Box, Flex, Heading } from "@chakra-ui/react";

import Templates from "./Templates";

const Gallery = ({ onSelectTemplate }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 30%, rgba(255,255,255,1) 100%)",
        height: "100%",
      }}
    >
      <Box>
        <img
          src={process.env.PUBLIC_URL + "/Logo.svg"}
          alt="Out of Grayscale Logo"
        />
      </Box>
      <Heading m={"10"} textColor={"#fff"}>
        Select a Template
      </Heading>
      <Flex gap={10} m={"10"}>
        <Templates forGallery={true} onSelectTemplate={onSelectTemplate} />
      </Flex>
    </div>
  );
};

export default Gallery;
