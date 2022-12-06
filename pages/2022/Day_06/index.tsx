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

const daySixA = (inputArray: string[]): string => {
  let ret = "TO DO";

  return ret;
};

const daySixB = (inputArray: string[]): string => {
  let ret = "TO DO";

  return ret;
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
        <p>{daySixA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{daySixB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
