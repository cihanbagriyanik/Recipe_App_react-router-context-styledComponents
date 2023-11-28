import { Outlet, Navigate } from "react-router-dom";
import CardProvider, { useCardContext } from "../context/CardProvider";

const PrivateRouter = () => {
  const { name, pass } = useCardContext(CardProvider);

  return name === "cihan" && pass === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
