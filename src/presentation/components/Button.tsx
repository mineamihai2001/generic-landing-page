import { FC, MouseEventHandler } from "react";

type ButtonColor = "primary" | "success" | "warning" | "danger" | "neutral";

interface IProps {
    children: React.ReactNode;
    className?: string;
    mode?: "outlined" | "contained";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<IProps> = ({ children, className = "", mode = "contained", onClick }) => {
    const animationDuration: string = "duration-150";

    function getButton() {
        switch (mode) {
            case "outlined":
                return (
                    <button
                        className={`outline outline-2 outline-primary-3 text-neutral-10 px-6 py-3 rounded-3xl
                                    shadow-md
                                    hover:rounded-md
                                    transition-all ${animationDuration} ${className}`}
                        onClick={onClick}
                    >
                        {children}
                    </button>
                );
            case "contained":
                return (
                    <button
                        className={`bg-primary-3 text-white px-6 py-3 rounded-3xl
                        shadow-md
                        dark:shadow-neutral-3 
                        hover:rounded-md
                        transition-all duration-100 ${animationDuration} ${className}`}
                        onClick={onClick}
                    >
                        {children}
                    </button>
                );
        }
    }

    return getButton();
};
