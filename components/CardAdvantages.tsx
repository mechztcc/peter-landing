import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faGamepad,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Props {
  title: string;
  text: string;
  type: number;
}

export default function CardAdvantage({ text, title, type }: Props) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div
      onMouseEnter={() => {
        setIsHidden(false);
      }}
      onMouseLeave={() => {
        setIsHidden(true);
      }}
      className="bg-white rounded-lg mt-10 flex flex-col items-start p-8 md:mx-5 w-full hover:shadow-2xl hover:mt-5 duration-500"
    >
      {type == 1 && (
        <FontAwesomeIcon
          icon={faChartSimple}
          className="bg-blue-400 shadow-lg shadow-blue-200 p-3 rounded-md text-white"
        />
      )}
      {type == 2 && (
        <FontAwesomeIcon
          icon={faGamepad}
          className="bg-red-400 shadow-lg shadow-red-200 p-3 rounded-md text-white"
        />
      )}
      {type == 3 && (
        <FontAwesomeIcon
          icon={faGraduationCap}
          className="bg-purple-400 shadow-lg shadow-purple-200 p-3 rounded-md text-white"
        />
      )}
      <h3 className="font-semibold text-2xl mt-5">{title}</h3>
      <span className="mt-3">{text}</span>
    </div>
  );
}
