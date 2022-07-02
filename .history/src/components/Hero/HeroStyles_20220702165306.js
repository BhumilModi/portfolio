import styled, { StyleSheetManager } from 'styled-components';

export const LeftSection = styled.div`
  width: 40vw;
  height: 50vh;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const Img = styled.img`
  width:30vw; 
  height:40vh;
  object-fit: cover;
  overflow: hidden;
  object-position: 0 10%; 
`

export const RightSection = styled.div`
  width: 40vw;
  height: 50vh;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const ImgSection = styled.div`
  width: 100%;
  height: auto;
`

export const MainText = styled.p`
  max-width: 1000px;
  font-size: 24px;
  line-height: 35px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.8);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`