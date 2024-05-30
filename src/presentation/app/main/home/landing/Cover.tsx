import { inject, observer } from "mobx-react";
import { FC } from "react";
import { LandingConfig } from "../../../../../domain/model/config";
import { Card } from "../../../../components/card";
import { GlobalStore } from "../../../../../infrastructure/store";
import { useMediaQuery } from "../../../../../application/hooks";
import { Breakpoints } from "../../../../../application/helpers";

interface IProps {
    globalStore?: GlobalStore;
    config: LandingConfig;
}

export const Cover: FC<IProps> = inject("globalStore")(
    observer(({ globalStore, config }) => {
        const isLarge = useMediaQuery(Breakpoints.up("xl"));

        const PERSPECTIVE = "1000";
        const CARDS = 4;
        const STARTING_HEIGHT = 17;
        const STARTING_WIDTH = 30;

        let currentHeight = STARTING_HEIGHT;
        let currentWidth = STARTING_WIDTH;

        return (
            <div
                className="md:w-2/3 w-full flex 2xl:flex-row md:flex-row flex-row 
                    justify-center items-center md:gap-20 gap-5 
                    my-8 px-5"
            >
                {typeof config.cards !== "undefined" && isLarge && (
                    <div className="absolute w-full flex justify-start items-center px-20">
                        {config.cards.map((c, i) => {
                            let elem = <></>;
                            if (i < CARDS / 2) {
                                elem = (
                                    <div
                                        className={`relative ${i % 2 !== 0 ? "left-[-8%]" : ""}`}
                                        style={{
                                            perspective: `${PERSPECTIVE}px`,
                                        }}
                                    >
                                        <Card
                                            scale
                                            style={{
                                                width: `${currentWidth}rem`,
                                                height: `${currentHeight}rem`,
                                                transformStyle: "preserve-3d",
                                                transform:
                                                    i % 2 !== 0
                                                        ? "rotateY(55deg)"
                                                        : "rotateY(45deg)",
                                            }}
                                        >
                                            <img
                                                className="h-full w-full"
                                                src={
                                                    typeof c.image.source === "string"
                                                        ? c.image.source
                                                        : globalStore?.darkMode
                                                        ? c.image.source.dark
                                                        : c.image.source.light
                                                }
                                            />
                                        </Card>
                                    </div>
                                );
                                if (i + 1 !== CARDS / 2) {
                                    currentHeight -= 5;
                                    currentWidth -= 10;
                                }
                            } else {
                                elem = (
                                    <div
                                        className={`relative ${i % 2 !== 0 ? "" : "right-[-8%]"}`}
                                        style={{
                                            perspective: `${PERSPECTIVE}px`,
                                        }}
                                    >
                                        <Card
                                            scale
                                            style={{
                                                width: `${currentWidth}rem`,
                                                height: `${currentHeight}rem`,
                                                transformStyle: "preserve-3d",
                                                transform:
                                                    i % 2 !== 0
                                                        ? "rotateY(-45deg)"
                                                        : "rotateY(-55deg)",
                                            }}
                                        >
                                            <img
                                                className="h-full w-full"
                                                src={
                                                    typeof c.image.source === "string"
                                                        ? c.image.source
                                                        : globalStore?.darkMode
                                                        ? c.image.source.dark
                                                        : c.image.source.light
                                                }
                                            />
                                        </Card>
                                    </div>
                                );
                                currentHeight += 5;
                                currentWidth += 10;
                            }
                            return elem;
                        })}
                    </div>
                )}
                {typeof config.cover !== "undefined" ? (
                    <div className="h-72 w-full flex justify-center items-center">
                        <figure className="w-[35rem] relative z-50">
                            <img
                                className="relative z-50 animate-wiggle"
                                src={
                                    typeof config.cover.image.source === "string"
                                        ? config.cover.image.source
                                        : globalStore?.darkMode
                                        ? config.cover.image.source.dark
                                        : config.cover.image.source.light
                                }
                            />
                            <div
                                className="absolute w-full h-full top-[0] left-0  bg-red-500 z-30"
                                style={{
                                    background:
                                        "radial-gradient(circle at center, var(--color-primary-300), transparent 40%)",
                                }}
                            ></div>
                        </figure>
                    </div>
                ) : (
                    <div className="h-72 w-full"></div>
                )}
            </div>
        );
    })
);
