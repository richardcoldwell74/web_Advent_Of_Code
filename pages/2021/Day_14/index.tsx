import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "@api/2021/day_14/Input";
import { testInput } from "@api/2021/day_14/testInput";
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

interface Rule {
  rule: string;
  element: string;
}

interface Values {
  character: string;
  total: number;
}

//PART 1

const CalculateAnswerPartOne = () => {
  let rules: Rule[] = getInput();
  let polymerTemplate: string = "KBKPHKHHNBCVCHPSPNHF";

  for (let count = 0; count < 40; count++) {
    let pairsToLookUp: string[] = [];
    for (let index = 0; index < polymerTemplate.length - 1; index++) {
      pairsToLookUp.push(polymerTemplate.substr(index, 2));
    }
    pairsToLookUp.forEach((value, index) => {
      rules.forEach((line) => {
        if (line.rule === value) {
          pairsToLookUp[index] = line.element;
        }
      });
    });
    let counter: number = 1;
    for (let index = 0; index < pairsToLookUp.length; index++) {
      polymerTemplate =
        polymerTemplate.substring(0, counter) +
        pairsToLookUp[index] +
        polymerTemplate.substring(counter);
      counter = counter + 2;
    }
  }

  let result = [...polymerTemplate].reduce((a, e) => {
    a[e] = a[e] ? a[e] + 1 : 1;
    return a;
  }, {});
  console.log(result);
  let valueArray =Object.entries(result)
 
  return "Still To Do!";
};

const CalculateAnswerPartTwo = () => {
  let Day12Part2Input = getInput();
  return "Still To Do!";
};

const getInput = () =>
  input.split("\n").map((line) => {
    var item = line.split(" -> ");
    return { rule: item[0], element: item[1] };
  });

export default function Day14() {
  return (
    <Container>
      <Head>
        <title>AOC 2021 - Day 14</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 14</h1>
        <h2>Part 1</h2>
        <p>{CalculateAnswerPartOne()}</p>
        <h2>Part 2</h2>
        <p>{CalculateAnswerPartTwo()}</p>
      </main>

      <Footer />
    </Container>
  );
}
