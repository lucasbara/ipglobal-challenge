import { ReactNode } from "react";
import classNames from "classnames";

type ButtonType = "button" | "reset" | "submit";
type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type: ButtonType;
  variant: ButtonVariant;
};

export function Button({
  children,
  disabled,
  onClick,
  type,
  variant,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "h-10 min-w-[10rem] w-[10%] flex justify-between items-center mx-2 text-white bg-black border-light-green p-2 rounded-lg cursor-pointer border transition duration-300 ease-out",
        {
          "bg-grey cursor-not-allowed border-light-grey hover:bg-grey pointer-events-none":
            disabled === true,
        },
        {
          "bg-green border-light-grey hover:bg-grey": variant === "secondary",
        }
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
