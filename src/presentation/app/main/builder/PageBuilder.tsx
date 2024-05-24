import { FC } from "react";
import { Section } from "../../../../domain/model/config";
import React from "react";
import { Separator } from "../../../components/separator";

interface IProps {
    pageId: string;
    sections: Section[];
    sectionFactory: (section: Section) => React.ReactNode;
}

export const PageBuilder: FC<IProps> = ({ pageId, sections, sectionFactory: getSection }) => {
    return sections
        .toSorted((a, b) => {
            return (a.order ?? 0) > (b.order ?? 1) ? 1 : 0;
        })
        .map((section, index) => {
            return section.show ?? true ? (
                <React.Fragment key={`${pageId}-section-${index}`}>
                    {section.separator === "before" && <Separator className="my-10" />}
                    {getSection(section)}
                    {section.separator === "after" && <Separator className="my-10" />}
                </React.Fragment>
            ) : (
                <React.Fragment></React.Fragment>
            );
        });
};
