import { inject, observer } from "mobx-react";
import { FC } from "react";
import { GlobalStore } from "../../../../infrastructure/store";
import { Button } from "../../../components";
import { LandingConfig } from "../../../../domain/model/config";
import { Card } from "../../../components/card";

interface IProps {
    globalStore?: GlobalStore;
    config: LandingConfig;
}

export const Landing: FC<IProps> = inject("globalStore")(
    observer(({ globalStore, config }) => {
        return (
            <div className="flex flex-col justify-start items-center gap-6 py-16 w-full">
                <div className="md:w-2/3 2xl:text-6xl md:text-5xl text-3xl font-medium text-center text-wrap">
                    {config?.title ?? ""}
                </div>
                <div className="md:w-3/4 2xl:text-xl md:text-lg text-base text-center text-wrap font-light text-neutral-5">
                    {config.description}
                </div>
                <div className="flex justify-center items-center gap-10">
                    {config.buttons.map((b, i) => {
                        return (
                            <Button className="px-8 mt-2 md:text-base text-xs" mode={b.mode} key={`home-button-${i}`}>
                                {b.text}
                            </Button>
                        );
                    })}
                </div>
                <div
                    className="md:w-2/3 w-full flex 2xl:flex-row md:flex-row flex-row 
                                justify-center items-center md:gap-20 gap-5 
                                my-8 px-5"
                >
                    <Card className="h-72 w-1/2" border scale gradient />
                    <Card className="h-72 w-1/2" border scale gradient />
                </div>
                <div className="w-full flex justify-center items-center gap-10 mt-auto px-5">
                    {(config.partners ?? []).map((p, i) => {
                        return (
                            <figure className="w-32" key={`home-figure-${i}`}>
                                <img src={globalStore?.darkMode ? p.dark : p.light} />
                            </figure>
                        );
                    })}
                </div>
            </div>
        );
    })
);
