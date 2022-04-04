import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { RiAdminFill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ChangeRole({ frero, role }) {
  const [newRole, setNewRole] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setNewRole(e.target.value);
  };
  const notify = () => toast("Role changed");

  const updateRole = async () => {
    await firebase
      .firestore()
      .collection("users")
      .doc(frero.id)
      .update({ role: newRole })
      .then(() => {
        notify();
      });

    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-pink-500 text-white hover:bg-pink-200 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <RiAdminFill />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start mx-auto justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Chane Role</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex justify-center space-x-5 items-center">
                  <div className="flex justify-center items-center">
                    <input
                      className="mx-1"
                      type="radio"
                      id="admin"
                      name="drone"
                      value="Admin"
                      onClick={handleChange}
                      defaultChecked={role === "Admin"}
                    />
                    <label htmlFor="admin">Admin</label>
                  </div>
                  <div className="flex justify-center items-center">
                    <input
                      className="mx-1"
                      type="radio"
                      id="Client/Guest"
                      name="drone"
                      value="Client/Guest"
                      onClick={handleChange}
                      defaultChecked={role === "Client/Guest"}
                    />
                    <label htmlFor="Client/Guest">Client/Guest</label>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={updateRole}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
