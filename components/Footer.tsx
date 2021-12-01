import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;



`;

export default function Footer() {
  return (
    <>
      <FooterContainer>
        Richard Coldwell - 2021
      </FooterContainer>
    </>
  )
}
