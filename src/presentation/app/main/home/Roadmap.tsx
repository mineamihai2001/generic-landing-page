import { FC } from "react";
import { RoadmapConfig } from "../../../../domain/model/config";

interface IProps {
    config: RoadmapConfig;
}

export const Roadmap: FC<IProps> = ({ config }) => {
    return (
        <div className="py-20 w-full flex flex-col justify-center items-center">
            {typeof config.titleBox !== "undefined" && (
                <div className="relative flex flex-col justify-center items-center py-20 mb-40">
                    <div className="flex flex-col justify-center items-center relative z-10">
                        <span className="text-3xl font-thin">{config.titleBox.subtitle ?? ""}</span>
                        <span className="text-4xl font-medium">{config.titleBox.title ?? ""}</span>
                    </div>
                    {typeof config.titleBox.backgroundTitle !== "undefined" && (
                        <span
                            className="text-[10rem] font-black text-neutral-0 absolute z-0 bottom-[-50%] opacity-70"
                            style={{
                                textShadow: "var(--color-primary-400) 0 0 3px",
                            }}
                        >
                            {config.titleBox.backgroundTitle}
                        </span>
                    )}
                </div>
            )}
            <div className="relative flex justify-center items-center w-full">
                <div
                    className="h-[100%] absolute top-0 z-1"
                    style={{
                        borderWidth: 1,
                        WebkitBorderImage:
                            "linear-gradient(var(--color-primary-500) , var(--color-primary-300)) 90",
                        MozBorderImage:
                            "linear-gradient(var(--color-primary-500), var(--color-primary-300)) 90",
                        borderImage:
                            "linear-gradient(var(--color-primary-500), var(--color-primary-100)) 90",
                    }}
                ></div>
                <div
                    className="h-[20%] absolute bottom-[-20%] z-1"
                    style={{
                        borderWidth: 1,
                        WebkitBorderImage:
                            "linear-gradient(var(--color-primary-300), transparent 55%, transparent) 90",
                        MozBorderImage:
                            "linear-gradient(var(--color-primary-300), transparent 55%, transparent) 90",
                        borderImage:
                            "linear-gradient(var(--color-primary-100), transparent 55%, transparent)) 90",
                    }}
                ></div>
                <div className="w-full flex flex-col gap-56 justify-center items-center z-20">
                    {config.steps.map((s, i) => {
                        return (
                            <div key={`homepage-roadmap-step-${i}`} className="relative">
                                <div
                                    className="w-10 h-10  rounded-full flex justify-center items-center font-semibold text-xl
                                            shadow-[0_0px_30px_10px_var(--color-primary-200)]"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, var(--color-primary-400), var(--color-primary-300))",
                                    }}
                                >
                                    {i + 1}
                                </div>
                                <div
                                    className={`absolute p-10 pt-0 w-[30rem] top-0 ${
                                        i % 2 === 0 ? "left-[250%]" : "right-[250%]"
                                    }
                                        flex flex-col gap-2`}
                                >
                                    <span className="text-2xl font-medium">{s.title}</span>
                                    <p className="text-neutral-5 text-sm">{s.description}</p>
                                </div>
                                {typeof s.image !== "undefined" && (
                                    <div
                                        className={`absolute p-10 pt-0 w-[25rem] h-[12rem] top-0 ${
                                            i % 2 !== 0 ? "left-[350%]" : "right-[350%]"
                                        }
                                        flex flex-col gap-2
                                        rounded-xl border border-primary-3 opacity-40`}
                                        style={{
                                            background:
                                                "linear-gradient(90deg, var(--color-neutral-100), var(--color-primary-100), var(--color-neutral-100))",
                                        }}
                                    >
                                        <figure>
                                            <img src="" />
                                        </figure>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
