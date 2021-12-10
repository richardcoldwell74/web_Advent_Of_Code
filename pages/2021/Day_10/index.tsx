import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "@api/2021/day_10/Input";
import { testInput } from "@api/2021/day_10/testInput";
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

//PART 1
const CalculateAnswerPartOne = () => {
  let Day10Part1Input = getInput();

  let illegals = CheckForIllegals(Day10Part1Input);
  let answer = CalculatePartOnePoints(illegals);

  return answer;
};

const BracketMap = {
  ")": "(",
  "}": "{",
  "]": "[",
  ">": "<",
};

function CheckForIllegals(lines: string[]) {
  const illegalChars: string[] = [];
  lines.forEach((line: string) => {
    const stack = [];
    var keepGoing = true;
    for (let char of line) {
      switch (char) {
        case "(":
        case "{":
        case "[":
        case "<":
          stack.push(char);
          break;
        case ")":
        case "}":
        case "]":
        case ">":
          const endValue = stack.pop();
          if (endValue != BracketMap[char]) {
            illegalChars.push(char);
            keepGoing = false;
            break;
          }
      }
      if (!keepGoing) break;
    }
  });
  return illegalChars;
}

const CalculatePartOnePoints = (illegalChars: string[]) => {
  let TotalPoints = 0;
  illegalChars.forEach((char) => {
    switch (char) {
      case ")":
        TotalPoints += 3;
        break;
      case "]":
        TotalPoints += 57;
        break;
      case "}":
        TotalPoints += 1197;
        break;
      case ">":
        TotalPoints += 25137;
        break;
    }
  });
  return TotalPoints;
};

//PART 2
const CalculateAnswerPartTwo = () => {
  let answer = 0;
  let Day10Part1Input = getInput();
  let ValidLineIndexs: number[] = GetAllValidLines(Day10Part1Input);
  let ValidLines: string[] = [];

  Day10Part1Input.forEach((line, index) => {
    if (!ValidLineIndexs.includes(index)) {
      ValidLines.push(line);
    }
  });
  answer = WorkOutMissing(ValidLines);

  return answer;
};

function WorkOutMissing(lines: string[]) {
  const allScores: number[] = [];
  lines.forEach((line: string) => {
    const stack: string[] = [];
    for (let char of line) {
      switch (char) {
        case "(":
        case "{":
        case "[":
        case "<":
          stack.push(char);
          break;
        case ")":
        case "}":
        case "]":
        case ">":
          stack.pop();
          break;
      }
    }
    let score = 0;
    console.log("STACK = " + stack);
    let missingBrackets = stack.reverse();
    console.log("MISSING BRACKETS = " + missingBrackets);
    missingBrackets.forEach((bracket) => {
      switch (bracket) {
        case "(":
          score = score * 5;
          score += 1;
          break;
        case "[":
          score = score * 5;
          score += 2;
          break;
        case "{":
          score = score * 5;
          score += 3;
          break;
        case "<":
          score = score * 5;
          score += 4;
          break;
      }
    });
    allScores.push(score);
  });
  console.log("SCORE = " + allScores);
  allScores.sort(function (a, b) {
    return a - b;
  });
  let scoreIndex = (allScores.length - 1) / 2;
  console.log("SCORE = " + allScores);
  console.log("ANSWER SCORE = " + allScores[scoreIndex]);
  return allScores[scoreIndex];
}

function GetAllValidLines(lines: string[]) {
  let invalidLineIndexs: number[] = [];
  lines.forEach((line: string, index: number) => {
    const stack = [];
    var keepGoing = true;
    for (let char of line) {
      switch (char) {
        case "(":
        case "{":
        case "[":
        case "<":
          stack.push(char);
          break;
        case ")":
        case "}":
        case "]":
        case ">":
          const endValue = stack.pop();
          if (endValue != BracketMap[char]) {
            // illegalChars.push(char);
            invalidLineIndexs.push(index);
            keepGoing = false;
            break;
          }
      }
      if (!keepGoing) break;
    }
  });
  return invalidLineIndexs;
}

const getInput = (): string[] => input.split("\n").map(String);

export default function Day10() {
  return (
    <Container>
      <Head>
        <title>AOC 2021 - Day 10</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 10</h1>
        <h2>Part 1</h2>
        <p>{CalculateAnswerPartOne()}</p>
        <h2>Part 2</h2>
        <p>{CalculateAnswerPartTwo()}</p>
      </main>

      <Footer />
    </Container>
  );
}
