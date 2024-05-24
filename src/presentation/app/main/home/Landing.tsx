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
            <div className="flex flex-col justify-start items-center gap-6 py-16">
                <span className="text-7xl font-medium">{config?.title ?? ""}</span>
                <span className="text-2xl font-light text-neutral-5">{config.description}</span>
                <div className="flex justify-center items-center gap-10">
                    {config.buttons.map((b, i) => {
                        return (
                            <Button className="px-8 mt-2" mode={b.mode} key={`home-button-${i}`}>
                                {b.text}
                            </Button>
                        );
                    })}
                </div>
                <div className="w-full flex justify-center items-center gap-20 my-8">
                    <Card />
                    <Card />
                </div>
                <div className="w-full flex justify-center items-center gap-10 mt-auto">
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
