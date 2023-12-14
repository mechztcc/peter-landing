import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ModalProfile() {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <span
        onClick={() => {
          setIsModal(!isModal);
        }}
        className=" text-blue-400 hover:shadow-blue-300 hover:shadow-2xl text-lg cursor-pointer hover:bg-blue-400 hover:rounded-md p-2 hover:text-white font-semibold"
      >
        <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
        Entrar
      </span>

      {isModal && (
        <div className="bg-white fixed min-w-screen min-h-screen top-0 left-0 right-0 flex justify-center items-center overflow">
          <div className="flex flex-col justify-start items-start bg-white modal rounded-lg px-5">
            <div className="flex justify-between w-full items-center mt-1">
              <h1 className="font-semibold text-lg">Acessar conta</h1>
              <button
                className="border p-2 px-3 rounded-lg"
                onClick={() => {
                  setIsModal(!isModal);
                }}
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
            <hr className="my-3 w-full" />
            <h3 className="mb-5">Escolha o perfil que você deseja acessar</h3>
            <button className="bg-blue-400 p-3 w-full rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-200">
              Sou aluno
            </button>
            <button className="bg-blue-400 p-3 w-full rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-200 my-3">
              Sou professor
            </button>
          </div>
        </div>
      )}
    </>
  );
}
