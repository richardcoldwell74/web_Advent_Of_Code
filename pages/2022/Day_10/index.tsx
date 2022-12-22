import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../../api/2022/day_10/input";
import { testInput } from "../../../api/2022/day_10/testInput";
import styled from "styled-components";
import { useState } from "react";
import { sign } from "crypto";

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

type Cycle = { cycleNumber: number; x: number };

const dayTenA = (inputArray: string[]): number => {
  console.log("inputArray", inputArray);
  const cycles: Cycle[] = [];
  let noOfCycles = 0;
  let x = 1;
  inputArray.forEach((line) => {
    if (line.includes("noop")) {
      noOfCycles += 1;
      cycles.push({ cycleNumber: noOfCycles, x: x });
    } else {
      noOfCycles += 1;
      cycles.push({ cycleNumber: noOfCycles, x: x });
      noOfCycles += 1;
      x += +line.split(" ")[1];
      cycles.push({ cycleNumber: noOfCycles, x: x });
    }
  });
  let totalSignalStrengths = 0;
  totalSignalStrengths += cycles[19].cycleNumber * cycles[18].x;
  totalSignalStrengths += cycles[59].cycleNumber * cycles[58].x;
  totalSignalStrengths += cycles[99].cycleNumber * cycles[98].x;
  totalSignalStrengths += cycles[139].cycleNumber * cycles[138].x;
  totalSignalStrengths += cycles[179].cycleNumber * cycles[178].x;
  totalSignalStrengths += cycles[219].cycleNumber * cycles[218].x;
  console.log("cycles", cycles);
  return totalSignalStrengths;
};

const dayTenB = (inputArray: string[]): number => {
  return 0;
};

const getInput = (): string[] => input.split("\n").map(String);

export default function Day09() {
  return (
    <Container>
      <Head>
        <title>AOC 2022 - Day 09</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 9</h1>
        <h2>Part 1</h2>
        <p>{dayTenA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{dayTenB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
