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

type Tree = { height: number; visible: boolean };

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
        treeGrid[x][y] = { height: +line[y], visible: true } as Tree;
      } else {
        treeGrid[x][y] = { height: +line[y], visible: false } as Tree;
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

      //check Up
      for (let up = x - 1; up > -1; up--) {
        if (treeGrid[up][y].height >= treeGrid[x][y].height) {
          treeGrid[x][y].visible = true;
        }
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
      //check down
      for (let down = y + 1; down < treeGrid.length; down++) {
        if (treeGrid[down][y].height >= treeGrid[x][y].height) {
          treeGrid[x][y].visible = true;
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
        if (treeGrid[x][left].height > treeGrid[x][y].height) {
          treeGrid[x][y].visible = true;
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
        if (treeGrid[x][right].height > treeGrid[x][y].height) {
          treeGrid[x][y].visible = true;
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
    }
  }

  let total = 0;

  return total;
};

const dayEightB = (inputArray: string[]): number => {
  let total = 0;

  return total;
};

const getInput = (): string[] => testInput.split("\n").map(String);

export default function Day07() {
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
