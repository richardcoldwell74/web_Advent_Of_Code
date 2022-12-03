import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../../api/2022/day_03/input";
import { testInput } from "../../../api/2022/day_03/testInput";
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

type RuckSack = { compartmentOne: string; compartmentTwo: string };
const priorityList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const dayTwoA = (inputArray: string[]): number => {
  let allRucksacks: RuckSack[] = [];

  inputArray.forEach((ruckSack) => {
    let compartmentOne: string = "";
    let compartmentTwo: string = "";
    for (let i = 0; i < ruckSack.length / 2; i++) {
      compartmentOne += ruckSack[i];
    }
    for (let i = ruckSack.length / 2; i < ruckSack.length; i++) {
      compartmentTwo += ruckSack[i];
    }
    allRucksacks.push({
      compartmentOne: compartmentOne,
      compartmentTwo: compartmentTwo,
    });
  });
  let total = 0;
  allRucksacks.forEach((ruckSack: RuckSack) => {
    let firstTime = true;
    for (let i = 0; i < ruckSack.compartmentOne.length; i++) {
      for (let x = 0; x < ruckSack.compartmentTwo.length; x++) {
        if (ruckSack.compartmentOne[i] === ruckSack.compartmentTwo[x]) {
          if (firstTime) {
            firstTime = false;
            for (let y = 0; y < priorityList.length; y++) {
              if (ruckSack.compartmentOne[i] === priorityList[y]) {
                const value = y + 1;

                total = total + value;
              }
            }
          }
        }
      }
    }
  });

  return total;
};

const dayTwoB = (inputArray: string[]): number => {
  let total = 0;
  // loop thorugh every 3 rucksacks
  for (let index = 0; index < inputArray.length; index += 3) {
    let firstTime = true;
    //  loop through first rucksack
    for (let a = 0; a < inputArray[index].length; a++) {
      //  loop through 2nd rucksack
      for (let b = 0; b < inputArray[index + 1].length; b++) {
        if (inputArray[index][a] === inputArray[index + 1][b]) {
          //  loop through 3rd rucksack
          for (let c = 0; c < inputArray[index + 2].length; c++) {
            if (inputArray[index][a] === inputArray[index + 2][c]) {
              if (firstTime) {
                firstTime = false;
                for (let y = 0; y < priorityList.length; y++) {
                  if (inputArray[index][a] === priorityList[y]) {
                    const value = y + 1;
                    total = total + value;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return total;
};

const getInput = (): string[] => input.split("\n").map(String);

export default function Day01() {
  return (
    <Container>
      <Head>
        <title>AOC 2022 - Day 02</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 2</h1>
        <h2>Part 1</h2>
        <p>{dayTwoA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{dayTwoB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
