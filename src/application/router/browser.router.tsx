import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Contact, Homepage } from "../pages";
import { Main } from "../../presentation/app/main/Main";
import { Page } from "../../domain/model/IConfig";
import { ReactNode } from "react";
import { Error } from "../../presentation/app/error";

export function getBrowserRouter(pages: Page[]) {
    const elements: { [key: string]: ReactNode } = {
        home: <Homepage />,
        contact: <Contact />,
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

                    return p.index === true
                        ? {
                              index: p.index,
                              element: elements[p.id],
                          }
                        : {
                              path: p.id,
                              element: elements[p.id],
                          };
                })
                .filter((c) => c !== null),
            errorElement: <Error />,
        },
    ];

    return createBrowserRouter(routeObject);
}
