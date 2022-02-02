import React, { useEffect } from "react";

const Snowflake = ({
  updateFillCount,
  fillColors,
  onFill,
  preview = false,
  svgProps = {},
}) => {
  const paths = [
    <path d="M526.5 51.5L376.5 201.5" stroke="#191919" stroke-width="10" />,
    <path
      d="M524 54V14H564V54H524Z"
      fill="white"
      stroke="#191919"
      stroke-width="10"
    />,
    <path
      d="M424 89L404 69H464L484 89H424Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M394 139V79L414 99V159L394 139Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path d="M289 159V109" stroke="black" stroke-width="10" />,
    <path
      d="M241.5 141.5H191.5L221.5 111.5H271.5L241.5 141.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M291.5 96.5H286.5V91.5H291.5V96.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M281.5 106.5H276.5V101.5H281.5V106.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M301.5 106.5H296.5V101.5H301.5V106.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M251.5 56.5V6.5L281.5 36.5V86.5L251.5 56.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M271.5 96.5H221.5L191.5 66.5H241.5L271.5 96.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M296.5 86.5V36.5L326.5 6.5V56.5L296.5 86.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M336.5 66.5H386.5L356.5 96.5H306.5L336.5 66.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M306.5 111.5H356.5L386.5 141.5H336.5L306.5 111.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path d="M419 289H469" stroke="black" stroke-width="10" />,
    <path
      d="M436.5 241.5V191.5L466.5 221.5V271.5L436.5 241.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M481.5 291.5V286.5H486.5V291.5H481.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M471.5 281.5V276.5H476.5V281.5H471.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M471.5 301.5V296.5H476.5V301.5H471.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M521.5 251.5H571.5L541.5 281.5H491.5L521.5 251.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M481.5 271.5V221.5L511.5 191.5V241.5L481.5 271.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M491.5 296.5H541.5L571.5 326.5H521.5L491.5 296.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M511.5 336.5V386.5L481.5 356.5V306.5L511.5 336.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M466.5 306.5V356.5L436.5 386.5V336.5L466.5 306.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path d="M289 419V469" stroke="black" stroke-width="10" />,
    <path
      d="M336.5 436.5H386.5L356.5 466.5H306.5L336.5 436.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M286.5 481.5H291.5V486.5H286.5V481.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M296.5 471.5H301.5V476.5H296.5V471.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M276.5 471.5H281.5V476.5H276.5V471.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M326.5 521.5V571.5L296.5 541.5V491.5L326.5 521.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M306.5 481.5H356.5L386.5 511.5H336.5L306.5 481.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M281.5 491.5V541.5L251.5 571.5V521.5L281.5 491.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M241.5 511.5H191.5L221.5 481.5H271.5L241.5 511.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M271.5 466.5H221.5L191.5 436.5H241.5L271.5 466.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path d="M159 289H109" stroke="black" stroke-width="10" />,
    <path
      d="M141.5 336.5V386.5L111.5 356.5L111.5 306.5L141.5 336.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M96.5 286.5V291.5H91.5V286.5H96.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M106.5 296.5V301.5H101.5V296.5H106.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M106.5 276.5V281.5H101.5V276.5H106.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M56.5 326.5H6.5L36.5 296.5H86.5L56.5 326.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M96.5 306.5L96.5 356.5L66.5 386.5V336.5L96.5 306.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M86.5 281.5H36.5L6.5 251.5H56.5L86.5 281.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M66.5 241.5V191.5L96.5 221.5V271.5L66.5 241.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M111.5 271.5V221.5L141.5 191.5V241.5L111.5 271.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M96.5 221.5V271.5L66.5 241.5L66.5 191.5L96.5 221.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M141.5 191.5V241.5L111.5 271.5V221.5L141.5 191.5Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M159 239L239 159H339L419 239V339L339 419H239L159 339V239Z"
      fill="white"
      stroke="#191919"
      stroke-width="10"
    />,
    <path
      d="M189 249L249 189H329L389 249V329L329 389H249L189 329V249Z"
      fill="#fff"
      stroke="black"
      stroke-width="5"
    />,
    <path
      d="M296.5 271.5V231.5L316.5 211.5V251.5L296.5 271.5Z"
      fill="white"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M261.5 251.5V211.5L281.5 231.5V271.5L261.5 251.5Z"
      fill="white"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M286.5 291.5V286.5H291.5V291.5H286.5Z"
      fill="white"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M326.5 261.5H366.5L346.5 281.5H306.5L326.5 261.5Z"
      fill="white"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M306.5 296.5H346.5L366.5 316.5H326.5L306.5 296.5Z"
      fill="white"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M316.5 326.75V366.75L296.5 346.75V306.75L316.5 326.75Z"
      fill="white"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M281.5 306.5V346.5L261.5 366.5V326.5L281.5 306.5Z"
      fill="white"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M251.5 316.5H211.5L231.5 296.5H271.5L251.5 316.5Z"
      fill="white"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M271.5 281.5H231.5L211.5 261.5H251.5L271.5 281.5Z"
      fill="white"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M439 184L419 164H479L499 184H439Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M489 154V94L509 114V174L489 154Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M464 54V14H504V54H464Z"
      fill="white"
      stroke="#191919"
      stroke-width="10"
    />,
    <path
      d="M524 114V74H564V114H524Z"
      fill="white"
      stroke="#191919"
      stroke-width="10"
    />,
    <path d="M201.5 201.5L51.5 51.5" stroke="#191919" stroke-width="10" />,
    <path
      d="M114 69H174L154 89H94L114 69Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M164 99L184 79V139L164 159V99Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M69 114L89 94V154L69 174V114Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M99 164H159L139 184H79L99 164Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M14 54V14H54V54H14Z"
      fill="white"
      stroke="#191919"
      stroke-width="10"
    />,
    <path
      d="M14 114V74H54V114H14Z"
      fill="white"
      stroke="#191919"
      stroke-width="10"
    />,
    <path
      d="M74 54V14H114V54H74Z"
      fill="white"
      stroke="#191919"
      stroke-width="10"
    />,
    <path d="M201.5 376.5L51.5 526.5" stroke="#191919" stroke-width="10" />,
    <path
      d="M69 464V404L89 424V484L69 464Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M99 414L79 394H139L159 414H99Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M114 509L94 489H154L174 509H114Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M164 479V419L184 439V499L164 479Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M54 564H14L14 524H54V564Z"
      fill="white"
      stroke="#191919"
      stroke-width="10"
    />,
    <path
      d="M114 564H74V524H114V564Z"
      fill="white"
      stroke="#191919"
      stroke-width="10"
    />,
    <path
      d="M54 504H14L14 464H54V504Z"
      fill="white"
      stroke="#191919"
      stroke-width="10"
    />,
    <path d="M376.5 376.5L526.5 526.5" stroke="#191919" stroke-width="10" />,
    <path
      d="M464 509H404L424 489H484L464 509Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M414 479L394 499V439L414 419V479Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M509 464L489 484V424L509 404V464Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M479 414H419L439 394H499L479 414Z"
      fill="#fff"
      stroke="#000"
      stroke-width="5"
    />,
    <path
      d="M564 524V564H524V524H564Z"
      fill="white"
      stroke="#191919"
      stroke-width="10"
    />,
    <path
      d="M564 464V504H524V464H564Z"
      fill="white"
      stroke="#191919"
      stroke-width="10"
    />,
    <path
      d="M504 524V564H464V524H504Z"
      fill="white"
      stroke="#191919"
      stroke-width="10"
    />,
  ];

  useEffect(() => {
    if (!preview) updateFillCount(paths.length);
  }, []);

  function renderFillables() {
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
      width="578"
      height="578"
      viewBox="0 0 578 578"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      {renderFillables()}
    </svg>
  );
};

export default Snowflake;
