import React, { useEffect } from "react";

import { propNames } from "@chakra-ui/react";

const FigmaBox = ({
  updateFillCount,
  fillColors,
  onFill,
  preview = false,
  svgProps = {},
}) => {
  useEffect(() => {
    if (!preview) updateFillCount(12);
  }, []);

  function renderFillables() {
    const paths = [
      <rect
        x="17.5"
        y="16.5"
        width="95"
        height="95"
        fill="white"
        stroke="black"
        stroke-width="5"
      />,
      <rect
        x="67.5"
        y="66.5"
        width="95"
        height="95"
        fill="white"
        stroke="black"
        stroke-width="5"
      />,
      <rect
        x="117.5"
        y="116.5"
        width="95"
        height="95"
        fill="white"
        stroke="black"
        stroke-width="5"
      />,
      <rect
        x="167.5"
        y="166.5"
        width="95"
        height="95"
        fill="white"
        stroke="black"
        stroke-width="5"
      />,
      <rect
        x="217.5"
        y="216.5"
        width="95"
        height="95"
        fill="white"
        stroke="black"
        stroke-width="5"
      />,
      <rect
        x="267.5"
        y="266.5"
        width="95"
        height="95"
        fill="white"
        stroke="black"
        stroke-width="5"
      />,
      <rect
        x="317.5"
        y="316.5"
        width="95"
        height="95"
        fill="white"
        stroke="black"
        stroke-width="5"
      />,
      <rect
        x="367.5"
        y="366.5"
        width="95"
        height="95"
        fill="white"
        stroke="black"
        stroke-width="5"
      />,
      <rect
        x="417.5"
        y="416.5"
        width="95"
        height="95"
        fill="white"
        stroke="black"
        stroke-width="5"
      />,
      <rect
        x="467.5"
        y="466.5"
        width="95"
        height="95"
        fill="white"
        stroke="black"
        stroke-width="5"
      />,
      <rect
        x="517.5"
        y="516.5"
        width="95"
        height="95"
        fill="white"
        stroke="black"
        stroke-width="5"
      />,
      <rect
        x="567.5"
        y="566.5"
        width="95"
        height="95"
        fill="white"
        stroke="black"
        stroke-width="5"
      />,
    ];

    if (preview) return paths;

    return paths.map((path, index) => {
      return React.cloneElement(path, {
        onClick: () => onFill(index),
        fill: fillColors[index],
      });
    });
  }

  return (
    <svg
      width="681"
      height="681"
      viewBox="0 0 681 681"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <rect width="681" height="681" fill="#E5E5E5" />
      <rect
        x="2.5"
        y="2.5"
        width="676"
        height="676"
        fill="white"
        stroke="black"
        stroke-width="5"
      />
      {renderFillables()}
    </svg>
  );
};

export default FigmaBox;
