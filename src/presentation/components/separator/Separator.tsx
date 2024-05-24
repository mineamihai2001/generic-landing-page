import { FC } from "react";

interface IProps {
    className?: string;
}

export const Separator: FC<IProps> = ({ className = "" }) => {
    return (
        <div
            className={`w-full ${className}`}
            style={{
                borderWidth: 1,
                WebkitBorderImage:
                    "linear-gradient(to right, transparent 20%, var(--color-neutral-500), transparent 80%) 90",
                MozBorderImage:
                    "linear-gradient(to right, transparent 20%, var(--color-neutral-500) , transparent 80%) 90",
                borderImage:
                    "linear-gradient(to right, transparent 20%, var(--color-neutral-500), transparent 80%)) 90",
            }}
        ></div>
    );
};
