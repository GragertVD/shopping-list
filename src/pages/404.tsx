import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: false })
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Error: 404</h1>
      <h2>Something is going wrong...</h2>
    </div>
  )
};

export default Error;
