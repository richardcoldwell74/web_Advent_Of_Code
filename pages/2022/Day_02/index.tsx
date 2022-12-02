import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../../api/2022/day_02/input";
import { testInput } from "../../../api/2022/day_02/testInput";
import styled from "styled-components";

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

type StrategyGuide = { opponent: string; response: string };

const dayTwoA = (inputArray: string[]): number => {
  let total = 0;
  let FullStrategyGuide: StrategyGuide[] = [];
  inputArray.forEach((line) => {
    FullStrategyGuide.push({ opponent: line[0], response: line[2] });
  });
  FullStrategyGuide.forEach((line) => {
    let lineTotal = 0;
    if (line.response === "X") {
      lineTotal += 1;
    } else if (line.response === "Y") {
      lineTotal += 2;
    } else if (line.response === "Z") {
      lineTotal += 3;
    }
    // Check for a draw
    if (
      (line.opponent === "A" && line.response === "X") ||
      (line.opponent === "B" && line.response === "Y") ||
      (line.opponent === "C" && line.response === "Z")
    ) {
      lineTotal += 3;
    }
    // Check For a Win
    else if (
      (line.opponent === "A" && line.response === "Y") ||
      (line.opponent === "B" && line.response === "Z") ||
      (line.opponent === "C" && line.response === "X")
    ) {
      lineTotal += 6;
    }

    total += lineTotal;
  });

  return total;
};

const dayTwoB = (inputArray: string[]): number => {
  let total = 0;
  let FullStrategyGuide: StrategyGuide[] = [];
  inputArray.forEach((line) => {
    FullStrategyGuide.push({ opponent: line[0], response: line[2] });
  });

  // X  Lose, Y Draw, Z Win
  FullStrategyGuide.forEach((line) => {
    let lineTotal = 0;
    if (line.response === "X") {
      if (line.opponent === "A") {
        lineTotal += 3;
      } else if (line.opponent === "B") {
        lineTotal += 1;
      } else if (line.opponent === "C") {
        lineTotal += 2;
      }
    } else if (line.response === "Y") {
      lineTotal += 3;
      if (line.opponent === "A") {
        lineTotal += 1;
      } else if (line.opponent === "B") {
        lineTotal += 2;
      } else if (line.opponent === "C") {
        lineTotal += 3;
      }
    } else if (line.response === "Z") {
      lineTotal += 6;
      if (line.opponent === "A") {
        lineTotal += 2;
      } else if (line.opponent === "B") {
        lineTotal += 3;
      } else if (line.opponent === "C") {
        lineTotal += 1;
      }
    }
    total += lineTotal;
  });
  return total;
};

const getInput = (): string[] => input.split("\n").map(String);

export default function Day01() {
  return (
    <Container>
      <Head>
        <title>AOC 2022 - Day 02</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 2</h1>
        <h2>Part 1</h2>
        <p>{dayTwoA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{dayTwoB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
