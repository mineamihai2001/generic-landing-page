import { FC } from "react";

interface IProps {}

export const BackgroundShape: FC<IProps> = () => {
    const LAYERS = 10;

    const MIN_BORDER = 2;
    const MIN_WIDTH = 0.5;

    const INIT_BORDER = 8;
    const INIT_WIDTH = 6.5;
    const ROTATE_BY = 10;

    const MIN_OPACITY = 0.1;
    const CIRCLES = 4;
    const INIT_RADIUS = 10;
    const INIT_OPACITY = 0.3;
    const GROW_BY = 1;
    const OPACITY_STEP = (INIT_OPACITY - MIN_OPACITY) / (CIRCLES - 1);

    let prev = INIT_RADIUS;

    return (
        <>
            <div
                className="absolute w-[35rem] h-[35rem] top-[0%] left-[50%] translate-x-[-50%] z-0"
                style={{
                    background:
                        "radial-gradient(circle at center, var(--color-primary-300), transparent 50%)",
                }}
            ></div>

            {new Array(LAYERS).fill(0).map((_, i) => {
                const reduceBy = 0.7 * i;
                const currentWidth = INIT_WIDTH - reduceBy > 0 ? INIT_WIDTH - reduceBy : MIN_WIDTH;
                const currentBorder = INIT_BORDER - i > 1 ? INIT_BORDER - i : MIN_BORDER;

                return (
                    <div
                        key={`background-dots-${i}`}
                        className="absolute w-[35rem] h-[35rem] top-[0%] left-[50%] translate-x-[-50%] flex justify-center items-center"
                    >
                        <div
                            className={`border-primary-3 border-dotted rounded-full`}
                            style={{
                                borderWidth: currentBorder,
                                width: `${currentWidth}rem`,
                                height: `${currentWidth}rem`,
                                transform: `rotate(${i * ROTATE_BY}deg)`,
                            }}
                        ></div>
                    </div>
                );
            })}

            {new Array(CIRCLES).fill(0).map((_, i) => {
                const currentRadius =
                    i > 1 ? prev + (CIRCLES + 1 - i) * GROW_BY : INIT_RADIUS + i * 5;
                prev = currentRadius;

                const currentOpacity = i > 0 ? INIT_OPACITY - i * OPACITY_STEP : 1;

                return (
                    <div
                        key={`background-circles-${i}`}
                        className="absolute w-[35rem] h-[35rem] top-[0%] left-[50%] translate-x-[-50%] flex justify-center items-center"
                    >
                        <div
                            className={`border border-primary-3 rounded-full`}
                            style={{
                                opacity: currentOpacity,
                                width: `${currentRadius}rem`,
                                height: `${currentRadius}rem`,
                            }}
                        ></div>
                    </div>
                );
            })}
        </>
    );
};
