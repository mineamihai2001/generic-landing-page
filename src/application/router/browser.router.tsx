import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Homepage } from "../pages";
import { Main } from "../../presentation/app/main/Main";
import { Page } from "../../domain/model/IConfig";
import { ReactNode } from "react";

export function getBrowserRouter(pages: Page[]) {
    const elements: { [key: string]: ReactNode } = {
        home: <Homepage />,
    };

    const routeObject: RouteObject[] = [
        {
            path: "/",
            element: <Main />,
            children: pages
                .map((p): RouteObject | null => {
                    if (!(p.id in elements)) {
                        return null;
                    }

                    return {
                        index: p.index,
                        element: elements[p.id],
                    };
                })
                .filter((c) => c !== null),
        },
    ];

    return createBrowserRouter(routeObject);
}
