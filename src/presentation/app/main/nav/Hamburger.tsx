import { FC } from "react";

interface IProps {
    onClick: () => void;
}

export const Hamburger: FC<IProps> = ({ onClick }) => {
    return (
        <div
            className="h-10 w-8 flex flex-col justify-center items-center gap-2 cursor-pointer group"
            onClick={onClick}
        >
            {new Array(3).fill(0).map((_, i) => {
                return (
                    <div
                        key={`nav-menu-line-${i}`}
                        className="w-full border border-neutral-10 opacity-50 rounded-full
                    transition-all duration-100 ease-in-out
                    group-hover:border-neutral-6 "
                    ></div>
                );
            })}
        </div>
    );
};
