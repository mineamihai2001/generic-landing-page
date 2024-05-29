import { FC } from "react";
import { SocialConfig } from "../../../../domain/model/config";
import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../../../infrastructure/store";

interface IProps {
    globalStore?: GlobalStore;
    config: SocialConfig;
}

export const Social: FC<IProps> = inject("globalStore")(
    observer(({ globalStore, config }) => {
        return (
            <div className="flex flex-col justify-center items-center">
                <div className="my-10">
                    <span className="text-neutral-6">{config.text ?? ""}</span>
                </div>
                <div className="flex md:flex-row flex-col w-full items-center justify-center md:gap-40 gap-7">
                    {config.networks.map((s, i) => {
                        return (
                            <div
                                key={`contact-social-${i}`}
                                className="flex justify-center items-center gap-2 px-4 py-2
                                            border border-neutral-6 rounded-full
                                            shadow-md dark:shadow-neutral-2
                                            cursor-pointer
                                            "
                            >
                                <figure className="w-6">
                                    <img src={globalStore?.darkMode ? s.icon.dark : s.icon.light} />
                                </figure>
                                <span className="text-neutral-6">{s.text}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    })
);
