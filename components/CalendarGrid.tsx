import { FunctionComponent, useState } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  margin-top: 25px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 25px;

  @media only screen and (min-width: 760px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

interface CalendarGridProps {
  title?: string;
}

export const CalendarGrid: FunctionComponent<CalendarGridProps> = ({
  children,
  title,
}) => {
  return <Grid>{children}</Grid>;
};
