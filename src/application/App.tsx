import { RouterProvider } from "react-router-dom";
import { getBrowserRouter } from "./router";
import { GlobalStore } from "../infrastructure/store";
import { inject, observer } from "mobx-react";
import { FC, useEffect, useState } from "react";

interface IProps {
    globalStore?: GlobalStore;
}

export const App: FC<IProps> = inject("globalStore")(
    observer(({ globalStore }: IProps) => {
        const rootElement = document.getElementById("root");

        const [isLoaded, setIsLoaded] = useState<boolean>(false);

        useEffect(() => {
            if (globalStore?.darkMode) {
                document.documentElement.style.colorScheme = "dark";
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.style.colorScheme = "light";
                document.documentElement.classList.remove("dark");
            }
        }, [globalStore?.darkMode]);

        useEffect(() => {
            globalStore
                ?.bootstrap()
                .then((_) => {
                    setIsLoaded(true);
                })
                .catch((err) => {
                    // TODO: handle bootstrap error
                });
        }, []);

        return isLoaded ? (
            <RouterProvider
                router={getBrowserRouter(globalStore?.getConfig().app.main.pages ?? [])}
            />
        ) : (
            <div className="w-full h-full flex justify-center items-center">Loading...</div>
        );
    })
);
