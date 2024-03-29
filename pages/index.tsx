import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styled from "styled-components";
import CalendarDoor from "@components/CalendarDoor";
import { CalendarGrid } from "@components/CalendarGrid";
import Link from "next/link";

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

const YearLinkText = styled.h3`
  cursor: pointer;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Advent Of Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>Advent Of Code</h1>

        <Link href="/2020">
          <YearLinkText>2020</YearLinkText>
        </Link>
        <Link href="/2021">
          <YearLinkText>2021</YearLinkText>
        </Link>
        <Link href="/2022">
          <YearLinkText>2022</YearLinkText>
        </Link>
      </main>

      <Footer />
    </Container>
  );
}
