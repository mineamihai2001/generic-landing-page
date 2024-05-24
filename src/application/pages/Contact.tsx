import { inject, observer } from "mobx-react";
import { FC } from "react";
import { GlobalStore } from "../../infrastructure/store";
import { Button } from "../../presentation/components";
import { BackgroundGradientBottom } from "../../presentation/components/background/BackgroundGradientBottom";
import { ContactSection } from "../../domain/model/config";
import { ContactForm } from "../../presentation/app/main/contact/ContactForm";
import { Social } from "../../presentation/app/main/contact/Social";
import React from "react";
import { Separator } from "../../presentation/components/separator";

interface IProps {
    globalStore?: GlobalStore;
}

export const Contact: FC<IProps> = inject("globalStore")(
    observer(({ globalStore }) => {
        const pageProps = globalStore?.getPageConfig("contact")!;

        function getSection(section: ContactSection) {
            switch (section.id) {
                case "form":
                    return <ContactForm config={section} />;
                case "social":
                    return <Social config={section} />;
                default:
                    return <></>;
            }
        }

        return (
            <>
                <div className="w-full flex justify-center items-start relative z-50">
                    <div className="w-full flex flex-col justify-center items-center py-16">
                        {pageProps.sections
                            .toSorted((a, b) => {
                                return (a.order ?? 0) > (b.order ?? 1) ? 1 : 0;
                            })
                            .map((section, index) => {
                                return section.show ?? true ? (
                                    <React.Fragment key={`home-section-${index}`}>
                                        {section.separator === "before" && (
                                            <Separator className="my-10" />
                                        )}
                                        {getSection(section)}
                                        {section.separator === "after" && (
                                            <Separator className="my-10" />
                                        )}
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment></React.Fragment>
                                );
                            })}
                    </div>
                </div>
                <BackgroundGradientBottom />
            </>
        );
    })
);
