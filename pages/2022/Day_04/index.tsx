import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../../api/2022/day_04/input";
import { testInput } from "../../../api/2022/day_04/testInput";
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

type elfSectionPairsStartAndEndOnly = {
  elfOnesSectionStart: number;
  elfOnesSectionEnd: number;
  elfTwosSectionStart: number;
  elfTwosSectionEnd: number;
};
type elfSectionPairs = { elfOnesSections: number[]; elfTwosSections: number[] };

const dataCreation = (inputArray: string[]): elfSectionPairs[] => {
  let startAndEnds: elfSectionPairsStartAndEndOnly[] = [];
  inputArray.forEach((sectionPair) => {
    const splitValues = sectionPair.split("-").join(",").split(",");
    startAndEnds.push({
      elfOnesSectionStart: +splitValues[0],
      elfOnesSectionEnd: +splitValues[1],
      elfTwosSectionStart: +splitValues[2],
      elfTwosSectionEnd: +splitValues[3],
    });
  });
  let elfSectionPairs: elfSectionPairs[] = [];
  startAndEnds.forEach((sectionPair) => {
    let elfOnesSections: number[] = [];
    let elfTwosSections: number[] = [];
    for (
      let i = sectionPair.elfOnesSectionStart;
      i <= sectionPair.elfOnesSectionEnd;
      i++
    ) {
      elfOnesSections.push(i);
    }

    for (
      let i = sectionPair.elfTwosSectionStart;
      i <= sectionPair.elfTwosSectionEnd;
      i++
    ) {
      elfTwosSections.push(i);
    }
    elfSectionPairs.push({ elfOnesSections, elfTwosSections });
  });
  return elfSectionPairs;
};

const dayOneA = (inputArray: string[]): number => {
  let formattedInput = dataCreation(inputArray);
  let total = 0;
  formattedInput.forEach((item, index) => {
    let one = item.elfOnesSections.filter(
      (val) => !item.elfTwosSections.includes(val)
    );
    let two = item.elfTwosSections.filter(
      (val) => !item.elfOnesSections.includes(val)
    );
    if (one.length === 0 || two.length === 0) {
      total += 1;
    }
  });

  return total;
};

const dayOneB = (inputArray: string[]): number => {
  let formattedInput = dataCreation(inputArray);
  let total = 0;
  formattedInput.forEach((item, index) => {
    const contains = item.elfOnesSections.some((element) => {
      return item.elfTwosSections.includes(element);
    });
    if (contains) {
      total += 1;
    }
  });

  return total;
};

const getInput = (): string[] => input.split("\n").map(String);

export default function Day01() {
  return (
    <Container>
      <Head>
        <title>AOC 2022 - Day 04</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 4</h1>
        <h2>Part 1</h2>
        <p>{dayOneA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{dayOneB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
