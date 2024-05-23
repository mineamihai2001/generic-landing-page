import { FC } from "react";

interface IProps {}

export const BackgroundGradientBottom: FC<IProps> = () => {
    return (
        <>
            <div
                className="absolute w-[100%] h-[100%] top-0 left-0 z-0"
                style={{
                    background:
                        "radial-gradient(150% 80% at bottom center, var(--color-primary-100) , transparent 40%)",
                }}
            ></div>
            <div
                className="absolute w-[100%] h-[100%] top-0 left-0 z-1"
                style={{
                    background:
                        "radial-gradient(100% 10% at bottom center, var(--color-primary-200) , transparent 40%)",
                }}
            ></div>
        </>
    );
};
