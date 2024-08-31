import styled from "styled-components";
import Categories from "../components/forHome/Categories";

export default function AllCategory() {
  return (
    <>
      <MainCont>
        <Choose>Choose a Category</Choose>
        <Categories />
      </MainCont>
    </>
  );
}

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #121212;
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 764px;
  }
`;

const Choose = styled.div`
  text-align: center;
  padding: 100.7px 43px;
  color: #121212;
  margin-top: 0;
  font-weight: 600;
  letter-spacing: 1.2px;
  font-size: 40px;
  @media (min-width: 768px) {
    font-size: 67px;
  }
  @media (min-width: 1440px) {
    font-size: 67px;
    border-right: solid 1px #121212;
  }
`;
