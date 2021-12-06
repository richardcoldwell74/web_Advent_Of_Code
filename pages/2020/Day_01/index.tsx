import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "@api/2021/day_01/input";
import { testInput } from "@api/2021/day_01/testInput";
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
  let answer = 0;
  return answer;
};

const PartTwo = () => {
  let answer = 0;
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
