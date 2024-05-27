import { FC } from "react";
import { BackgroundShape } from "../../presentation/components/background/BackgroundShape";
import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../infrastructure/store";
import { SolutionsSection } from "../../domain/model/config";
import { Detailed, Summary } from "../../presentation/app/main/solutions";
import { PageBuilder } from "../../presentation/app/main/builder";
import { BackgroundGradientBottom } from "../../presentation/components";

interface IProps {
    globalStore?: GlobalStore;
}

export const Solutions: FC<IProps> = inject("globalStore")(
    observer(({ globalStore }) => {
        const pageProps = globalStore?.getPageConfig("solutions")!;

        function getSection(section: SolutionsSection) {
            switch (section.id) {
                case "summary":
                    return <Summary config={section} />;
                case "detailed":
                    return <Detailed config={section} />;
                default:
                    return <></>;
            }
        }

        return (
            <>
                <BackgroundShape />
                <div className="w-full flex flex-col justify-center items-center relative z-50">
                    <PageBuilder
                        pageId="solutions"
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
