import { FC } from "react";
import { ProjectsConfig } from "../../../../domain/model/config";
import { Card } from "../../../components/card";

interface IProps {
    config: ProjectsConfig;
}

export const Projects: FC<IProps> = ({ config }) => {
    return (
        <div>
            <div>
                {typeof config.titleBox !== "undefined" && (
                    <div className="relative flex flex-col justify-center items-center py-20">
                        <div className="flex flex-col justify-center items-center relative z-10">
                            <span className="text-4xl font-medium">
                                {config.titleBox.title ?? ""}
                            </span>
                        </div>
                        {typeof config.titleBox.backgroundTitle !== "undefined" && (
                            <span
                                className="text-[7rem] font-black text-neutral-0 absolute z-0  opacity-70"
                                style={{
                                    textShadow: "var(--color-primary-400) 0 0 3px",
                                }}
                            >
                                {config.titleBox.backgroundTitle}
                            </span>
                        )}
                    </div>
                )}
            </div>
            <div className="grid grid-cols-12 px-20 py-10 gap-10">
                {config.projects.map((p, i) => {
                    return (
                        <Card
                            key={`discover-project-${i}`}
                            gradient
                            className="col-span-4 py-10 px-16 cursor-pointer
                                        border-[1px] border-neutral-3
                                        flex flex-col items-start justify-center gap-6"
                        >
                            <div className="flex justify-start items-center gap-5">
                                <figure className="w-1/4">
                                    <img className="rounded-full" src={p.image} />
                                </figure>
                                <div className="flex flex-col justify-center items-start">
                                    <span className="text-lg">{p.name}</span>
                                    <span className="text-neutral-5 font-light">{p.subtitle}</span>
                                </div>
                            </div>
                            <div className="text-neutral-6 text-sm">{p.description}</div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};
