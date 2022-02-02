import { Box, Flex, Text } from "@chakra-ui/react";
import Flowers from "../templates/Flowers";
import LayeredBoxes from "../templates/LayeredBoxes";
import React from "react";
import Scales from "../templates/Scales";
import Stars from "../templates/Stars";
import Snowflake from "../templates/Snowflake";

const Templates = ({
  templateId,
  templateProps,
  forGallery = false,
  onSelectTemplate,
}) => {
  const templates = {
    scales: {
      id: "scales",
      displayName: "Fish Scales",
      component: Scales,
    },
    layeredBoxes: {
      id: "layeredBoxes",
      displayName: "Layered Boxes",
      component: LayeredBoxes,
    },
    stars: {
      id: "stars",
      displayName: "Stars",
      component: Stars,
    },
    flowers: {
      id: "flowers",
      displayName: "Flowers",
      component: Flowers,
    },
    snowflake: {
      id: "snowflake",
      displayName: "Snowflake",
      component: Snowflake,
    },
  };
  if (forGallery) {
    // Display preview templates.
    const previewProps = {
      preview: true,
      svgProps: { width: "275px", height: "275px" },
    };
    return Object.keys(templates).map((template) => {
      return (
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          w="300px"
          h="300px"
          _hover={{
            transform: "scale(1.1)",
            "&>p": {
              fontWeight: "bold",
            },
          }}
          onClick={() => onSelectTemplate(templates[template])}
        >
          {React.createElement(templates[template].component, {
            ...previewProps,
          })}
          <Text>{templates[template].displayName}</Text>
        </Flex>
      );
    });
  }

  return React.createElement(templates[templateId].component, {
    ...templateProps,
  });
};

export default Templates;
