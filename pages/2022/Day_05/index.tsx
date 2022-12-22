import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../../api/2022/day_05/input";
import { testInput } from "../../../api/2022/day_05/testInput";
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

type Instruction = { iterations: number; from: number; to: number };

const testCratesArray = (): string[][] => {
  let testCrates: string[][] = [];
  let test1: string[] = [];
  test1.push("Z");
  test1.push("N");
  testCrates.push(test1);
  let test2: string[] = [];
  test2.push("M");
  test2.push("C");
  test2.push("D");
  testCrates.push(test2);
  let test3: string[] = [];
  test3.push("P");
  testCrates.push(test3);
  return testCrates;
};

const cratesArray = (): string[][] => {
  let testCrates: string[][] = [];
  let test1: string[] = [];
  test1.push("L");
  test1.push("N");
  test1.push("W");
  test1.push("T");
  test1.push("D");
  testCrates.push(test1);
  let test2: string[] = [];
  test2.push("C");
  test2.push("P");
  test2.push("H");
  testCrates.push(test2);
  let test3: string[] = [];
  test3.push("W");
  test3.push("P");
  test3.push("H");
  test3.push("N");
  test3.push("D");
  test3.push("G");
  test3.push("M");
  test3.push("J");
  testCrates.push(test3);
  let test4: string[] = [];
  test4.push("C");
  test4.push("W");
  test4.push("S");
  test4.push("N");
  test4.push("T");
  test4.push("Q");
  test4.push("L");
  testCrates.push(test4);
  let test5: string[] = [];
  test5.push("P");
  test5.push("H");
  test5.push("C");
  test5.push("N");
  testCrates.push(test5);
  let test6: string[] = [];
  test6.push("T");
  test6.push("H");
  test6.push("N");
  test6.push("D");
  test6.push("M");
  test6.push("W");
  test6.push("Q");
  test6.push("B");
  testCrates.push(test6);
  let test7: string[] = [];
  test7.push("M");
  test7.push("B");
  test7.push("R");
  test7.push("J");
  test7.push("G");
  test7.push("S");
  test7.push("L");
  testCrates.push(test7);
  let test8: string[] = [];
  test8.push("Z");
  test8.push("N");
  test8.push("W");
  test8.push("G");
  test8.push("V");
  test8.push("B");
  test8.push("R");
  test8.push("T");
  testCrates.push(test8);
  let test9: string[] = [];
  test9.push("W");
  test9.push("G");
  test9.push("D");
  test9.push("N");
  test9.push("P");
  test9.push("L");
  testCrates.push(test9);
  return testCrates;
};

const dataCreation = (inputArray: string[]): Instruction[] => {
  let formattedInstructions: Instruction[] = [];
  inputArray.forEach((instruction) => {
    const numbersOnlyString = instruction.match(/\d+/g);

    formattedInstructions.push({
      iterations: +numbersOnlyString[0],
      from: +numbersOnlyString[1],
      to: +numbersOnlyString[2],
    });
  });
  return formattedInstructions;
};

const dayFiveA = (inputArray: string[]): string => {
  const instructions = dataCreation(inputArray);
  let crates = cratesArray();
  instructions.forEach((instruction) => {
    for (let index = 0; index < instruction.iterations; index++) {
      crates[instruction.to - 1].push(
        crates[instruction.from - 1][crates[instruction.from - 1].length - 1]
      );
      crates[instruction.from - 1].pop();
    }
  });

  let topCrates = "";
  crates.forEach((crate) => {
    topCrates += crate[crate.length - 1];
  });
  return topCrates;
};

const dayFiveB = (inputArray: string[]): string => {
  const instructions = dataCreation(inputArray);
  let crates = cratesArray();
  instructions.forEach((instruction) => {
    const test = crates[instruction.from - 1].slice(-instruction.iterations);
    console.log("test", test);
    test.forEach((element) => {
      crates[instruction.to - 1].push(element);
    });
    for (let index = 0; index < instruction.iterations; index++) {
      crates[instruction.from - 1].pop();
    }
  });

  console.log("crates", crates);
  let topCrates = "";
  crates.forEach((crate) => {
    topCrates += crate[crate.length - 1];
  });
  return topCrates;
};

const getInput = (): string[] => input.split("\n").map(String);

export default function Day01() {
  return (
    <Container>
      <Head>
        <title>AOC 2022 - Day 05</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 5</h1>
        <h2>Part 1</h2>
        <p>{dayFiveA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{dayFiveB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
