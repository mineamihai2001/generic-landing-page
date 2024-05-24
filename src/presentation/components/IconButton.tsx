import { FC, MouseEventHandler, ReactNode } from "react";

interface IProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    icon: ReactNode;
}

export const IconButton: FC<IProps> = ({ onClick, icon }) => {
    return (
        <button
            className="p-2 bg-primary-0 rounded-full text-primary-3
                    shadow-sm"
            onClick={onClick}
        >
            {icon}
        </button>
    );
};
