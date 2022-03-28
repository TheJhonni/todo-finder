import React, { useEffect, useState } from "react";
import ListUsers from "../components_2nd_Layer/users/ListUsers";
import UserPie from "../components_2nd_Layer/users/UserPie";
import firebase from "firebase/compat/app";
import VisitsDiagram from "../components_2nd_Layer/dashboard/VisitsDiagram";

export default function User() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        const userArray = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setUserInfo(userArray);
        // const newTime = new firebase.firestore.Timestamp(123, 123456);
        // console.log(newTime);
      });
  }, []);

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-baseline">
        <div className="absolute h-[40%] w-[35%] rounded border-l bg-gray-300 top-[10%] left-[20%] z-99">
          <UserPie userInfo={userInfo} />
        </div>
        <div className="absolute h-[40%] w-[35%] rounded border-r bg-gray-300 top-[10%] right-[10%] z-99">
          <VisitsDiagram userInfo={userInfo} />
        </div>
      </div>

      <div className="absolute h-[40%] w-[70%] rounded bg-transparent top-[50%] left-[20%] z-99">
        <ListUsers userInfo={userInfo} />
      </div>
    </div>
  );
}
