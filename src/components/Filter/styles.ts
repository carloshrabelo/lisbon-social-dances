import styled from "@emotion/styled";
import Tag from "../Tag";
import { css } from "@emotion/react";
import { Badge as BadgeDOM, Paper } from "@mui/material";
import { palette } from "../../theme/palette";

const btn = css`
  padding: 0;
  height: 45px;
  line-height: 45px;
  width: 48px;
`

export const Wrapper = styled(Paper)<{active?:boolean}>`
  top: 0;
  position: ${p => p.active ? 'sticky' : 'relative'};
  z-index: 10;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`

export const Badge = styled(BadgeDOM)`
  .MuiBadge-badge{
    background-color: ${palette["dark-gray"].main};
    color: white;
  }
`
export const ShowFilter = styled(Tag)`
  display: block;
  font-size: .9em;
  position: fixed;
  right: 8px;
  top: 16px;
  z-index: 1;
  ${btn}
`
export const CloseBtn = styled(Tag)`
  display: block;
  font-size: .9em;
  position: absolute;
  position: absolute;
  right: 8px;
  bottom: calc(-48px - 8px);
  ${btn}
`