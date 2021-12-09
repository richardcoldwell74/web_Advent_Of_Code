import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "@api/2021/day_09/Input";
import { testInput } from "@api/2021/day_09/testInput";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/winter_background.png");
`;

const checkAbove = (day9Input, x, y) => {
  let returnValue = false;
  if (y != 0) {
    if (day9Input[y - 1][x] > day9Input[y][x]) {
      returnValue = true;
    }
  } else {
    returnValue = true;
  }

  return returnValue;
};

const checkBelow = (day9Input, x, y) => {
  let returnValue = false;
  if (y != day9Input.length - 1) {
    if (day9Input[y + 1][x] > day9Input[y][x]) {
      returnValue = true;
    }
  } else {
    returnValue = true;
  }

  return returnValue;
};

const checkLeft = (day9Input, x, y) => {
  let returnValue = false;
  if (x != 0) {
    if (day9Input[y][x - 1] > day9Input[y][x]) {
      returnValue = true;
    }
  } else {
    returnValue = true;
  }
  return returnValue;
};

const checkRight = (day9Input, x, y) => {
  let returnValue = false;
  if (x != day9Input[y].length - 1) {
    if (day9Input[y][x + 1] > day9Input[y][x]) {
      returnValue = true;
    }
  } else {
    returnValue = true;
  }
  return returnValue;
};

const checkNeighbours = (day9Input, x, y) => {
  let returnValue = false;
  if (
    checkLeft(day9Input, x, y) &&
    checkRight(day9Input, x, y) &&
    checkAbove(day9Input, x, y) &&
    checkBelow(day9Input, x, y)
  ) {
    returnValue = true;
  }
  return returnValue;
};

const CalculateAnswerPartOne = () => {
  let day9Input = getInput();
  let answer = 0;

  for (let y = 0; y < day9Input.length; y++) {
    let row = day9Input[y];
    for (let x = 0; x < row.length; x++) {
      if (checkNeighbours(day9Input, x, y)) {
        answer += parseInt(day9Input[y][x]) + 1;
      }
    }
  }

  return answer;
};

//PART 2

const getAboveCell = (day9Input, x: number, y: number) => {
  let returnValue: GridCell = { x: -1, y: -1, value: -1 };
  if (y != 0) {
    returnValue = { x: x, y: y - 1, value: parseInt(day9Input[y - 1][x]) };
  }
  return returnValue;
};

const getBelowCell = (day9Input, x: number, y: number) => {
  let returnValue: GridCell = { x: -1, y: -1, value: -1 };
  if (y != day9Input.length - 1) {
    returnValue = { x: x, y: y + 1, value: parseInt(day9Input[y + 1][x]) };
  }
  return returnValue;
};

const getLeftCell = (day9Input, x: number, y: number) => {
  let returnValue: GridCell = { x: -1, y: -1, value: -1 };
  if (x != 0) {
    returnValue = { x: x - 1, y: y, value: parseInt(day9Input[y][x - 1]) };
  }
  return returnValue;
};

const getRightCell = (day9Input, x, y) => {
  let returnValue: GridCell = { x: -1, y: -1, value: -1 };
  if (x != day9Input[y].length - 1) {
    returnValue = { x: x + 1, y: y, value: parseInt(day9Input[y][x + 1]) };
  }
  return returnValue;
};

const getCell = (day9Input, x, y) => {
  return { x: x, y: y, value: parseInt(day9Input[y][x]) };
};

interface GridCell {
  x: number;
  y: number;
  value: number;
}

const CalculateAnswerPartTwo = () => {
  let TheAnswerList: number[] = [];
  let day9Input = getInput();
  let answer = 0;
  let lowPoints: GridCell[] = [];

  // Get all the lowpoints and store there values in array
  for (let y = 0; y < day9Input.length; y++) {
    let row = day9Input[y];
    let lowPointCoOrds;
    for (let x = 0; x < row.length; x++) {
      if (checkNeighbours(day9Input, x, y)) {
        lowPoints.push({ x: x, y: y, value: parseInt(day9Input[y][x]) });
      }
    }
  }
  // Loop Through Each Low Point to calculate its basin size
  lowPoints.forEach((lowPoint: GridCell) => {
    TheAnswerList.push(CalculateBasinSize(day9Input, lowPoint));
  });
  TheAnswerList.sort(function(a, b) {
    return b - a;
  });
  answer = TheAnswerList[0]  * TheAnswerList[1] * TheAnswerList[2]
  return answer;
};

const CalculateBasinSize = (day9Input: string[][], lowPoint: GridCell) => {
  let cellX: number = lowPoint.x;
  let cellY: number = lowPoint.y;
  let basinSize: number = 0;
  let cellsStillToCheck: GridCell[] = [lowPoint];
  let cellsThatArePartOfBasin: GridCell[] = [lowPoint];
  let alreadyChecked: GridCell[] = [];
  let CheckCells: boolean = true;

  while (CheckCells) {
    cellX = cellsStillToCheck[0].x;
    cellY = cellsStillToCheck[0].y;

    let checkedThisLoop: GridCell[] = [];

    let leftCell: GridCell = getLeftCell(day9Input, cellX, cellY);
    if (leftCell.x != -1) {
      if (leftCell.value != 9) {
        checkedThisLoop.push(leftCell);
      }
    }
    let rightCell: GridCell = getRightCell(day9Input, cellX, cellY);
    if (rightCell.x != -1) {
      if (rightCell.value != 9) {
        checkedThisLoop.push(rightCell);
      }
    }
    let aboveCell: GridCell = getAboveCell(day9Input, cellX, cellY);
    if (aboveCell.x != -1) {
      if (aboveCell.value != 9) {
        checkedThisLoop.push(aboveCell);
      }
    }
    let belowCell: GridCell = getBelowCell(day9Input, cellX, cellY);
    if (belowCell.x != -1) {
      if (belowCell.value != 9) {
        checkedThisLoop.push(belowCell);
      }
    }

    // Add this cell to the alreadyChecked Array
    alreadyChecked.push(getCell(day9Input, cellX, cellY));

    // remove cells that returned -1  this loop  from the array
    checkedThisLoop = checkedThisLoop.filter((cell) => {
      if (cell.x != -1) {
        return cell;
      }
    });

    // remove cells that all ready checked
    checkedThisLoop = checkedThisLoop.filter((cellNew) => {
      if (
        !alreadyChecked.find(
          (cell: GridCell) => cell.x === cellNew.x && cell.y === cellNew.y
        )
      ) {
        return cellNew;
      }
    });

    // remove cells that all ready on the to check list
    checkedThisLoop = checkedThisLoop.filter((cellNew) => {
      if (
        !cellsStillToCheck.find(
          (cell: GridCell) => cell.x === cellNew.x && cell.y === cellNew.y
        )
      ) {
        return cellNew;
      }
    });

    checkedThisLoop.forEach((element) => {
      cellsStillToCheck.push(element);
    });
    cellsStillToCheck.shift();

    checkedThisLoop = [];

    if (cellsStillToCheck.length <= 0) {
      CheckCells = false;
    }
    // CheckCells = false;
  }
  return alreadyChecked.length;
};

const getInput = () => input.split("\n").map((line) => line.split(""));

export default function Day09() {
  return (
    <Container>
      <Head>
        <title>AOC 2021 - Day 09</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 9</h1>
        <h2>Part 1</h2>
        <p>{CalculateAnswerPartOne()}</p>
        <h2>Part 2</h2>
        <p>{CalculateAnswerPartTwo()}</p>
      </main>

      <Footer />
    </Container>
  );
}
