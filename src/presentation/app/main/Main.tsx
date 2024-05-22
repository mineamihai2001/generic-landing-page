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
            <main className="h-full relative bg-neutral-0">
                <div
                    className="absolute w-[100%] h-[200%] top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0"
                    style={{
                        // background: "radial-gradient(circle at center,  transparent , #094fc2ff 120%)",
                        background: "radial-gradient(circle at center, var(--color-primary-300), transparent 50%)",
                    }}
                ></div>
                <div className="absolute opacity-75 border border-primary-3 w-[20rem] h-[20rem] rounded-full top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                <div className="absolute opacity-50 border border-primary-3 w-[40rem] h-[40rem] rounded-full top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                <div className="absolute opacity-25 border border-primary-3 w-[60rem] h-[60rem] rounded-full top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                <div
                    style={{
                        position: "relative",
                        zIndex: "1000",
                    }}
                >
                    <Navbar />
                    <Outlet />
                </div>
            </main>
        );
    })
);
