import { inject, observer } from "mobx-react";
import { FC } from "react";
import { GlobalStore } from "../../infrastructure/store";
import { Button } from "../../presentation/components";
import { BackgroundGradientBottom } from "../../presentation/app/main/home";

interface IProps {
    globalStore?: GlobalStore;
}

export const Contact: FC<IProps> = inject("globalStore")(
    observer(({ globalStore }) => {
        const pageProps = globalStore?.getPageProps("contact")!;

        return (
            <>
                <div className="w-full min-h-full flex justify-center items-start relative z-50">
                    <div className="w-full flex flex-col justify-center items-center py-16">
                        <form
                            className="w-1/2 bg-neutral-1 p-8 relative
                                border-2 border-primary-3 rounded-xl
                                shadow-md dark:shadow-neutral-2 
                                overflow-hidden"
                        >
                            <div
                                className="absolute w-[100%] h-[100%] top-[0%] left-[0%] translate-x-[-20%] z-0"
                                style={{
                                    background:
                                        "linear-gradient(90deg, var(--color-primary-100), var(--color-neutral-100))",
                                }}
                            ></div>
                            <div className="relative flex flex-col gap-6 my-4">
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <div className="text-4xl font-semibold  flex justify-center items-center">
                                        {pageProps.form.title}
                                    </div>
                                    <div className="text-lg font-light text-neutral-5">
                                        {pageProps.form.description}
                                    </div>
                                </div>
                                <div className="py-4 grid grid-cols-12 gap-6">
                                    {pageProps.form.fields.map((f, i) => {
                                        let cols = "";
                                        switch (true) {
                                            case f.cols === 6:
                                                cols = "col-span-6";
                                                break;
                                            case f.cols === 12:
                                                cols = "col-span-12";
                                                break;
                                            default:
                                                cols = "col-span-12";
                                                break;
                                        }
                                        return f.type === "textarea" ? (
                                            <textarea
                                                key={`contact-form-field-${i}`}
                                                className={`rounded-lg py-3 px-6 ${cols}`}
                                                rows={2}
                                                placeholder={f.placeholder ?? ""}
                                                id={f.id}
                                            />
                                        ) : (
                                            <input
                                                key={`contact-form-field-${i}`}
                                                className={`rounded-full py-3 px-6 ${cols}`}
                                                placeholder={f.placeholder ?? ""}
                                                id={f.id}
                                            />
                                        );
                                    })}
                                </div>
                                <div className="w-full flex justify-center items-center">
                                    <Button className="w-1/4">Send</Button>
                                </div>
                            </div>
                        </form>
                        <div className="my-10">
                            <span className="text-neutral-6">Or reach us on our socials</span>
                        </div>
                        <div className="flex w-full items-center justify-center gap-40">
                            {pageProps.social.map((s, i) => {
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
                                            <img
                                                src={
                                                    globalStore?.darkMode
                                                        ? s.icon.dark
                                                        : s.icon.light
                                                }
                                            />
                                        </figure>
                                        <span className="text-neutral-6">{s.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <BackgroundGradientBottom />
            </>
        );
    })
);
