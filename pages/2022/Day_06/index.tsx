import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../../api/2022/day_06/input";
import { testInput } from "../../../api/2022/day_06/testInput";
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

const dataCreation = (inputArray: string[]): string => {
  return "";
};

function containsDuplicates(array: string[]) {
  if (array.length !== new Set(array).size) {
    return true;
  }

  return false;
}

const daySixA = (inputString: string): number => {
  let position = 0;
  let lastFourDigitsArray: string[] = [];
  for (let index = 0; index < inputString.length; index++) {
    lastFourDigitsArray.push(inputString[index]);
    position++;
    if (lastFourDigitsArray.length === 5) {
      lastFourDigitsArray = lastFourDigitsArray.slice(1);
    }
    if (lastFourDigitsArray.length === 4) {
      if (!containsDuplicates(lastFourDigitsArray)) {
        break;
      }
    }
  }

  return position;
};

const daySixB = (inputString: string): number => {
  let position = 0;
  let lastFourDigitsArray: string[] = [];
  for (let index = 0; index < inputString.length; index++) {
    lastFourDigitsArray.push(inputString[index]);
    position++;
    if (lastFourDigitsArray.length === 15) {
      lastFourDigitsArray = lastFourDigitsArray.slice(1);
    }
    if (lastFourDigitsArray.length === 14) {
      if (!containsDuplicates(lastFourDigitsArray)) {
        break;
      }
    }
  }

  return position;
};

const getInput = (): string[] => testInput.split("\n").map(String);

export default function Day01() {
  return (
    <Container>
      <Head>
        <title>AOC 2022 - Day 06</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 6</h1>
        <h2>Part 1</h2>
        <p>{daySixA(testInput)}</p>
        <h2>Part 2</h2>
        <p>{daySixB(testInput)}</p>
      </main>

      <Footer />
    </Container>
  );
}
