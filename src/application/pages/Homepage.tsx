import { FC } from "react";
import { BackgroundGradientBottom, BackgroundGradientTop } from "../../presentation/components";
import { GlobalStore } from "../../infrastructure/store";
import { inject, observer } from "mobx-react";
import { Landing, Roadmap } from "../../presentation/app/main/home";
import { HomepageSection } from "../../domain/model/config";
import { PageBuilder } from "../../presentation/app/main/builder";

interface IProps {
    globalStore?: GlobalStore;
}

export const Homepage: FC<IProps> = inject("globalStore")(
    observer(({ globalStore }: IProps) => {
        const pageProps = globalStore?.getPageConfig("home")!;

        function getSection(section: HomepageSection) {
            switch (section.id) {
                case "landing":
                    return <Landing config={section} />;
                case "roadmap":
                    return <Roadmap config={section} />;
                default:
                    return <></>;
            }
        }

        return (
            <>
                <BackgroundGradientTop />
                <div className="w-full flex flex-col justify-center items-center relative z-50">
                    <PageBuilder
                        pageId="home"
                        sections={pageProps.sections}
                        sectionFactory={getSection}
                    />
                    {pageProps.sections.length > 1 && (
                        <div className="mt-64">
                            <BackgroundGradientBottom />
                        </div>
                    )}
                </div>
            </>
        );
    })
);
