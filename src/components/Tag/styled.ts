import styled from "@emotion/styled";
import { type ColorEntry, getContrastingColor, palette } from "../../utils/all";

export const Wrapper = styled.div<{ myColor: ColorEntry }>`
  background-color: ${p => (p.myColor || palette.Gray).main};
  color: ${p => getContrastingColor((p.myColor || palette.Gray).main)};
  flex: 1;
  text-wrap: nowrap;
  text-align: center;
  word-break: keep-all;
  font-weight: 700;
  padding: 4px 12px;
  position: relative;
  border-radius: 10px;
  cursor: pointer;

  &:active {
    transform: translateY(4px) translateZ(0);
  }

  :active:before {
    box-shadow: none;
  }

  :before {
    border-radius: 12px;
    bottom: 0;
    box-shadow: 0 4px 0;
    color: ${p => (p.myColor || palette.Gray).dark};
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
`;
