import { FC } from "react";
import { ApplicationInfoContainer, HelloPageContainer } from "./style";


const Hello: FC = () => (
  <>
    <HelloPageContainer>
      <h1>Hello, I&apos;m Vladimir Gragert</h1>
      <p>In this case, I developed a product catalog.</p>
      <ApplicationInfoContainer>
        <div>
          <strong>Application functionality:</strong>
          <ul>
            <li>Loading product data from an external API</li>
            <li>Lazy loading card product</li>
            <li>Adding and removing products to the Cart</li>
            <li>Buying (clearing) the cart</li>
            <li>Creation of a new product (pop-up)</li>
            <li>Routing (3 pages)</li>
          </ul>
        </div>
        <div>
          <strong>Technologies used:</strong>
          <ul>
            <li>React</li>
            <li>React Routers</li>
            <li>Redux/Redux-thunk</li>
            <li>axios</li>
            <li>TypeScripte</li>
            <li>styled-components</li>
            <li>react-intersection-observer</li>
          </ul>
        </div>
      </ApplicationInfoContainer>

    </HelloPageContainer>
  </>
);

export default Hello;
