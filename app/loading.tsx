import { ClockLoader } from "react-spinners";
import css from "./Home.module.css";

const Loading = () => {
  return (
    <div className={css.backdrop}>
      <ClockLoader color="#c5e1a5" />
    </div>
  );
};

export default Loading;
