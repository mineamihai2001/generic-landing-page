import { FC } from "react";
import { Button } from "../../presentation/components";
import { GlobalStore } from "../../infrastructure/store";
import { inject, observer } from "mobx-react";
import { BackgroundGradientTop } from "../../presentation/app/main/home";

interface IProps {
    globalStore?: GlobalStore;
}

export const Homepage: FC<IProps> = inject("globalStore")(
    observer(({ globalStore }: IProps) => {
        const pageProps = globalStore?.getPageProps("home")!;

        return (
            <>
                <BackgroundGradientTop />
                <div className="w-full flex justify-center items-start relative z-50">
                    <div className="flex flex-col justify-start items-center gap-6 py-16">
                        <span className="text-7xl font-medium">{pageProps?.title ?? ""}</span>
                        <span className="text-2xl font-light text-neutral-5">
                            {pageProps.description}
                        </span>
                        <div className="flex justify-center items-center gap-10">
                            {pageProps.buttons.map((b, i) => {
                                return (
                                    <Button
                                        className="px-8 mt-2"
                                        mode={b.mode}
                                        key={`home-button-${i}`}
                                    >
                                        {b.text}
                                    </Button>
                                );
                            })}
                        </div>
                        <div className="w-full flex justify-center items-center gap-20 my-8">
                            <div
                                className="h-72 w-1/2 bg-neutral-1 
                                        border-2 border-primary-3 rounded-xl
                                        dark:shadow-neutral-2
                                        ease-in-out duration-100
                                        hover:scale-[101%] hover:shadow-[0_0px_10px_5px_var(--color-primary-400)] dark:hover:hover:shadow-[0_0px_10px_5px_var(--color-primary-400)]"
                            ></div>
                            <div
                                className="h-72 w-1/2 bg-neutral-1 
                                        border-2 border-primary-3 rounded-xl
                                        dark:shadow-neutral-2
                                        ease-in-out duration-100
                                        hover:scale-[101%] hover:shadow-[0_0px_10px_5px_var(--color-primary-400)] dark:hover:hover:shadow-[0_0px_10px_5px_var(--color-primary-400)]"
                            ></div>
                        </div>
                        <div className="w-full flex justify-center items-center gap-10 mt-auto">
                            {(pageProps.partners ?? []).map((p, i) => {
                                return (
                                    <figure className="w-32" key={`home-figure-${i}`}>
                                        <img src={globalStore?.darkMode ? p.dark : p.light} />
                                    </figure>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    })
);
