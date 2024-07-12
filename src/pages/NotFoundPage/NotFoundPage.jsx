import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div>
      <p className={css.messageInfo}>
        Oops! No page was found! Please go to <Link to="/">Home</Link>
      </p>
    </div>
  );
}
