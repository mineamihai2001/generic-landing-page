import { FC } from "react";

interface IProps {}

export const BackgroundGradientTop: FC<IProps> = () => {
    return (
        <>
            <div
                className="absolute w-[100%] h-[200%] top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0"
                style={{
                    background:
                        "radial-gradient(circle at center, var(--color-primary-300), transparent 50%)",
                }}
            ></div>
            <div className="absolute opacity-75 border border-primary-3 w-[20rem] h-[20rem] rounded-full top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
            <div className="absolute opacity-50 border border-primary-3 w-[40rem] h-[40rem] rounded-full top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
            <div className="absolute opacity-25 border border-primary-3 w-[60rem] h-[60rem] rounded-full top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </>
    );
};
