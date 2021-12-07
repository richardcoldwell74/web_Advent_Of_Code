import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "@api/2020/day_01/input";
import { testInput } from "@api/2020/day_01/testInput";
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

const PartOne = () => {
  let input = getInput();
  let input2 = [...input];
  console.log(input);
  let answer = 0;

  input.forEach(num1 => {
    input2.forEach(num2 => {
      if (num1 + num2 === 2020) {
        answer = num1 * num2;
      }
    });
  });
  return answer;
};

const PartTwo = () => {
  let input = getInput();
  let input2 = [...input];
  let input3 = [...input];
  let answer = 0;
  input.forEach((num1) => {
    input2.forEach((num2) => {
      input3.forEach((num3) => {
        if (num1 + num2 + num3 === 2020) {
          answer = num1 * num2 * num3;
        }
      });
    });
  });

  return answer;
};

const getInput = (): number[] => input.split("\n").map(Number);

export default function Day01() {
  return (
    <Container>
      <Head>
        <title>AOC 2020 - Day 01</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 1</h1>
        <h2>Part 1</h2>
        <p>{PartOne()}</p>
        <h2>Part 2</h2>
        <p>{PartTwo()}</p>
      </main>

      <Footer />
    </Container>
  );
}
