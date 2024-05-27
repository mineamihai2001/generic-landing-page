import { FC } from "react";
import { SummaryConfig } from "../../../../domain/model/config";
import { Separator } from "../../../components/separator";
import React from "react";
import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../../../infrastructure/store";

interface IProps {
    globalStore?: GlobalStore;
    config: SummaryConfig;
}

export const Summary: FC<IProps> = inject("globalStore")(
    observer(({ globalStore, config }) => {
        return (
            <div className="w-full relative flex flex-col justify-start items-center py-16 mt-96">
                <div className="flex flex-col justify-center items-center relative z-10">
                    <span className="text-3xl font-thin">{config.titleBox.subtitle ?? ""}</span>
                    <span className="text-4xl font-medium">{config.titleBox.title ?? ""}</span>
                </div>
                <div className="w-1/2 flex justify-center items-center gap-10 h-[10rem] mt-24">
                    {config.options.map((o, i) => {
                        return (
                            <React.Fragment key={`summary-option-${i}`}>
                                <div className="flex flex-col justify-center items-center text-center">
                                    {typeof o.image !== "undefined" && (
                                        <figure className="w-20 mb-4 bg-primary-0 p-3 rounded-full">
                                            <img
                                                src={
                                                    globalStore?.darkMode
                                                        ? o.image.dark
                                                        : o.image.light
                                                }
                                            />
                                        </figure>
                                    )}
                                    <div className="text-xl font-medium">{o.title}</div>
                                    <div className="text-neutral-5">{o.description}</div>
                                </div>
                                {i !== config.options.length - 1 && (
                                    <Separator vertical color="primary" />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        );
    })
);
