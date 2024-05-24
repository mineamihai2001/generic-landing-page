import { FC } from "react";

interface IProps {
    children?: React.ReactNode;
    className?: string;
}

export const Card: FC<IProps> = ({ children, className }) => {
    return (
        <div
            className={`h-72 w-1/2 bg-neutral-1 cursor-pointer
                    border-2 border-primary-3 rounded-xl
                    dark:shadow-neutral-2
                    ease-in-out duration-100
                    hover:scale-[101%] hover:shadow-[0_0px_10px_5px_var(--color-primary-400)] dark:hover:hover:shadow-[0_0px_10px_5px_var(--color-primary-400)]
                    ${className}`}
            style={{
                background:
                    "linear-gradient(to bottom, var(--color-neutral-200), var(--color-neutral-100) 30% ,var(--color-neutral-0) 90%)",
            }}
        >
            {children}
        </div>
    );
};
