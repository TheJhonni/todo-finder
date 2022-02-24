import React from "react";
import { useSelector } from "react-redux";
import GenericScreen from "../../screens/GenericScreen";
import Loading from "./Loading";

function UseRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <GenericScreen /> : <Loading />;
}

export default UseRoute;
