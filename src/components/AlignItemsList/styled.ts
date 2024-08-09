import styled from "@emotion/styled";
import { palette } from "../../theme/palette";
import { getContrastingColor } from "../../utils/getContrastingColor";
import { css } from "@emotion/react";
import Tag from "../Tag";

export const Head = styled.h2<{ xpto?: boolean }>`
  font-size: 1em;
  background-color: ${palette['dark-gray'].main};
  color: ${getContrastingColor(palette['dark-gray'].main)};
  flex: 1;
  text-align: center;
  font-weight: 700;
  padding: 4px 12px;
  position: relative;
  border-radius: ${p => !p.xpto && '10px 10px 0 0'};
  cursor: pointer;
  position: sticky;
  align-content: center;
  ${p => p.xpto && css`
  min-height: 2em;
  top: 0;
  text-align: left;
  `};

`;

export const Footer = styled.h2`
  font-size: 1em;
  background-color: ${palette['dark-gray'].main};
  color: ${getContrastingColor(palette['dark-gray'].main)};
  flex: 1;
  text-align: center;
  font-weight: 700;
  padding: 4px 12px;
  position: relative;
  border-radius:  0 0 10px 10px;
  cursor: pointer;
  position: sticky;
  bottom: 0;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid hsla(220, 35%, 88%, 0.5);

  &>div:first-of-type{
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &>div:last-of-type{
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const CloseBtn = styled(Tag)`
  font-size: 1.2em;
  height: 1.2em;
  width: 1.2em;
`