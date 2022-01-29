import { useEffect } from "react";

const Alofo = ({ updateFillCount, onFill, fillColors }) => {
  useEffect(() => {
    updateFillCount(77);
  }, []);

  return (
    <svg width="850" height="650" xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>Layer 1</title>
        <g id="svg_49" />
        <g id="svg_117">
          <line
            id="svg_64"
            y2="237.5"
            x2="512.5"
            y1="87.5"
            x1="662.5"
            stroke-linecap="null"
            stroke-linejoin="null"
            stroke-dasharray="null"
            stroke-width="10"
            stroke="#191919"
            fill="none"
          />
          <path
            id="svg_70"
            d="m660,90l0,-40l40,0l0,40l-40,0z"
            stroke-linecap="null"
            stroke-linejoin="null"
            stroke-dasharray="null"
            stroke-width="10"
            stroke="#191919"
            onClick={() => onFill(0)}
            fill={fillColors[0]}
            fill-rule="evenodd"
          />
          <path
            id="svg_72"
            d="m560,125l-20,-20l60,0l20,20l-60,0z"
            stroke-linecap="null"
            stroke-linejoin="null"
            stroke-dasharray="null"
            stroke-width="5"
            stroke="#191919"
            onClick={() => onFill(1)}
            fill={fillColors[1]}
            fill-rule="evenodd"
          />
          <path
            id="svg_73"
            d="m530,175l0,-60l20,20l0,60l-20,-20z"
            stroke-linecap="null"
            stroke-linejoin="null"
            stroke-dasharray="null"
            stroke-width="5"
            stroke="#191919"
            onClick={() => onFill(2)}
            fill={fillColors[2]}
            fill-rule="evenodd"
          />
          <g id="svg_78">
            <line
              transform="rotate(-90 425 170)"
              id="svg_48"
              fill="#000000"
              stroke="#000000"
              stroke-width="10"
              stroke-dasharray="null"
              stroke-linejoin="null"
              stroke-linecap="null"
              x1="400"
              y1="170"
              x2="450"
              y2="170"
            />
            <path
              transform="rotate(-90 367.5 162.5)"
              id="svg_50"
              d="m352.5,172.5l0,-50l30,30l0,50l-30,-30z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#000000"
              onClick={() => onFill(3)}
              fill={fillColors[3]}
              fill-rule="evenodd"
            />
            <path
              transform="rotate(-90 425 130)"
              id="svg_51"
              d="m422.5,132.5l0,-5l5,0l0,5l-5,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#000000"
              onClick={() => onFill(4)}
              fill={fillColors[4]}
              fill-rule="evenodd"
            />
            <path
              transform="rotate(-90 415 140)"
              id="svg_52"
              d="m412.5,142.5l0,-5l5,0l0,5l-5,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#000000"
              onClick={() => onFill(5)}
              fill={fillColors[5]}
              fill-rule="evenodd"
            />
            <path
              transform="rotate(-90 435 140)"
              id="svg_54"
              d="m432.5,142.5l0,-5l5,0l0,5l-5,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#000000"
              onClick={() => onFill(6)}
              fill={fillColors[6]}
              fill-rule="evenodd"
            />
            <path
              id="svg_55"
              d="m387.5,92.5l0,-50l30,30l0,50l-30,-30z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#000000"
              onClick={() => onFill(7)}
              fill={fillColors[7]}
              fill-rule="evenodd"
            />
            <path
              transform="rotate(-90 367.5 117.5)"
              id="svg_57"
              d="m352.5,157.5l0,-50l30,-30l0,50l-30,30z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#000000"
              onClick={() => onFill(8)}
              fill={fillColors[8]}
              fill-rule="evenodd"
            />
            <path
              id="svg_58"
              d="m432.5,122.5l0,-50l30,-30l0,50l-30,30z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#000000"
              onClick={() => onFill(9)}
              fill={fillColors[9]}
              fill-rule="evenodd"
            />
            <path
              id="svg_59"
              d="m467.5,127.5l0,-50l30,30l0,50l-30,-30z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#000000"
              transform="rotate(90 482.5 117.5)"
              onClick={() => onFill(10)}
              fill={fillColors[10]}
              fill-rule="evenodd"
            />
            <path
              id="svg_60"
              d="m467.5,202.5l0,-50l30,-30l0,50l-30,30z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#000000"
              transform="rotate(90 482.5 162.5)"
              onClick={() => onFill(11)}
              fill={fillColors[11]}
              fill-rule="evenodd"
            />
          </g>
          <g id="svg_80">
            <g id="svg_21">
              <line
                fill="#000000"
                stroke="#000000"
                stroke-width="10"
                stroke-dasharray="null"
                stroke-linejoin="null"
                stroke-linecap="null"
                x1="555"
                y1="325"
                x2="605"
                y2="325"
                id="svg_9"
              />
              <path
                d="m572.5,277.5l0,-50l30,30l0,50l-30,-30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_10"
                onClick={() => onFill(12)}
                fill={fillColors[12]}
                fill-rule="evenodd"
              />
              <path
                d="m617.5,327.5l0,-5l5,0l0,5l-5,0z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_12"
                onClick={() => onFill(13)}
                fill={fillColors[13]}
                fill-rule="evenodd"
              />
              <path
                d="m607.5,317.5l0,-5l5,0l0,5l-5,0z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_13"
                onClick={() => onFill(14)}
                fill={fillColors[14]}
                fill-rule="evenodd"
              />
              <path
                d="m607.5,337.5l0,-5l5,0l0,5l-5,0z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_14"
                onClick={() => onFill(15)}
                fill={fillColors[15]}
                fill-rule="evenodd"
              />
              <path
                d="m652.5,312.5l0,-50l30,30l0,50l-30,-30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_16"
                transform="rotate(90 667.5 302.5)"
                onClick={() => onFill(16)}
                fill={fillColors[16]}
                fill-rule="evenodd"
              />
              <path
                d="m617.5,307.5l0,-50l30,-30l0,50l-30,30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_17"
                onClick={() => onFill(17)}
                fill={fillColors[17]}
                fill-rule="evenodd"
              />
              <path
                d="m652.5,387.5l0,-50l30,-30l0,50l-30,30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_18"
                transform="rotate(90 667.5 347.5)"
                onClick={() => onFill(18)}
                fill={fillColors[18]}
                fill-rule="evenodd"
              />
              <path
                d="m617.5,392.5l0,-50l30,30l0,50l-30,-30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                transform="rotate(180 632.5 382.5)"
                id="svg_19"
                onClick={() => onFill(19)}
                fill={fillColors[19]}
                fill-rule="evenodd"
              />
              <path
                d="m572.5,422.5l0,-50l30,-30l0,50l-30,30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                transform="rotate(180 587.5 382.5)"
                id="svg_20"
                onClick={() => onFill(20)}
                fill={fillColors[20]}
                fill-rule="evenodd"
              />
            </g>
            <g id="svg_22">
              <line
                transform="rotate(90 425 480)"
                fill="#000000"
                stroke="#000000"
                stroke-width="10"
                stroke-dasharray="null"
                stroke-linejoin="null"
                stroke-linecap="null"
                x1="400"
                y1="480"
                x2="450"
                y2="480"
                id="svg_24"
              />
              <path
                transform="rotate(90 482.5 487.5)"
                d="m467.5,497.5l0,-50l30,30l0,50l-30,-30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_25"
                onClick={() => onFill(21)}
                fill={fillColors[21]}
                fill-rule="evenodd"
              />
              <path
                transform="rotate(90 425 520)"
                d="m422.5,522.5l0,-5l5,0l0,5l-5,0z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_26"
                onClick={() => onFill(22)}
                fill={fillColors[22]}
                fill-rule="evenodd"
              />
              <path
                transform="rotate(90 435 510)"
                d="m432.5,512.5l0,-5l5,0l0,5l-5,0z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_27"
                onClick={() => onFill(23)}
                fill={fillColors[23]}
                fill-rule="evenodd"
              />
              <path
                transform="rotate(90 415 510)"
                d="m412.5,512.5l0,-5l5,0l0,5l-5,0z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_28"
                onClick={() => onFill(24)}
                fill={fillColors[24]}
                fill-rule="evenodd"
              />
              <path
                d="m432.5,577.5l0,-50l30,30l0,50l-30,-30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                transform="rotate(180 447.5 567.5)"
                id="svg_29"
                onClick={() => onFill(25)}
                fill={fillColors[25]}
                fill-rule="evenodd"
              />
              <path
                transform="rotate(90 482.5 532.5)"
                d="m467.5,572.5l0,-50l30,-30l0,50l-30,30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_32"
                onClick={() => onFill(26)}
                fill={fillColors[26]}
                fill-rule="evenodd"
              />
              <path
                d="m387.5,607.5l0,-50l30,-30l0,50l-30,30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                transform="rotate(180 402.5 567.5)"
                id="svg_33"
                onClick={() => onFill(27)}
                fill={fillColors[27]}
                fill-rule="evenodd"
              />
              <path
                d="m352.5,542.5l0,-50l30,30l0,50l-30,-30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                transform="rotate(270 367.5 532.5)"
                id="svg_34"
                onClick={() => onFill(28)}
                fill={fillColors[28]}
                fill-rule="evenodd"
              />
              <path
                d="m352.5,527.5l0,-50l30,-30l0,50l-30,30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                transform="rotate(270 367.5 487.5)"
                id="svg_35"
                onClick={() => onFill(29)}
                fill={fillColors[29]}
                fill-rule="evenodd"
              />
            </g>
            <g id="svg_36">
              <line
                transform="rotate(180 270 325)"
                fill="#000000"
                stroke="#000000"
                stroke-width="10"
                stroke-dasharray="null"
                stroke-linejoin="null"
                stroke-linecap="null"
                x1="245"
                y1="325"
                x2="295"
                y2="325"
                id="svg_37"
              />
              <path
                transform="rotate(180 262.5 382.5)"
                d="m247.5,392.5l0,-50l30,30l0,50l-30,-30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_38"
                onClick={() => onFill(30)}
                fill={fillColors[30]}
                fill-rule="evenodd"
              />
              <path
                transform="rotate(180 230 325)"
                d="m227.5,327.5l0,-5l5,0l0,5l-5,0z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_39"
                onClick={() => onFill(31)}
                fill={fillColors[31]}
                fill-rule="evenodd"
              />
              <path
                transform="rotate(180 240 335)"
                d="m237.5,337.5l0,-5l5,0l0,5l-5,0z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_40"
                onClick={() => onFill(32)}
                fill={fillColors[32]}
                fill-rule="evenodd"
              />
              <path
                transform="rotate(180 240 315)"
                d="m237.5,317.5l0,-5l5,0l0,5l-5,0z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_41"
                onClick={() => onFill(33)}
                fill={fillColors[33]}
                fill-rule="evenodd"
              />
              <path
                d="m167.5,357.5l0,-50l30,30l0,50l-30,-30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                transform="rotate(270 182.5 347.5)"
                id="svg_42"
                onClick={() => onFill(34)}
                fill={fillColors[34]}
                fill-rule="evenodd"
              />
              <path
                transform="rotate(180 217.5 382.5)"
                d="m202.5,422.5l0,-50l30,-30l0,50l-30,30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_43"
                onClick={() => onFill(35)}
                fill={fillColors[35]}
                fill-rule="evenodd"
              />
              <path
                d="m167.5,342.5l0,-50l30,-30l0,50l-30,30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                transform="rotate(270 182.5 302.5)"
                id="svg_44"
                onClick={() => onFill(36)}
                fill={fillColors[36]}
                fill-rule="evenodd"
              />
              <path
                d="m202.5,277.5l0,-50l30,30l0,50l-30,-30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_45"
                onClick={() => onFill(37)}
                fill={fillColors[37]}
                fill-rule="evenodd"
              />
              <path
                d="m247.5,307.5l0,-50l30,-30l0,50l-30,30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                id="svg_46"
                onClick={() => onFill(38)}
                fill={fillColors[38]}
                fill-rule="evenodd"
              />
              <path
                id="svg_95"
                transform="rotate(180 217.5 267.5)"
                d="m202.5,277.5l0,-50l30,30l0,50l-30,-30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                onClick={() => onFill(39)}
                fill={fillColors[39]}
                fill-rule="evenodd"
              />
              <path
                id="svg_96"
                transform="rotate(180 262.5 267.5)"
                d="m247.5,307.5l0,-50l30,-30l0,50l-30,30z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                onClick={() => onFill(40)}
                fill={fillColors[40]}
                fill-rule="evenodd"
              />
            </g>
            <g id="svg_79">
              <path
                id="svg_56"
                d="m295,275l80,-80l100,0l80,80l0,100l-80,80l-100,0l-80,-80l0,-100z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="10"
                stroke="#191919"
                onClick={() => onFill(41)}
                fill={fillColors[41]}
                fill-rule="evenodd"
              />
              <path
                id="svg_53"
                d="m325,285l60,-60l80,0l60,60l0,80l-60,60l-80,0l-60,-60l0,-80z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000000"
                onClick={() => onFill(42)}
                fill={fillColors[42]}
                fill-rule="evenodd"
              />
              <path
                id="svg_31"
                d="m432.5,307.5l0,-40l20,-20l0,40l-20,20z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000"
                onClick={() => onFill(43)}
                fill={fillColors[43]}
                fill-rule="evenodd"
              />
              <path
                id="svg_30"
                d="m397.5,287.5l0,-40l20,20l0,40l-20,-20z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000"
                onClick={() => onFill(44)}
                fill={fillColors[44]}
                fill-rule="evenodd"
              />
              <path
                id="svg_23"
                d="m422.5,327.5l0,-5l5,0l0,5l-5,0z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000"
                onClick={() => onFill(45)}
                fill={fillColors[45]}
                fill-rule="evenodd"
              />
              <path
                transform="rotate(90 472.5 307.5)"
                id="svg_2"
                d="m462.5,317.5l0,-40l20,20l0,40l-20,-20z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000"
                onClick={() => onFill(46)}
                fill={fillColors[46]}
                fill-rule="evenodd"
              />
              <path
                transform="rotate(90 472.5 342.5)"
                id="svg_3"
                d="m462.5,372.5l0,-40l20,-20l0,40l-20,20z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000"
                onClick={() => onFill(47)}
                fill={fillColors[47]}
                fill-rule="evenodd"
              />
              <path
                id="svg_4"
                transform="rotate(180 442.5 372.75)"
                d="m432.5,382.75l0,-40l20,20l0,40l-20,-20z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000"
                onClick={() => onFill(48)}
                fill={fillColors[48]}
                fill-rule="evenodd"
              />
              <path
                id="svg_5"
                transform="rotate(180 407.5 372.5)"
                d="m397.5,402.5l0,-40l20,-20l0,40l-20,20z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000"
                onClick={() => onFill(49)}
                fill={fillColors[49]}
                fill-rule="evenodd"
              />
              <path
                transform="rotate(-90 377.5 342.5)"
                id="svg_6"
                d="m367.5,352.5l0,-40l20,20l0,40l-20,-20z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000"
                onClick={() => onFill(50)}
                fill={fillColors[50]}
                fill-rule="evenodd"
              />
              <path
                transform="rotate(-90 377.5 307.5)"
                id="svg_7"
                d="m367.5,337.5l0,-40l20,-20l0,40l-20,20z"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-dasharray="null"
                stroke-width="5"
                stroke="#000"
                onClick={() => onFill(51)}
                fill={fillColors[51]}
                fill-rule="evenodd"
              />
            </g>
          </g>
          <path
            id="svg_81"
            d="m575,220l-20,-20l60,0l20,20l-60,0z"
            stroke-linecap="null"
            stroke-linejoin="null"
            stroke-dasharray="null"
            stroke-width="5"
            stroke="#191919"
            onClick={() => onFill(52)}
            fill={fillColors[52]}
            fill-rule="evenodd"
          />
          <path
            id="svg_82"
            d="m625,190l0,-60l20,20l0,60l-20,-20z"
            stroke-linecap="null"
            stroke-linejoin="null"
            stroke-dasharray="null"
            stroke-width="5"
            stroke="#191919"
            onClick={() => onFill(53)}
            fill={fillColors[53]}
            fill-rule="evenodd"
          />
          <path
            id="svg_83"
            d="m600,90l0,-40l40,0l0,40l-40,0z"
            stroke-linecap="null"
            stroke-linejoin="null"
            stroke-dasharray="null"
            stroke-width="10"
            stroke="#191919"
            onClick={() => onFill(54)}
            fill={fillColors[54]}
            fill-rule="evenodd"
          />
          <path
            id="svg_84"
            d="m660,150l0,-40l40,0l0,40l-40,0z"
            stroke-linecap="null"
            stroke-linejoin="null"
            stroke-dasharray="null"
            stroke-width="10"
            stroke="#191919"
            onClick={() => onFill(55)}
            fill={fillColors[55]}
            fill-rule="evenodd"
          />
          <g id="svg_98">
            <line
              id="svg_87"
              y2="87.5"
              x2="187.5"
              y1="237.5"
              x1="337.5"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="10"
              stroke="#191919"
              fill="#ffffff"
            />
            <path
              transform="rotate(90 270 115)"
              id="svg_88"
              d="m260,135l0,-60l20,20l0,60l-20,-20z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#191919"
              onClick={() => onFill(56)}
              fill={fillColors[56]}
              fill-rule="evenodd"
            />
            <path
              transform="rotate(90 310 155)"
              id="svg_89"
              d="m290,165l-20,-20l60,0l20,20l-60,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#191919"
              onClick={() => onFill(57)}
              fill={fillColors[57]}
              fill-rule="evenodd"
            />
            <path
              id="svg_90"
              transform="rotate(90 215 170)"
              d="m195,180l-20,-20l60,0l20,20l-60,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#191919"
              onClick={() => onFill(58)}
              fill={fillColors[58]}
              fill-rule="evenodd"
            />
            <path
              id="svg_91"
              transform="rotate(90 255 210)"
              d="m245,230l0,-60l20,20l0,60l-20,-20z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#191919"
              onClick={() => onFill(59)}
              fill={fillColors[59]}
              fill-rule="evenodd"
            />
            <path
              id="svg_92"
              d="m150,90l0,-40l40,0l0,40l-40,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="10"
              stroke="#191919"
              onClick={() => onFill(60)}
              fill={fillColors[60]}
              fill-rule="evenodd"
            />
            <path
              id="svg_93"
              d="m150,150l0,-40l40,0l0,40l-40,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="10"
              stroke="#191919"
              onClick={() => onFill(61)}
              fill={fillColors[61]}
              fill-rule="evenodd"
            />
            <path
              id="svg_94"
              d="m210,90l0,-40l40,0l0,40l-40,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="10"
              stroke="#191919"
              onClick={() => onFill(62)}
              fill={fillColors[62]}
              fill-rule="evenodd"
            />
          </g>
          <g id="svg_99">
            <line
              id="svg_100"
              y2="412.5"
              x2="187.5"
              y1="562.5"
              x1="337.5"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="10"
              stroke="#191919"
              fill="none"
              transform="rotate(-90 262.5 487.5)"
            />
            <path
              id="svg_101"
              d="m205,500l0,-60l20,20l0,60l-20,-20z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#191919"
              onClick={() => onFill(63)}
              fill={fillColors[63]}
              fill-rule="evenodd"
            />
            <path
              id="svg_102"
              d="m235,450l-20,-20l60,0l20,20l-60,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#191919"
              onClick={() => onFill(64)}
              fill={fillColors[64]}
              fill-rule="evenodd"
            />
            <path
              id="svg_103"
              d="m250,545l-20,-20l60,0l20,20l-60,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#191919"
              onClick={() => onFill(65)}
              fill={fillColors[65]}
              fill-rule="evenodd"
            />
            <path
              id="svg_104"
              d="m300,515l0,-60l20,20l0,60l-20,-20z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#191919"
              onClick={() => onFill(66)}
              fill={fillColors[66]}
              fill-rule="evenodd"
            />
            <path
              id="svg_105"
              d="m150,600l0,-40l40,0l0,40l-40,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="10"
              stroke="#191919"
              transform="rotate(-90 170 580)"
              onClick={() => onFill(67)}
              fill={fillColors[67]}
              fill-rule="evenodd"
            />
            <path
              id="svg_106"
              d="m210,600l0,-40l40,0l0,40l-40,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="10"
              stroke="#191919"
              transform="rotate(-90 230 580)"
              onClick={() => onFill(68)}
              fill={fillColors[68]}
              fill-rule="evenodd"
            />
            <path
              id="svg_107"
              d="m150,540l0,-40l40,0l0,40l-40,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="10"
              stroke="#191919"
              transform="rotate(-90 170 520)"
              onClick={() => onFill(69)}
              fill={fillColors[69]}
              fill-rule="evenodd"
            />
          </g>
          <g id="svg_108">
            <line
              id="svg_109"
              y2="412.5"
              x2="512.5"
              y1="562.5"
              x1="662.5"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="10"
              stroke="#191919"
              fill="none"
              transform="rotate(180 587.5 487.5)"
            />
            <path
              id="svg_110"
              transform="rotate(270 580 535)"
              d="m570,555l0,-60l20,20l0,60l-20,-20z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#191919"
              onClick={() => onFill(70)}
              fill={fillColors[70]}
              fill-rule="evenodd"
            />
            <path
              id="svg_111"
              transform="rotate(270 540 495)"
              d="m520,505l-20,-20l60,0l20,20l-60,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#191919"
              onClick={() => onFill(71)}
              fill={fillColors[71]}
              fill-rule="evenodd"
            />
            <path
              id="svg_112"
              transform="rotate(270 635 480)"
              d="m615,490l-20,-20l60,0l20,20l-60,0z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#191919"
              onClick={() => onFill(72)}
              fill={fillColors[72]}
              fill-rule="evenodd"
            />
            <path
              id="svg_113"
              transform="rotate(270 595 440)"
              d="m585,460l0,-60l20,20l0,60l-20,-20z"
              stroke-linecap="null"
              stroke-linejoin="null"
              stroke-dasharray="null"
              stroke-width="5"
              stroke="#191919"
              onClick={() => onFill(73)}
              fill={fillColors[73]}
              fill-rule="evenodd"
            />
            <path
              id="svg_114"
              d="m660,600l0,-40l40,0l0,40l-40,0z"
              stroke-width="10"
              stroke="#191919"
              transform="rotate(180 680 580)"
              onClick={() => onFill(74)}
              fill={fillColors[74]}
              fill-rule="evenodd"
            />
            <path
              id="svg_115"
              d="m660,540l0,-40l40,0l0,40l-40,0z"
              stroke-width="10"
              stroke="#191919"
              transform="rotate(180 680 520)"
              onClick={() => onFill(75)}
              fill={fillColors[75]}
              fill-rule="evenodd"
            />
            <path
              id="svg_116"
              d="m600,600l0,-40l40,0l0,40l-40,0z"
              stroke-width="10"
              stroke="#191919"
              transform="rotate(180 620 580)"
              onClick={() => onFill(76)}
              fill={fillColors[76]}
              fill-rule="evenodd"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Alofo;
