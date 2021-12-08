import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "@api/2021/day_08/input";
import { testInput } from "@api/2021/day_08/testInput";
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

const CalculateAnswerPartOne = () => {
  let signals = getSignals();
  let outputs = getOutputs();
  let count = 0;
  outputs.forEach((line) => {
    line.forEach((value) => {
      if (
        value.length === 2 ||
        value.length === 4 ||
        value.length === 3 ||
        value.length === 7
      ) {
        count++;
      }
    });
  });
  const answer = count;
  return answer;
};

const CalculateAnswerPartTwo = () => {
  let answer:number = 0;
  let signals = getSignals();
  for (let index = 0; index < signals.length; index++) {
    let solvedSignals: string[] = ["","","","","","","","","","",]
    signals[index].forEach((signalValue) => {
      // workout 1
      if (signalValue.length === 2) solvedSignals[1] = signalValue;
      // workout 4
      if (signalValue.length === 4) solvedSignals[4] = signalValue;
      // workout 7
      if (signalValue.length === 3) solvedSignals[7] = signalValue;
      // workout 8
      if (signalValue.length === 7) solvedSignals[8] = signalValue;
    });
    // workout 9
    let temp = diff(solvedSignals[7], solvedSignals[1]);
    temp += solvedSignals[4];
    signals[index].forEach((signalValue) => {
      if (signalValue.length === 6) {
        if (checkIfStringsContainSameCharacters(signalValue, temp))
        solvedSignals[9] = signalValue;
      }
    });
    // workout 3
    signals[index].forEach((signalValue) => {
      if (signalValue.length === 5) {
        if (checkIfStringsContainSameCharacters(signalValue, solvedSignals[1]))
        solvedSignals[3] = signalValue;
      }
    });
    // workout 0 and 6
    signals[index].forEach((signalValue) => {
      if (signalValue.length === 6) {
        if (!checkIfStringsContainSameCharacters(signalValue, solvedSignals[9])) {
          if (checkIfStringsContainSameCharacters(signalValue, solvedSignals[1])) {
            solvedSignals[0] = signalValue;
          } else {
            solvedSignals[6] = signalValue;
          }
        }
      }
    });
    // workout 2 and 5
    signals[index].forEach((signalValue) => {
      if (signalValue.length === 5) {
        if (!checkIfStringsContainSameCharacters(signalValue, solvedSignals[3])) {
          //get difference between 8 and 9 then use that for comparison
          temp = diff(solvedSignals[8], solvedSignals[9]);
          if (checkIfStringsContainSameCharacters(signalValue, temp)) {
            solvedSignals[2] = signalValue;
          } else {
            solvedSignals[5] = signalValue;
          }
        }
      }
    });
   
    //Work Out The Outputs Values
    let outputs = getOutputs();
    let answerTotal: number = 0;
    let answerString: string = "";
    outputs[index].forEach((outputValue) => {
      solvedSignals.forEach((solution, index) => {
        if (outputValue.length === solution.length) {
          if (checkIfStringsContainSameCharacters(outputValue, solution)) {
            answerString += index.toString();
          }
        }
      });
    });
    answer = answer + parseInt(answerString)
  }
  return answer;
};

function diff(s1, s2) {
  let returnValue: string = "";
  for (let i in s1)
    s2.includes(s1[i]) ? (returnValue += "") : (returnValue += s1[i]);
  return returnValue;
}

const checkIfStringsContainSameCharacters = (string1, string2) => {
  return new Set(string1).size === new Set(string1 + string2).size;
};

const getSignals = () =>
  input.split("\n").map((line) => line.split(" ", 10));

const getOutputs = () =>
  input
    .split("\n")
    .map((fullLine) => fullLine.split("| ")[1])
    .map((line) => line.split(" "));

export default function Day08() {
  return (
    <Container>
      <Head>
        <title>AOC 2021 - Day 08</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 8</h1>
        <h2>Part 1</h2>
        <p>{CalculateAnswerPartOne()}</p>
        <h2>Part 2</h2>
        <p>{CalculateAnswerPartTwo()}</p>
      </main>

      <Footer />
    </Container>
  );
}
