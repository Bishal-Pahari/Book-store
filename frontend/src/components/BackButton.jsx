import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex ">
      <Link
        to={destination}
        className="bg-sky-800
       text-white px-4 rounded-lg w-lift"
      >
        <IoIosArrowBack className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
