import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { testBoards } from "../../api/day_04/testBoards";
import { testNumbers } from "../../api/day_04/testNumbers";
import { BoardsInput } from "../../api/day_04/BoardsInput";
import { NumbersInput } from "../../api/day_04/NumbersInput";
import styled from "styled-components";

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

// const getInputNumbers = (): number[] => testNumbers.split(",").map(Number);
const getInputNumbers = (): number[] => NumbersInput.split(",").map(Number);

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
  for (let calledNumber of numbersInput) {
    //mark off the current number from the board
    boardInput = markBoards(boardInput, calledNumber);
    for (let board of boardInput) {
      let ItsAWinner = constCheckIfBoardIsALineWinner(board);
      let ItsAColumnWinner = CheckIfWinningColumnTOUPDATE(board);
      if (ItsAWinner || ItsAColumnWinner) {
        answer = RestOfBoardValueTOUPDATE(board) * calledNumber;
        return answer;
      }
    }
  }
  return answer;
};

const CalculateAnswerPartTwo = () => {
  let answer = 0;
  let numbersInput = getInputNumbers();
  let boardInput = getInputBoards();
  let LastWinningBoard: number[][] = [];
  let lastWinningNumber: number = 0;

  //loop through each number called
  for (let calledNumber of numbersInput) {
    //mark off the current number from the board
    boardInput = markBoards(boardInput, calledNumber);
    let boardInputIndex = 0;
    for (let board of boardInput) {
      let ItsAWinner = constCheckIfBoardIsALineWinner(board);
      let ItsAColumnWinner = CheckIfWinningColumnTOUPDATE(board);
      if (ItsAWinner || ItsAColumnWinner) {
        LastWinningBoard = board;
        lastWinningNumber = calledNumber;
        boardInput[boardInputIndex] = boardInput[boardInputIndex].map((line) =>
          line.map((number) => {
            return 500;
          })
        );
      }
      boardInputIndex++;
    }
  }
  answer = RestOfBoardValueTOUPDATE(LastWinningBoard) * lastWinningNumber;
  return answer;
};

const markBoards = (boardInput: number[][][], calledNumber: number) => {
  boardInput = boardInput.map((board) =>
    board.map((line) =>
      line.map((number) => {
        if (number === calledNumber) {
          return 100;
        } else {
          return number;
        }
      })
    )
  );
  return boardInput;
};

const RestOfBoardValueTOUPDATE = (board: number[][]) => {
  let BoardRemainingTotal = 0;
  board.forEach((line) => {
    line.forEach((number) => {
      if (number != 100) {
        BoardRemainingTotal += number;
      }
    });
  });
  return BoardRemainingTotal;
};

const constCheckIfBoardIsALineWinner = (board: number[][]) => {
  let returnValue: boolean = false;
  //loop through each row of the board
  board.forEach((line) => {
    let lineTotal = 0;
    line.forEach((number) => {
      lineTotal += number;
    });

    if (lineTotal === 500) {
      returnValue = true;
    }
  });
  return returnValue;
};

const CheckIfWinningColumnTOUPDATE = (board: number[][]) => {
  return constCheckIfBoardIsALineWinner(transpose(board));
};

function transpose(a) {
  return Object.keys(a[0]).map(function (c) {
    return a.map(function (r) {
      return r[c];
    });
  });
}

export default function Day04() {
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
        <p>{CalculateAnswerPartOne()}</p>
        <h2>Part 2</h2>
        <p>{CalculateAnswerPartTwo()}</p>
      </main>

      <Footer />
    </Container>
  );
}
