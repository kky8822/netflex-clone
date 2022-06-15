import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.black.lighter};
  height: 200vh;
`;

function Home() {
  return <Wrapper></Wrapper>;
}
export default Home;
