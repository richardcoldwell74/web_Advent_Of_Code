import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "@api/2021/day_13/Input";
import { inputFold } from "@api/2021/day_13/InputFold";
import { testInput } from "@api/2021/day_13/testInput";
import { testInputFold } from "@api/2021/day_13/testInputFold";
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

interface FoldLine {
  axis: string;
  foldLineNo: number;
}

interface CoOrds {
  x: number;
  y: number;
}

const FoldY = (dotCoOrdinates: CoOrds[], foldLine: number) => {
  dotCoOrdinates.map((line, index) => {
    if (line.y > foldLine) {
      line.y = foldLine - (line.y - foldLine);
    }
  });

  dotCoOrdinates = dotCoOrdinates.filter(
    (object, index) =>
      index ===
      dotCoOrdinates.findIndex(
        (obj) => JSON.stringify(obj) === JSON.stringify(object)
      )
  );
  return dotCoOrdinates;
};

const FoldX = (dotCoOrdinates: CoOrds[], foldLine: number) => {
  dotCoOrdinates.map((line, index) => {
    if (line.x > foldLine) {
      line.x = foldLine - (line.x - foldLine);
    }
  });

  dotCoOrdinates = dotCoOrdinates.filter(
    (object, index) =>
      index ===
      dotCoOrdinates.findIndex(
        (obj) => JSON.stringify(obj) === JSON.stringify(object)
      )
  );
  return dotCoOrdinates;
};

//PART 1

let foldLines: FoldLine[] = [];

const CalculateAnswerPartOne = () => {
  let dotCoOrdinates: CoOrds[] = [];
  dotCoOrdinates = getInput();
  foldLines = getFoldInput();

  // if (foldLines[0].axis === "x") {
  //   dotCoOrdinates = FoldX(dotCoOrdinates, foldLines[0].foldLineNo);
  // }
  // if (foldLines[0].axis === "y") {
  //   dotCoOrdinates = FoldX(dotCoOrdinates, foldLines[0].foldLineNo);
  // }

  return dotCoOrdinates.length;
  return "STILL TO DO !";
};

// Part 2

const CalculateAnswerPartTwo = () => {
  let dotCoOrdinatesPart2: CoOrds[] = [];
  dotCoOrdinatesPart2 = getInput();
  console.log(foldLines);

  foldLines.forEach((fold) => {
    if (fold.axis === "x") {
      dotCoOrdinatesPart2 = FoldX(dotCoOrdinatesPart2, fold.foldLineNo);
    }
    if (fold.axis === "y") {
      dotCoOrdinatesPart2 = FoldX(dotCoOrdinatesPart2, fold.foldLineNo);
    }
  });
  console.log(dotCoOrdinatesPart2);
  return 0;
};

const getInput = () =>
  input.split("\n").map((line) => {
    var item = line.split(",");
    return { x: parseInt(item[0]), y: parseInt(item[1]) };
  });

const getFoldInput = () =>
  inputFold
    .split("\n")
    .map((line) => line.split("fold along ")[1])
    .map((values) => {
      var item = values.split("=");
      return { axis: item[0], foldLineNo: parseInt(item[1]) };
    });

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
