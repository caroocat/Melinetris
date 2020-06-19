import styled from "styled-components";

export const ContainerFather = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-top: 100px;
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 80vw;
  margin-left: 35px;
  position: relative;
  left: 20%;
`;
export const Card = styled.div`
  border: 10px solid;
  border-image-slice: 1;
  border-width: 0.6em;
  border-image-source: linear-gradient(to left, #8e46ff, #6473ff);
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;
  border-bottom: 0;
  border-right: 0;
  border-left: 0;
  margin: 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.15);
  width: 15em;
  height: 24em;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8vh;
`;

export const DivFlex = styled.div`
  display: flex;
`;
export const ResultTitle = styled.h5`
  font-weight: 600;
  font-size: 1rem;
`;
export const ContentCard = styled.p`
  font-weight: 600;
  font-size: 0.9rem;
`;
export const WelcomeTitle = styled.div`
  border: 10px solid;
  border-image-slice: 2;
  border-width: 0.6em;
  border-image-source: linear-gradient(to right, #8e46ff, #6473ff);
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;
  border-bottom: 0;
  border-right: 0;
  border-left: 0;
  width: 20em;
  display: flex;
  align-items: center;
  align-self: center;
`;
