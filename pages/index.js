import Wrapper from "./layout/wrapper";
import Home from "./home/home";
import useGetGeneralData from "../services/general/useGetGeneralData";

const MainRoot = () => {

  return (
    <Wrapper>
      <Home  />
    </Wrapper>
  );
};

export default MainRoot;
