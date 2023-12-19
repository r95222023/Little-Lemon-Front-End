import '../../App.css';
import {
  Heading,
  Image,
  Main,
} from "grommet";

import construction from "../../assets/website_construction.jpg"
export const OnlineOrderPage = () => (
  <Main pad="large">
    <Heading>Under construction</Heading>
    <Image
          margin="large"
          fit="cover"
          src={construction}
        />
  </Main>
);

export default OnlineOrderPage