
import { Outlet, Navigate } from "react-router-dom";
import CardProvider, { useCardContext } from "../context/CardProvider";

const PrivateRouter = () => {
  const { name, pass } = useCardContext(CardProvider);
  console.log(name);
  console.log(pass);

  return name === "cihan" && pass === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
