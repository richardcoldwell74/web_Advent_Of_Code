import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { testBoards } from "../../api/day_04/testBoards";
import { testNumbers } from "../../api/day_04/testNumbers";
import { BoardsInput } from "../../api/day_04/BoardsInput";
import { NumbersInput } from "../../api/day_04/NumbersInput";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("winter_background.png");
`;

const CheckIfWinningLine = (boardInput) => {
  //is it a winning line across
  //loop through each board
  for (let BoardIndex = 0; BoardIndex < boardInput.length; BoardIndex++) {
    //loop through each row of the board
    for (
      let BoardLineIndex = 0;
      BoardLineIndex < boardInput[BoardIndex].length;
      BoardLineIndex++
    ) {
      //loop through each number in the row
      let lineTotal = 0;
      for (
        let BoardNumberIndex = 0;
        BoardNumberIndex < boardInput[BoardIndex][BoardLineIndex].length;
        BoardNumberIndex++
      ) {
        //add number to lineTotal
        lineTotal += boardInput[BoardIndex][BoardLineIndex][BoardNumberIndex];
      }

      if (lineTotal === 500) {
        return BoardIndex;
      }
    }
  }

  return -1;
};

const CheckIfWinningColumn = (boardInput) => {
  //is it a winning line down
  //loop through each board
  for (let BoardIndex = 0; BoardIndex < boardInput.length; BoardIndex++) {
    //loop though each column of the board

    for (let BoardNumberIndex = 0; BoardNumberIndex < 5; BoardNumberIndex++) {
      let columnTotal = 0;

      columnTotal += boardInput[BoardIndex][0][BoardNumberIndex];
      columnTotal += boardInput[BoardIndex][1][BoardNumberIndex];
      columnTotal += boardInput[BoardIndex][2][BoardNumberIndex];
      columnTotal += boardInput[BoardIndex][3][BoardNumberIndex];
      columnTotal += boardInput[BoardIndex][4][BoardNumberIndex];

      if (columnTotal === 500) {
        return BoardIndex;
      }
    }
  }
  return -1;
};

//pass in array of boards and index of specific board and calculates totla of numbers not checked off
const RestOfBoardValue = (boardInput, BoardIndex) => {
  let BoardRemainingTotal = 0;
  //loop through each row of the board
  for (
    let BoardLineIndex = 0;
    BoardLineIndex < boardInput[BoardIndex].length;
    BoardLineIndex++
  ) {
    //loop through each number in the row
    for (
      let BoardNumberIndex = 0;
      BoardNumberIndex < boardInput[BoardIndex][BoardLineIndex].length;
      BoardNumberIndex++
    ) {
      //add number to BoardRemainingTotal if not equal to 100
      if (boardInput[BoardIndex][BoardLineIndex][BoardNumberIndex] != 100) {
        BoardRemainingTotal +=
          boardInput[BoardIndex][BoardLineIndex][BoardNumberIndex];
      }
    }
  }
  return BoardRemainingTotal;
};

const getInputNumbers = (): number[] => NumbersInput.split(",").map(Number);
// const getInputNumbers = (): number[] => NumbersInput.split(",").map(Number);

const getInputBoards = () =>
  // BoardsInput.split("\n")
  BoardsInput.split("\n")
    .join("\n")
    .split("\n\n")
    .map((board) => {
      return board.split("\n").map((row) =>
        row
          .trim()
          .split(/\s+/)
          .map((value) => parseInt(value))
      );
    });

const CalculateAnswerPartOne = () => {
  let answer = 0;
  let numbersInput = getInputNumbers();
  let boardInput = getInputBoards();
  //loop through each number called
  // numbersInput.forEach((calledNumber) => {
  for (let numberIndex = 0; numberIndex < numbersInput.length; numberIndex++) {
    //loop through each Board
    for (let BoardIndex = 0; BoardIndex < boardInput.length; BoardIndex++) {
      //loop through each row of the board
      for (
        let BoardLineIndex = 0;
        BoardLineIndex < boardInput[BoardIndex].length;
        BoardLineIndex++
      ) {
        //loop through each number in the row
        for (
          let BoardNumberIndex = 0;
          BoardNumberIndex < boardInput[BoardIndex][BoardLineIndex].length;
          BoardNumberIndex++
        ) {
          //compare called number with number on board and if a match set value to 100
          if (
            numbersInput[numberIndex] ===
            boardInput[BoardIndex][BoardLineIndex][BoardNumberIndex]
          ) {
            boardInput[BoardIndex][BoardLineIndex][BoardNumberIndex] = 100;
          }
        }
      }
      let returnValue = CheckIfWinningLine(boardInput);
      if (returnValue != -1) {
        answer =
          RestOfBoardValue(boardInput, BoardIndex) * numbersInput[numberIndex];
        return answer;
      }
    }
  }
  return answer;
};

const CalculateAnswerPartTwo = () => {
  let answer = 0;
  let numbersInput = getInputNumbers();
  console.log(numbersInput);
  let boardInput = getInputBoards();
  let winningBoards = [];
  const totalBoards = boardInput.length;
  //loop through each number called
  // numbersInput.forEach((calledNumber) => {
  for (let numberIndex = 0; numberIndex < numbersInput.length; numberIndex++) {
    //loop through each Board
    for (let BoardIndex = 0; BoardIndex < boardInput.length; BoardIndex++) {
      //loop through each row of the board
      for (
        let BoardLineIndex = 0;
        BoardLineIndex < boardInput[BoardIndex].length;
        BoardLineIndex++
      ) {
        //loop through each number in the row
        for (
          let BoardNumberIndex = 0;
          BoardNumberIndex < boardInput[BoardIndex][BoardLineIndex].length;
          BoardNumberIndex++
        ) {
          //compare called number with number on board and if a match set value to 100
          if (
            numbersInput[numberIndex] ===
            boardInput[BoardIndex][BoardLineIndex][BoardNumberIndex]
          ) {
            boardInput[BoardIndex][BoardLineIndex][BoardNumberIndex] = 100;
          }
        }
      }
      let returnValueLine = CheckIfWinningLine(boardInput);
      if (returnValueLine != -1) {
        if (!winningBoards.includes(returnValueLine)) {
          winningBoards.push(returnValueLine);
        }
      }
      let returnValueColumn = CheckIfWinningColumn(boardInput);
      if (returnValueColumn != -1) {
        if (!winningBoards.includes(returnValueColumn)) {
          winningBoards.push(returnValueColumn);
        }
      }

      if (winningBoards.length === totalBoards) {
        answer =
          RestOfBoardValue(boardInput, BoardIndex) * numbersInput[numberIndex];

        console.log(answer);
        return answer;
      }
    }
  }
  return answer;
};

export default function Day04() {
  const [firstAnswer, setFirstAnswer] = useState(CalculateAnswerPartOne());
  const [secondAnswer, setSecondAnswer] = useState(CalculateAnswerPartTwo());
  return (
    <Container>
      <Head>
        <title>AOC 2021 - Day 04</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 4</h1>
        <h2>Part 1</h2>
        <p>{firstAnswer}</p>
        <h2>Part 2</h2>
        <p>{secondAnswer}</p>
      </main>

      <Footer />
    </Container>
  );
}
