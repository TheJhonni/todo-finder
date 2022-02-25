import React from "react";
import { useSelector } from "react-redux";
import GenericScreen from "../../screens/GenericScreen";
import LoadingTimer from "./LoadingTimer";

function UseRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <GenericScreen /> : <LoadingTimer />;
}

export default UseRoute;
