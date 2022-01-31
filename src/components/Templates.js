import { Box, Text } from "@chakra-ui/react";
import Flowers from "../templates/Flowers";
import LayeredBoxes from "../templates/LayeredBoxes";
import React from "react";
import Scales from "../templates/Scales";

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
    flowers: {
      id: "flowers",
      displayName: "Flowers",
      component: Flowers,
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
        <Box
          w="300px"
          h="300px"
          //p="20px"
          _hover={{
            transform: "scale(1.1)",
            border: "2px solid blue",
          }}
          onClick={() => onSelectTemplate(templates[template])}
        >
          {React.createElement(templates[template].component, {
            ...previewProps,
          })}
          <Text>{templates[template].displayName}</Text>
        </Box>
      );
    });
  }

  return React.createElement(templates[templateId].component, {
    ...templateProps,
  });
};

export default Templates;
