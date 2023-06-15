import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Redirect = props => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/test");
  });
  return <></>;
}

export default Redirect