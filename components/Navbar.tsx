import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalProfile from "./ModalProfile";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full bg-slate-50 h-20 shadow-lg p-5">
      <img src="/logo.png" alt="" />

      <div className="flex">
        <span className="text-lg text-blue-400 hover:shadow-blue-300 hover:shadow-2xl mx-5 cursor-pointer hover:bg-blue-400 hover:rounded-md p-2 hover:text-white font-semibold">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Contato
        </span>
        <ModalProfile />
      </div>
    </div>
  );
}
