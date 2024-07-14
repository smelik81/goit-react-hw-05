import { useState } from "react";
import css from "./FilmSearch.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function FilmSearch({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!inputValue.trim()) {
      toast.error("No movies found");
      return;
    }

    onSubmit(inputValue);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" className={css.btn}>
          Search Films
        </button>
      </form>
      <Toaster />
    </div>
  );
}
