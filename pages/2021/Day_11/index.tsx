import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "@api/2021/day_11/Input";
import { testInput } from "@api/2021/day_11/testInput";
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

const findingNeighbors = (myArray, i, j): OctopusNeighbour[] => {
  var returnArray: OctopusNeighbour[] = [];
  var rowLimit = myArray.length - 1;
  var columnLimit = myArray[0].length - 1;

  for (var x = Math.max(0, i - 1); x <= Math.min(i + 1, rowLimit); x++) {
    for (var y = Math.max(0, j - 1); y <= Math.min(j + 1, columnLimit); y++) {
      if (x !== i || y !== j) {
        returnArray.push({ x: x, y: y });
      }
    }
  }
  return returnArray;
};

interface Octopus {
  x: number;
  y: number;
  energy: number;
  hasFlashed: boolean;
  neighbours: OctopusNeighbour[];
}

interface OctopusNeighbour {
  x: number;
  y: number;
}

//PART 1
let flashCount: number = 0;
let keepDoing: boolean = true;
let NotAllZeroes: boolean = true;
let OctopusGrid: Octopus[][] = [];

const CalculateAnswerPartOne = () => {
  let Day11Part1Input = getInput();

  // create all the starting Octopus
  OctopusGrid = Day11Part1Input.map((y, indexY) =>
    y.map((x, indexX) => {
      return {
        x: indexX,
        y: indexY,
        energy: parseInt(x),
        neighbours: findingNeighbors(Day11Part1Input, indexX, indexY),
        hasFlashed: false,
      };
    })
  );

  flashCount = 0;
  for (let step = 0; step < 100; step++) {
    Add1ToAllOctopus();

    keepDoing = true;
    do {
      FlashAllOctopusOver9();
    } while (keepDoing);
    ResetAlFlashedToZero();
  }

  return flashCount;
};

const ResetAlFlashedToZero = () => {
  for (let y = 0; y < OctopusGrid.length; y++) {
    for (let x = 0; x < OctopusGrid[y].length; x++) {
      if (OctopusGrid[y][x].hasFlashed) {
        OctopusGrid[y][x].energy = 0;
      }
    }
  }
};

const Add1ToAllOctopus = () => {
  for (let y = 0; y < OctopusGrid.length; y++) {
    for (let x = 0; x < OctopusGrid[y].length; x++) {
      OctopusGrid[y][x].energy += 1;
      OctopusGrid[y][x].hasFlashed = false;
    }
  }
};

const FlashAllOctopusOver9 = () => {
  let count: number = 0;
  for (let y = 0; y < OctopusGrid.length; y++) {
    for (let x = 0; x < OctopusGrid[y].length; x++) {
      if (OctopusGrid[y][x].energy > 9 && !OctopusGrid[y][x].hasFlashed) {
        count += 1;
        flashCount += 1;
        OctopusGrid[y][x].hasFlashed = true;
        OctopusGrid[y][x].neighbours.forEach((neighbour) => {
          OctopusGrid[neighbour.y][neighbour.x].energy += 1;
        });
      }
    }
  }

  if (count === 0) {
    keepDoing = false;
  }
};

const CalculateAnswerPartTwo = () => {
  let Day11Part1Input = getInput();

  // create all the starting Octopus
  OctopusGrid = Day11Part1Input.map((y, indexY) =>
    y.map((x, indexX) => {
      return {
        x: indexX,
        y: indexY,
        energy: parseInt(x),
        neighbours: findingNeighbors(Day11Part1Input, indexX, indexY),
        hasFlashed: false,
      };
    })
  );

  let stepCount: number = 0;
  do {
    stepCount += 1;
    Add1ToAllOctopus();

    keepDoing = true;
    do {
      FlashAllOctopusOver9();
    } while (keepDoing);
    ResetAlFlashedToZero();
    NotAllZeroes = CheckIfAllZeroes();
  } while (NotAllZeroes);

  return stepCount;
};

const CheckIfAllZeroes = () => {
  let allZeroes: boolean = false;
  for (let y = 0; y < OctopusGrid.length; y++) {
    for (let x = 0; x < OctopusGrid[y].length; x++) {
      if (OctopusGrid[y][x].energy != 0) {
        allZeroes = true;
      }
    }
  }
  return allZeroes;
};

const getInput = () => input.split("\n").map((line) => line.split(""));

export default function Day11() {
  return (
    <Container>
      <Head>
        <title>AOC 2021 - Day 11</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 11</h1>
        <h2>Part 1</h2>
        <p>{CalculateAnswerPartOne()}</p>
        <h2>Part 2</h2>
        <p>{CalculateAnswerPartTwo()}</p>
      </main>

      <Footer />
    </Container>
  );
}
