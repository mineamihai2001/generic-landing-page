import { FC } from "react";

interface IProps {
    children?: React.ReactNode;
    className?: string;
    border?: boolean;
    scale?: boolean;
    gradient?: boolean;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Card: FC<IProps> = ({
    children,
    className,
    border = false,
    scale = false,
    gradient = false,
    style,
    onClick,
}) => {
    return (
        <div
            className={`bg-neutral-1
                    dark:shadow-neutral-2
                    ease-in-out duration-100 rounded-xl
                    ${
                        border
                            ? "border-2 border-primary-3 hover:shadow-[0_0px_10px_5px_var(--color-primary-400)] dark:hover:hover:shadow-[0_0px_10px_5px_var(--color-primary-400)]"
                            : ""
                    }
                    ${scale ? "hover:scale-[101%] cursor-pointer" : ""}
                    ${gradient ? "bg-gradient-to-b from-neutral-2 to-neutral-1 " : ""}
                    ${className}`}
            onClick={onClick}
            style={style}
            // style={{
            //     background:
            //         "linear-gradient(to bottom, var(--color-neutral-200), var(--color-neutral-100) 30% ,var(--color-neutral-0) 90%)",
            // }}
        >
            {children}
        </div>
    );
};
