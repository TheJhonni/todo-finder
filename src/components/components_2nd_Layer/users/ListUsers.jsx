import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import ChangeRole from "./ChangeRole";
import { FcFullTrash } from "react-icons/fc";

export default function ListUsers() {
  const [userInfo, setUserInfo] = useState([]);

  const deleteUser = (id) => {
    setTimeout(() => {
      console.log(id);
      firebase
        .firestore()
        .collection("users")
        .doc(id)
        .delete()
        .then(() => {
          alert("Deleted!");
        });
    }, 200);
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        const userArray = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setUserInfo(userArray);
      });
  }, []);

  return (
    <div className="flex flex-col py-10 mt-5">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center border-b rounded">
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
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Change Role
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Delete User
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {userInfo &&
                  userInfo.map((frero, i) => (
                    <tr key={i} className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {i + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {frero.displayName}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {frero.email}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {frero.role}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <ChangeRole frero={frero} role={frero.role} />
                      </td>
                      <td className="font-light flex items-center justify-center px-6 py-4 whitespace-nowrap">
                        <FcFullTrash
                          onClick={() => {
                            deleteUser(frero.id);
                          }}
                          className="text-3xl cursor-pointer hover:scale-125 transition duration-75 ease-in"
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
