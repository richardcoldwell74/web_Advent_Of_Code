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
        <title>Advent Of Code - 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h1>2020</h1>
        <CalendarGrid>
          <CalendarDoor day="1" year="2020" />
        </CalendarGrid>
      </main>

      <Footer />
    </Container>
  );
}
