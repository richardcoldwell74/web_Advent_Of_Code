import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "@api/2021/day_05/input";
import { testInput } from "@api/2021/day_05/testInput";
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

const CalculateAnswerPart = (justStraights: boolean) => {
  //Get Input
  let input = getInput();
  //tidy up input
  input.forEach((array) => array.splice(0, 1));

  let grid: number[][] = [];

  for (let y = 0; y <= 1000; y++) {
    let row = [];

    for (let x = 0; x <= 1000; x++) {
      row.push(0);
    }

    grid.push(row);
  }

  input.forEach((line) => {
    let startX;
    let startY;
    let endX;
    let endY;

    let isStraight = line[1] === line[3] || line[0] === line[2];
    if (isStraight) {
      if (line[0] > line[2]) {
        startX = line[2];
        endX = line[0];
      } else {
        startX = line[0];
        endX = line[2];
      }
      //y1 > y2
      if (line[1] > line[3]) {
        startY = line[3];
        endY = line[1];
      } else {
        startY = line[1];
        endY = line[3];
      }
      for (let x = startX; x <= endX; x++) {
        for (let y = startY; y <= endY; y++) {
          if (grid[y][x]) {
            grid[y][x] += 1;
          } else {
            grid[y][x] = 1;
          }
        }
      }
      // }
    } else {
      if (!justStraights) {
        let xLength = Math.abs(line[0] - line[2]);

        for (let i = 0; i <= xLength; i++) {
          let x, y;

          if (line[0] > line[2]) {
            x = line[0] - i;
          } else {
            x = line[0] + i;
          }

          if (line[1] > line[3]) {
            y = line[1] - i;
          } else {
            y = line[1] + i;
          }

          if (grid[y][x]) {
            grid[y][x] += 1;
          } else {
            grid[y][x] = 1;
          }
        }
      }
    }
  });

  let count = 0;
  grid.forEach((row) => {
    row.forEach((value) => {
      if (value >= 2) {
        count += 1;
      }
    });
  });

  const answer = count;
  return answer;
};

const regex = /(\d+),(\d+) \-\> (\d+),(\d+)/;

const getInput = () =>
  input.split("\n").map((row) => row.match(regex).map((x) => parseInt(x)));

export default function Day05() {
  return (
    <Container>
      <Head>
        <title>AOC 2021 - Day 05</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 5</h1>
        <h2>Part 1</h2>
        <p>{CalculateAnswerPart(true)}</p>
        <h2>Part 2</h2>
        <p>{CalculateAnswerPart(false)}</p>
      </main>

      <Footer />
    </Container>
  );
}
