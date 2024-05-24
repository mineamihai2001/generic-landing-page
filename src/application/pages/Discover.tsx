import { inject, observer } from "mobx-react";
import { FC } from "react";
import { GlobalStore } from "../../infrastructure/store";
import { PageBuilder } from "../../presentation/app/main/builder";
import { BackgroundGradientBottom } from "../../presentation/components";
import { DiscoverSection } from "../../domain/model/config";
import { Projects } from "../../presentation/app/main/discover";

interface IProps {
    globalStore?: GlobalStore;
}

export const Discover: FC<IProps> = inject("globalStore")(
    observer(({ globalStore }) => {
        const pageProps = globalStore?.getPageConfig("discover")!;

        function getSection(section: DiscoverSection) {
            switch (section.id) {
                case "projects":
                    return <Projects config={section} />;
                default:
                    return <></>;
            }
        }

        return (
            <div className="w-full flex flex-col justify-center items-center relative z-50">
                <PageBuilder
                    pageId="discover"
                    sections={pageProps.sections}
                    sectionFactory={getSection}
                />
                {pageProps.sections.length > 1 && (
                    <div className="mt-64">
                        <BackgroundGradientBottom />
                    </div>
                )}
            </div>
        );
    })
);
