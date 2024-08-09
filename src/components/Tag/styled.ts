import styled from "@emotion/styled";
import { type Color, palette, type ColorEntry } from "../../theme/palette";
import { css } from "@emotion/react";
import { getContrastingColor } from "../../utils/getContrastingColor";

type Props = { color: Color, size?: string };

const getColor =
  (variant: keyof ColorEntry = "main") =>
    (p: Props) => p.color && palette[p.color]?.[variant] || palette.gray[variant];

export const Wrapper = styled.div<Props>`
  font-family: "Feather Bold";
  background-color: ${getColor()};
  color: ${p => getContrastingColor(getColor()(p))};
  text-wrap: nowrap;
  text-align: center;
  word-break: keep-all;
  font-weight: 700;
  padding: ${p => p.size === 'small' ? '2px 4px 0px' : '4px 12px 0px'} ;
  position: relative;
  border-radius: ${p => p.size === 'small' ? '10px' : '10px'} ;
  cursor: pointer;
  font-size: ${p => p.size === 'small' ? '.65em' : '.9em'};
  user-select: none;

  ${p => p.onClick && css`:active {
    transform: translateY(4px) translateZ(0);
  }
  :active:before {
    box-shadow: none;
  }
  `};

  :before {
    border-radius: ${p => p.size === 'small' ? '10px' : '10px'};
    bottom: 0;
    box-shadow: 0 ${p => p.size === 'small' ? 2 : 4}px 0;
    color: ${getColor('dark')};
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
`;
