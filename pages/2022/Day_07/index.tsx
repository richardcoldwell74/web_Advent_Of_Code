import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { input } from "../../../api/2022/day_07/input";
import { testInput } from "../../../api/2022/day_07/testInput";
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

type Directory = {
  parent: Directory | null;
  name: string;
  children: Directory[];
  files: File[];
};
type File = { parent: Directory; name: string; size: number };

let ListOfDirectories: Directory[] = [];

const daySevenA = (inputArray: string[]): number => {
  const rootDirectory: Directory = {
    parent: null,
    name: "/",
    children: [],
    files: [],
  };

  let currentDirectory: Directory = rootDirectory;
  inputArray.forEach((command, index) => {
    if (index > 1) {
      if (command.includes("$ cd")) {
        if (command.includes("..")) {
          // go up a directory
          currentDirectory = currentDirectory.parent;
        } else {
          // go down a directory
          currentDirectory = currentDirectory.children.find((child) => {
            return child.name === command[command.length - 1];
          }) as Directory;
        }
      } else if (command.includes("$ ls")) {
        // do nothing for now
      } else if (command.includes("dir")) {
        //create  a directory as a child of the current directory
        currentDirectory.children.push({
          parent: currentDirectory,
          name: command[command.length - 1],
          children: [],
          files: [],
        } as Directory);
      } else {
        // create a file as a child of the current directory
        currentDirectory.files.push({
          parent: currentDirectory,
          name: command.split(" ")[1],
          size: +command.split(" ")[0],
        } as File);
      }
    }
  });

  // rootDirectory.children.forEach((child) => {

  // }

  console.log("rootDirectory", rootDirectory);
  let ret = 0;

  return ret;
};

const daySevenB = (inputArray: string[]): number => {
  let ret = 0;

  return ret;
};

const getInput = (): string[] => testInput.split("\n").map(String);

export default function Day07() {
  return (
    <Container>
      <Head>
        <title>AOC 2022 - Day 07</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Day 1</h1>
        <h2>Part 1</h2>
        <p>{daySevenA(getInput())}</p>
        <h2>Part 2</h2>
        <p>{daySevenB(getInput())}</p>
      </main>

      <Footer />
    </Container>
  );
}
