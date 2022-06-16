import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  height: 200vh;
  padding-bottom: 200px;
`;

function Search() {
  const [searchParams, _] = useSearchParams();
  const keyword = searchParams.get("keyword");
  console.log(keyword);
  return <Wrapper />;
}
export default Search;
