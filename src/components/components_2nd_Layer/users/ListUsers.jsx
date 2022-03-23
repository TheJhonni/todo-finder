import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";

export default function ListUsers() {
  const [userName, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");

  const [user, setUser] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot("value", (datasnapshot) => {
        datasnapshot.docs.forEach((element) => {
          console.log(element);
        });
      });
    // console.log("All data in 'users' collection", snapshot);
    // const newArr = snapshot.docs.map((doc) => doc.data());
    // console.log(newArr);
    // setUser([{ id: newArr.id, ...newArr }]);
    // console.log(user);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center border-b">
              <thead className="border-b bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    email
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ciuabcigbua
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ciuabcigbua
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ciuabcigbua
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ciuabcigbua
                  </td>
                </tr>

                {/* {userInfo &&
                  userInfo.map((frero) => {
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {frero.displayName}
                        euvscin
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {frero.email}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {eachUser.role}
                        euvscin
                      </td>
                    </tr>;
                  })} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
