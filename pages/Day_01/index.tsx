import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { input } from '../../api/day_01/input';
import { testInput } from '../../api/day_01/testInput';
import styled from 'styled-components';
import { useState } from 'react';


const findGreaterDepths = (
  inputArray: number[],
): number => {
  let count = 0
  let lastDepth = inputArray[0];
  for (const depth of inputArray) {
    if (depth > lastDepth) {
      count++;
    }
    lastDepth = depth;
  }
  return count
}


const findGreaterDepthsGrouped = (
  inputArray: number[],
): number => {
  let count = 0
  let depth = 0;
  let lastDepth = inputArray[0] + inputArray[1] + inputArray[2];
  for (let index = 0; index < inputArray.length; index++) {
    if (index < inputArray.length - 2)
      depth = inputArray[index] + inputArray[index + 1] + inputArray[index + 2]
    {
      if (depth > lastDepth) {
        count++;
      }
      lastDepth = depth;
    }
  }
  return count;
}

const getInput = (): number[] => input.split('\n').map(Number)

export default function Home() {

  return (
    <div>
      <Head>
        <title>AOC 2021 - Day 01</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Advent Of Code Day 01" />
        <h2>Part 1</h2>
        <p >
          {findGreaterDepths(getInput())}
        </p>
        <h2>Part 2</h2>
        <p >
          {findGreaterDepthsGrouped(getInput())}
        </p>
      </main>

      <Footer />
    </div>
  )
}