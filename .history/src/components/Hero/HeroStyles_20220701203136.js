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
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const RightSection = styled.div`
  width: 40vw;
  height: 50vh;
  background-color: red;
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
  height: 70%;
  margin-top: 10vh;
  background-color: black;
`
