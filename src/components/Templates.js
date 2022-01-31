import { Box } from "@chakra-ui/react";
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
      displayName: "Fish Scales",
      component: Scales,
    },
    layeredBoxes: {
      displayName: "Layered Boxes",
      component: LayeredBoxes,
    },
  };
  if (forGallery) {
    // Display preview templates.
    const previewProps = {
      preview: true,
      svgProps: { width: "inherit", height: "inherit" },
    };
    return Object.keys(templates).map((template) => {
      return (
        <Box w="150px" h="150px" onClick={() => onSelectTemplate(template)}>
          {React.createElement(templates[template].component, {
            ...previewProps,
          })}
        </Box>
      );
    });
  }

  return React.createElement(templates[templateId].component, {
    ...templateProps,
  });
};

export default Templates;
