import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "@api/2021/day_06/input";
import { testInput } from "@api/2021/day_06/testInput";
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
  let LanternFishData = getInput();
  let newFishCount: number;
  for (let dayNumber = 1; dayNumber <= 80; dayNumber++) {
    let newFishCount = 0;
    LanternFishData = LanternFishData.map((fish) => {
      if (fish === 0) {
        newFishCount++;
        return 6;
      } else {
        fish--;
        return fish;
      }
    });
    for (let index = 0; index < newFishCount; index++) {
      LanternFishData.push(8);
    }
  }

  const answer = LanternFishData.length;
  return answer;
};

const CalculateAnswerPartTwo = () => {
  let LanternFishData = getInput();
  let newFishCount: number;
  let LanternFishGroupArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  LanternFishData.forEach((fish) => {
    LanternFishGroupArray[fish]++;
  });
  for (let dayNumber = 1; dayNumber <= 256; dayNumber++) {
    newFishCount = LanternFishGroupArray.shift();
    LanternFishGroupArray[6]+=newFishCount;
    LanternFishGroupArray.push(newFishCount);
  }
  const answer = LanternFishGroupArray.reduce(
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
