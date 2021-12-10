import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Door = styled.div<{ doorOpen: boolean }>`
  display: flex;
  height: 120px;
  width: 100px;
  position: relative;
  transition: 0.5s;
  transform: ${({ doorOpen }) => (doorOpen ? "rotatey(-180deg)" : "none")};
  transform-style: preserve-3d;
  transition: transform 0.3s ease-in-out;
`;

const DoorFront = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: transparent;
  border: 2px dashed transparent;
  :hover {
    border-color: darkgray;
  }
`;

const DoorBack = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotatey(-180deg);
  background-color: #262626;
`;

const Doorflipper = styled.div`
  width: 100%;
  height: 40px;
  background-color: transparent;
`;

const DoorLabel = styled.h3`
  position: absolute;
  left: 20px;
  top: 20px;
  margin: 0;
  color: #262626;
`;

const DoorLink = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const DayText = styled.h3`
  margin: 0;
  color: #ddd;
`;

interface CalendarDoorProps {
  day: string;
  year: string;
}

export default function CalendarDoor({ day, year }) {
  const [doorOpen, setDoorOpen] = useState(false);
  const [doorLink, setDoorLink] = useState(year + "/Day_" + day);
  const openDoor = (): void => {
    setDoorOpen(!doorOpen);
  };

  return (
    <Door doorOpen={doorOpen}>
      <DoorFront onClick={() => openDoor()}>
        <DoorLabel>{day}</DoorLabel>
      </DoorFront>
      <DoorBack>
        <Doorflipper onClick={() => openDoor()} />
        <Link href={doorLink}>
          <DoorLink>
            <DayText>Day {day}</DayText>
          </DoorLink>
        </Link>
      </DoorBack>
    </Door>
  );
}
