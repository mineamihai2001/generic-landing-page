import { FC } from "react";
import { FormConfig } from "../../../../domain/model/config";
import { Button } from "../../../components";

interface IProps {
    config: FormConfig;
}

export const ContactForm: FC<IProps> = ({ config }) => {
    return (
        <form
            className="md:w-1/2 w-full bg-neutral-1 p-8 relative
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
                        {config.title}
                    </div>
                    <div className="text-lg font-light text-neutral-5">{config.description}</div>
                </div>
                <div className="py-4 grid grid-cols-12 gap-6">
                    {config.fields.map((f, i) => {
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
    );
};
