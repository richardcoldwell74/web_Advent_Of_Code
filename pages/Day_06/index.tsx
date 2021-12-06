import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../api/day_06/input";
import { testInput } from "../../api/day_06/testInput";
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
  background-image: url("winter_background.png");
`;

const CalculateAnswerPartOne = () => {
  let AnglerFishData = getInput();
  let newFishCount: number;
  for (let dayNumber = 1; dayNumber <= 80; dayNumber++) {
    let newFishCount = 0;
    AnglerFishData = AnglerFishData.map((fish) => {
      if (fish === 0) {
        newFishCount++;
        return 6;
      } else {
        fish--;
        return fish;
      }
    });
    for (let index = 0; index < newFishCount; index++) {
      AnglerFishData.push(8);
    }
  }

  const answer = AnglerFishData.length;
  return answer;
};

const CalculateAnswerPartTwo = () => {
  let AnglerFishData = getInput();
  let newFishCount: number;
  let AnglerFishGroupArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  AnglerFishData.forEach((fish) => {
    AnglerFishGroupArray[fish]++;
  });
  for (let dayNumber = 1; dayNumber <= 256; dayNumber++) {
    newFishCount = AnglerFishGroupArray.shift();
    AnglerFishGroupArray[6]+=newFishCount;
    AnglerFishGroupArray.push(newFishCount);
  }
  const answer = AnglerFishGroupArray.reduce(
    (partial_sum, a) => partial_sum + a,
    0
  );
  return answer;
};

const getInput = (): number[] => input.split(",").map(Number);

export default function Day06() {

  return (
    <Container>
      <Head>
        <title>AOC 2021 - Day 06</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 6</h1>
        <h2>Part 1</h2>
        <p>{CalculateAnswerPartOne()}</p>
        <h2>Part 2</h2>
        <p>{CalculateAnswerPartTwo()}</p>
      </main>

      <Footer />
    </Container>
  );
}
