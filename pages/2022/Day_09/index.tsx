import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../../api/2022/day_09/input";
import { testInput } from "../../../api/2022/day_09/testInput";
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
  background-image: url("/winter_background.png");
`;

type Motion = { direction: string; steps: number };
type Position = { x: number; y: number };

const dayNineA = (inputArray: string[]): number => {
  let tailVisited: Position[] = [];
  let H = [0, 0];
  let T = [0, 0];
  const motions: Motion[] = [];
  inputArray.forEach((line) => {
    motions.push({ direction: line.split(" ")[0], steps: +line.split(" ")[1] });
  });

  motions.forEach((motion) => {
    for (let index = 0; index < motion.steps; index++) {
      let dx = 0;
      let dy = 0;
      if (motion.direction === "R") {
        dx = 1;
      } else if (motion.direction === "L") {
        dx = -1;
      } else if (motion.direction === "U") {
        dy = 1;
      } else if (motion.direction === "D") {
        dy = -1;
      }
      H[0] += dx;
      H[1] += dy;

      const x = H[0] - T[0];
      const y = H[1] - T[1];

      if (Math.abs(x) > 1 || Math.abs(y) > 1) {
        if (x === 0) {
          T[1] += Math.sign(y);
        } else if (y === 0) {
          T[0] += Math.sign(x);
        } else {
          T[0] += Math.sign(x);
          T[1] += Math.sign(y);
        }
      }
      tailVisited.push({ x: T[0], y: T[1] });
    }
  });
  tailVisited = tailVisited.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.x === value.x && t.y === value.y)
  );

  return tailVisited.length;
};

const dayNineB = (inputArray: string[]): number => {
  let directions = new Array(inputArray.length);

  let total = 0;

  return total;
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
        <p>{dayNineA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{dayNineB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
