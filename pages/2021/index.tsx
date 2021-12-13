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
          <CalendarDoor day="01" year="2021" />
          <CalendarDoor day="02" year="2021" />
          <CalendarDoor day="03" year="2021" />
          <CalendarDoor day="04" year="2021" />
          <CalendarDoor day="05" year="2021" />
          <CalendarDoor day="06" year="2021" />
          <CalendarDoor day="07" year="2021" />
          <CalendarDoor day="08" year="2021" />
          <CalendarDoor day="09" year="2021" />
          <CalendarDoor day="10" year="2021" />
          <CalendarDoor day="11" year="2021" />
          <CalendarDoor day="12" year="2021" />
        </CalendarGrid>
      </main>

      <Footer />
    </Container>
  );
}
