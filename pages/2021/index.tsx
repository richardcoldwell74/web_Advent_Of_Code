import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styled from "styled-components";
import CalendarDoor from "@components/CalendarDoor";
import { CalendarGrid } from "@components/CalendarGrid";

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

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Advent Of Code - 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>2021</h1>
        <CalendarGrid>
          <CalendarDoor day="1" year="2021" />
          <CalendarDoor day="2" year="2021"/>
          <CalendarDoor day="3" year="2021"/>
          <CalendarDoor day="4" year="2021"/>
          <CalendarDoor day="5" year="2021"/>
          <CalendarDoor day="6" year="2021"/>
          <CalendarDoor day="7" year="2021"/>
          <CalendarDoor day="8" year="2021"/>
        </CalendarGrid>
      </main>

      <Footer />
    </Container>
  );
}
