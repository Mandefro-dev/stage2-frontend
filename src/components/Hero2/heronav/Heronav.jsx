import "./heronav.css";
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

function Heronav({ title }) {
  return (
    <div>
      <div className="hero2_top">
        <h2>{title}</h2>
        <div className="back_forth">
          <div className="part1">
            <IoIosArrowBack className="arrow" />
          </div>
          <div className="part2">
            <MdNavigateNext className="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heronav;
