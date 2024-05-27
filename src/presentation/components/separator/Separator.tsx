import { FC } from "react";
import { Color } from "../../../domain/types";

interface IProps {
    className?: string;
    vertical?: boolean;
    color?: Color;
}

export const Separator: FC<IProps> = ({ className = ``, vertical = false, color = "neutral" }) => {
    const shade = color === "neutral" ? 500 : 300;

    return vertical ? (
        <div
            className={`h-full border ${className}`}
            style={{
                borderWidth: 1,
                WebkitBorderImage: `linear-gradient(to bottom, transparent 10%, var(--color-${color}-${shade}), transparent 90%) 10`,
                MozBorderImage: `linear-gradient(to bottom, transparent 10%, var(--color-${color}-${shade}) , transparent 90%) 10`,
                borderImage: `linear-gradient(to bottom, transparent 10%, var(--color-${color}-${shade}), transparent 90%)) 10`,
            }}
        ></div>
    ) : (
        <div
            className={`w-full ${className}`}
            style={{
                borderWidth: 1,
                WebkitBorderImage: `linear-gradient(to right, transparent 20%, var(--color-${color}-${shade}), transparent 80%) 90`,
                MozBorderImage: `linear-gradient(to right, transparent 20%, var(--color-${color}-${shade}) , transparent 80%) 90`,
                borderImage: `linear-gradient(to right, transparent 20%, var(--color-${color}-${shade}), transparent 80%)) 90`,
            }}
        ></div>
    );
};
