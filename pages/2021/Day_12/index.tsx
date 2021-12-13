import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "@api/2021/day_12/Input";
import { testInput } from "@api/2021/day_12/testInput";
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

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

interface Node {
  name: string;
  neighbours: string[];
}

const InputAsArrayOfNodes = (): Node[] => {
  let Day12Part1Input: string[][] = getInput();
  let allValues: string[] = [];
  Day12Part1Input.forEach((a) => {
    a.forEach((b) => {
      allValues.push(b);
    });
  });
  let uniqueValues = allValues.filter(onlyUnique);
  let nodes: Node[] = [];
  uniqueValues.forEach((type, indexOfType) => {
    nodes.push({ name: type, neighbours: [] });
    Day12Part1Input.forEach((inputPairs) => {
      if (inputPairs[0] == type) {
        nodes[indexOfType].neighbours.push(inputPairs[1]);
      } else if (inputPairs[1] == type) {
        nodes[indexOfType].neighbours.push(inputPairs[0]);
      }
    });
  });
  return nodes;
};

//PART 1

const CalculateAnswerPartOne = () => {
  let nodes: Node[] = InputAsArrayOfNodes();
  console.log(nodes);
  return "Still To Do!";
};

const CalculateAnswerPartTwo = () => {
  let Day12Part2Input = getInput();
  return "Still To Do!";
};

const getInput = () => testInput.split("\n").map((line) => line.split("-"));

export default function Day12() {
  return (
    <Container>
      <Head>
        <title>AOC 2021 - Day 12</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 12</h1>
        <h2>Part 1</h2>
        <p>{CalculateAnswerPartOne()}</p>
        <h2>Part 2</h2>
        <p>{CalculateAnswerPartTwo()}</p>
      </main>

      <Footer />
    </Container>
  );
}
