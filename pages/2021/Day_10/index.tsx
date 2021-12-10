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

  let answer = CheckForIllegals(Day10Part1Input);
  console.log("THE ANSWER IS " + answer);
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
  lines.forEach((line) => {
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
  console.log(illegalChars)
  let TotalPoints = 0;
  illegalChars.forEach((char) => {
    switch (char) {
      case ")":
        TotalPoints += 3;
        break;
      case "}":
        TotalPoints += 57;
        break;
      case "]":
        TotalPoints += 1197;
        break;
      case ">":
        TotalPoints += 25137;
        break;
    }
  });
  return TotalPoints;
}

//PART 2
const CalculateAnswerPartTwo = () => {
  let answer = 0;
  return answer;
};

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
