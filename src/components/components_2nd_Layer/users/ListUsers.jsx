import firebase from "firebase/compat/app";
import ChangeRole from "./ChangeRole";
import { FcFullTrash } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../../Toasts/Toast";

export default function ListUsers({ userInfo }) {
  const notify = () => toast("User Deleted!");

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure to delete this User credentials?")) {
      await firebase
        .firestore()
        .collection("users")
        .doc(id)
        .delete()
        .then(() => {
          notify();
        });
    }
  };

  return (
    <div className="flex flex-col pb-10 my-2">
      <Toast />
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
                    Gender
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
                        {frero.gender === "Undefined"
                          ? "/"
                          : frero.gender.slice(0, 1)}
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
