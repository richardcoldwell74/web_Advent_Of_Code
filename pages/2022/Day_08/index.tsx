import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../../api/2022/day_08/input";
import { testInput } from "../../../api/2022/day_08/testInput";
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

type Tree = { height: number; visible: boolean; scenicScore: number };

const dayEightA = (inputArray: string[]): number => {
  let treeGrid = new Array(inputArray.length);

  for (let i = 0; i < treeGrid.length; i++) {
    treeGrid[i] = new Array(inputArray[0].length);
  }

  inputArray.forEach((line, x) => {
    for (let y = 0; y < line.length; y++) {
      if (
        x === 0 ||
        y === 0 ||
        x === inputArray.length - 1 ||
        y === line.length - 1
      ) {
        treeGrid[x][y] = {
          height: +line[y],
          visible: true,
          scenicScore: 0,
        } as Tree;
      } else {
        treeGrid[x][y] = {
          height: +line[y],
          visible: false,
          scenicScore: 0,
        } as Tree;
      }
    }
  });

  console.log("test", treeGrid);

  for (let x = 1; x < treeGrid.length - 1; x++) {
    for (let y = 1; y < treeGrid[0].length - 1; y++) {
      // console.log(
      //   "Tree",
      //   " x=",
      //   x,
      //   " y=",
      //   y,
      //   "height",
      //   treeGrid[x][y].height,
      //   treeGrid[x][y].visible
      // );
      let leftCheck = true;
      let rightCheck = true;
      let upCheck = true;
      let downCheck = true;
      //check Up
      for (let up = x - 1; up > -1; up--) {
        if (treeGrid[up][y].height >= treeGrid[x][y].height) {
          upCheck = false;

          // console.log(
          //   "Tree up check",
          //   "up=",
          //   up,
          //   " y=",
          //   y,
          //   "height",
          //   treeGrid[up][y].height,
          //   treeGrid[up][y].visible
          // );
        }
      }
      //check down
      for (let down = x + 1; down < treeGrid.length; down++) {
        if (treeGrid[down][y].height >= treeGrid[x][y].height) {
          downCheck = false;
        }
        // console.log(
        //   "Tree down check",
        //   " down=",
        //   down,
        //   " x=",
        //   x,
        //   "height",
        //   treeGrid[down][y].height,
        //   treeGrid[down][y].visible
        // );
      }

      //check left
      for (let left = y - 1; left > -1; left--) {
        if (treeGrid[x][left].height >= treeGrid[x][y].height) {
          leftCheck = false;
        }
        // console.log(
        //   "Tree left  check",
        //   " x=",
        //   x,
        //   " left=",
        //   left,
        //   "height",
        //   treeGrid[x][left].height,
        //   treeGrid[x][left].visible
        // );
      }
      // check right
      for (let right = y + 1; right < treeGrid[0].length; right++) {
        if (treeGrid[x][right].height >= treeGrid[x][y].height) {
          rightCheck = false;
        }
        // console.log(
        //   "Tree right check",
        //   " x=",
        //   x,
        //   " right=",
        //   right,
        //   "height",
        //   treeGrid[x][right].height,
        //   treeGrid[x][right].visible
        // );
      }

      if (upCheck || downCheck || leftCheck || rightCheck) {
        treeGrid[x][y].visible = true;
      }
    }
  }

  let total = 0;
  for (let x = 0; x < treeGrid.length; x++) {
    for (let y = 0; y < treeGrid[0].length; y++) {
      if (treeGrid[x][y].visible === true) {
        total++;
      }
    }
  }

  return total;
};

const dayEightB = (inputArray: string[]): number => {
  let treeGridB = new Array(inputArray.length);

  for (let i = 0; i < treeGridB.length; i++) {
    treeGridB[i] = new Array(inputArray[0].length);
  }

  inputArray.forEach((line, x) => {
    for (let y = 0; y < line.length; y++) {
      if (
        x === 0 ||
        y === 0 ||
        x === inputArray.length - 1 ||
        y === line.length - 1
      ) {
        treeGridB[x][y] = { height: +line[y], visible: true } as Tree;
      } else {
        treeGridB[x][y] = { height: +line[y], visible: false } as Tree;
      }
    }
  });

  console.log("test", treeGridB);

  for (let x = 0; x < treeGridB.length; x++) {
    for (let y = 0; y < treeGridB[0].length; y++) {
      // console.log(
      //   "Tree",
      //   " x=",
      //   x,
      //   " y=",
      //   y,
      //   "height",
      //   treeGridB[x][y].height,
      //   treeGridB[x][y].visible
      // );
      let leftCheck = true;
      let rightCheck = true;
      let upCheck = true;
      let downCheck = true;
      let leftCount = 0;
      let rightCount = 0;
      let upCount = 0;
      let downCount = 0;
      //check Up
      for (let up = x - 1; up > -1; up--) {
        if (upCheck) {
          upCount += 1;
        }
        if (treeGridB[up][y].height >= treeGridB[x][y].height) {
          upCheck = false;

          // console.log(
          //   "Tree up check",
          //   "up=",
          //   up,
          //   " y=",
          //   y,
          //   "height",
          //   treeGridB[up][y].height,
          //   treeGridB[up][y].visible
          // );
        }
      }
      //check down 4
      for (let down = x + 1; down < treeGridB.length; down++) {
        if (downCheck) {
          downCount += 1;
        }
        if (treeGridB[down][y].height >= treeGridB[x][y].height) {
          downCheck = false;
        }
        // console.log(
        //   "Tree down check",
        //   " down=",
        //   down,
        //   " x=",
        //   x,
        //   "height",
        //   treeGridB[down][y].height,
        //   treeGridB[down][y].visible
        // );
      }

      //check left
      for (let left = y - 1; left > -1; left--) {
        if (leftCheck) {
          leftCount += 1;
        }
        if (treeGridB[x][left].height >= treeGridB[x][y].height) {
          leftCheck = false;
        }
        // console.log(
        //   "Tree left  check",
        //   " x=",
        //   x,
        //   " left=",
        //   left,
        //   "height",
        //   treeGridB[x][left].height,
        //   treeGridB[x][left].visible
        // );
      }
      // check right
      for (let right = y + 1; right < treeGridB[0].length; right++) {
        if (rightCheck) {
          rightCount += 1;
        }
        if (treeGridB[x][right].height >= treeGridB[x][y].height) {
          rightCheck = false;
        }
        // console.log(
        //   "Tree right check",
        //   " x=",
        //   x,
        //   " right=",
        //   right,
        //   "height",
        //   treeGrid[x][right].height,
        //   treeGrid[x][right].visible
        // );
      }

      treeGridB[x][y].scenicScore =
        upCount * downCount * leftCount * rightCount;
    }
  }

  let score = 0;
  for (let x = 0; x < treeGridB.length; x++) {
    for (let y = 0; y < treeGridB[0].length; y++) {
      if (score < treeGridB[x][y].scenicScore) {
        score = treeGridB[x][y].scenicScore;
      }
    }
  }
  console.log("Score", score);
  return score;
};

const getInput = (): string[] => input.split("\n").map(String);

export default function Day08() {
  return (
    <Container>
      <Head>
        <title>AOC 2022 - Day 08</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 8</h1>
        <h2>Part 1</h2>
        <p>{dayEightA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{dayEightB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
