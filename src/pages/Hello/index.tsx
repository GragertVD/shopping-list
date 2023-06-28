import { FC } from "react";
import { HelloPageContainer } from "./style";


const Hello: FC = () => (
  <>
    <HelloPageContainer>
      <h1>Hello, I&apos;m Vladimir Gragert</h1>
      <p>In this case, I developed a product catalog.<br></br>
        ***************************************************<br></br>
        *----------with basket and create product---------*<br></br>
        ***************************************************<br></br>
      </p>
      <strong>Technologies used:</strong>
      <ul>
        <li>React</li>
        <li>React Routers</li>
        <li>Redux</li>
        <li>TypeScripte</li>
        <li>styled-components</li>
        <li>react-intersection-observer</li>
      </ul>

    </HelloPageContainer>
  </>
);

export default Hello;
