import React, { useState } from "react";

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

type RatingProps = {
  value: number;
  onClick: (value: number) => void;
  readonly?: boolean;
};

export function Rating({ onClick, value, readonly }: RatingProps) {
  const [selection, setSelection] = useState(0);
  const [rating, setRating] = useState(value);

  const hoverOver = (event: HTMLElementEvent<HTMLButtonElement> | null) => {
    if (readonly) return;

    let starId = 0;
    if (event && event.target && event.target.getAttribute("star-id")) {
      starId = Number(event.target.getAttribute("star-id"));
    }
    setSelection(starId);
  };

  const handleClick = (event: HTMLElementEvent<HTMLButtonElement>) => {
    if (readonly) return;

    const starId = Number(event.target.getAttribute("star-id"));

    if (starId === null) return;

    setRating(starId);
    onClick(starId);
  };

  return (
    <div className="flex flex-col">
      <button
        //@ts-ignore
        onMouseOver={hoverOver}
        onMouseOut={() => hoverOver(null)}
        //@ts-ignore
        onClick={handleClick}
        className="flex items-center justify-evenly"
        type="button"
      >
        {new Array(10).fill("").map((_, i) => (
          <span
            className={`text-2xl text-yellow-500 cursor-pointer ${
              (selection ? selection > i : rating > i) ? "text-light-green" : ""
            }`}
            star-id={i + 1}
            role="button"
            key={i}
          >
            {(selection ? selection > i : rating > i) ? "\u2605" : "\u2606"}
          </span>
        ))}
      </button>
      <p className="text-center items-center">Rate the movie</p>
    </div>
  );
}
