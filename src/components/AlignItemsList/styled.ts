import styled from "@emotion/styled";
import {  getContrastingColor, palette } from "../../utils/all";

export const Head = styled.div`
  background-color: ${palette.DarkGray.main};
  color: ${getContrastingColor(palette.DarkGray.main)};
  flex: 1;
  text-align: center;
  font-weight: 700;
  padding: 4px 12px;
  position: relative;
  border-radius: 10px 10px 0px 0;
  cursor: pointer;
  position: sticky;
  top: 50px;
`;

export const Footer = styled.div`
  background-color: ${palette.DarkGray.main};
  color: ${getContrastingColor(palette.DarkGray.main)};
  flex: 1;
  text-align: center;
  font-weight: 700;
  padding: 4px 12px;
  position: relative;
  border-radius:  0px 0 10px 10px;
  cursor: pointer;
  position: sticky;
  bottom: 0;
  margin-bottom: 10px;
`;
