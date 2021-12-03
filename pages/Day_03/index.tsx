import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../api/day_03/input";
import { testInput } from "../../api/day_03/testInput";
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

const CalculateAnswerPartOne = () => {
  const rawInput = getInput();
  let gammaRateString = "";
  let epsilonrateString = "";

  for (let index = 0; index < rawInput[0].length; index++) {
    let count = 0;

    rawInput.forEach((element) => {
      if (element.charAt(index) == "1") {
        count++;
      }
    });
    if (count > rawInput.length / 2) {
      gammaRateString += 1;
      epsilonrateString += 0;
    } else {
      gammaRateString += 0;
      epsilonrateString += 1;
    }
  }
  const gammaRate = parseInt(gammaRateString, 2);
  const epsilonRate = parseInt(epsilonrateString, 2);
  const answer = gammaRate * epsilonRate;
  return answer;
};

const CalculateAnswerPartTwo = () => {
  let oxygenInput = getInput();
  let co2Input  = [...oxygenInput];
  let iterator = oxygenInput[0].length;

  for (let index = 0; index < iterator; index++) {
    let count = 0;

    oxygenInput.forEach((element) => {
      if (element.charAt(index) == "1") {
        count++;
      }
    });
    if (count >= oxygenInput.length / 2) {
      oxygenInput = oxygenInput.filter((word) => word.charAt(index) === "1");
    } else {
      oxygenInput = oxygenInput.filter((word) => word.charAt(index) === "0");
    }
    if (oxygenInput.length <= 1) {
      break;
    }
  }
  const oxygen = parseInt(oxygenInput[0], 2);

  iterator = co2Input[0].length;

  for (let index = 0; index < iterator; index++) {
    let count = 0;

    co2Input.forEach((element) => {
      if (element.charAt(index) !== "1") {
        count++;
      }
    });
    if (count <= co2Input.length / 2) {
      co2Input = co2Input.filter((word) => word.charAt(index) === "0");
    } else {
      co2Input = co2Input.filter((word) => word.charAt(index) === "1");
    }
    if (co2Input.length <= 1) {
      break;
    }
  }
  const co2 = parseInt(co2Input[0], 2);

  const answer = oxygen * co2;
  return answer;
};

const getInput = (): string[] => input.split("\n").map(String);

export default function Day03() {
  return (
    <Container>
      <Head>
        <title>AOC 2021 - Day 03</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 3</h1>
        <h2>Part 1</h2>
        <p>{CalculateAnswerPartOne()}</p>
        <h2>Part 2</h2>
        <p>{CalculateAnswerPartTwo()}</p>
      </main>

      <Footer />
    </Container>
  );
}
