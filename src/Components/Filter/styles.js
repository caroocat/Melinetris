import styled from "styled-components";

export const ContainerFilter = styled.div`
  @media (max-width: 900px) {
    width: 9rem;
  }
  @media (max-width: 700px) {
    width: 7rem;
  }
  display: flex;
  position: fixed;
  top: 20x;
  flex-direction: column;
  width: 13em;
  margin-top: 1vh;
  background-color: #8e46ff;
  padding: 1em 0;
  border-bottom-right-radius: 1em;
  border-top-right-radius: 1em;
  border-top: solid 0.8em #6473ff;
  border-bottom: solid 0.8em #6473ff;
`;
export const FilterName = styled.h4`
  height: 3vh;
  margin-top: 1vh;
  color: white;
  font-weight: 530;
  font-size: 1.3em;
  text-transform: uppercase;
`;
