import { FC } from "react";
import { Navbar } from "./nav";
import { Outlet } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../../infrastructure/store";

interface IProps {
    globalStore?: GlobalStore;
}

export const Main: FC<IProps> = inject("globalStore")(
    observer(({ globalStore }) => {
        return (
            <main className="min-h-full bg-neutral-0">
                <Navbar />
                <Outlet />
            </main>
        );
    })
);
