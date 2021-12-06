import styled from "styled-components";
import Link from "next/link";

const TitleContainer = styled.div`
  width: 100vw;
  max-width: 486px;
  padding: 0 20px;
`;

const TitleImage = styled.img`
  width: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export default function Header() {
  return (
    <Link href="/">
      <TitleContainer>
        <TitleImage src="/advent_of_code.png" />
      </TitleContainer>
    </Link>
  );
}
