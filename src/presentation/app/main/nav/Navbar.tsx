import { FC, useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../../../infrastructure/store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton } from "../../../components";
import { Page } from "../../../../domain/model/config";
import { useMediaQuery } from "../../../../application/hooks";
import { Breakpoints } from "../../../../application/helpers";
import { Hamburger } from "./Hamburger";

interface IProps {
    globalStore?: GlobalStore;
}

export const Navbar: FC<IProps> = inject("globalStore")(
    observer(({ globalStore }) => {
        const navigate = useNavigate();
        const location = useLocation();
        const isLarge = useMediaQuery(Breakpoints.up("lg"));

        const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

        const toggleDarkMode = () => {
            globalStore?.setDarkMode(!globalStore.darkMode);
        };

        const navigateHome = () => {
            setIsMenuOpen((_) => false);
            navigate("/");
        };

        const navPages = (globalStore?.getConfig().app.main.pages ?? []).filter((p) => p.navItem);

        return isLarge ? (
            <div className="flex justify-start items-center px-8 py-6 border-b-[0.5px] border-neutral-3 relative z-50">
                <div
                    className="flex justify-center items-center gap-4 cursor-pointer"
                    onClick={navigateHome}
                >
                    {typeof globalStore?.getConfig().app.brand.logo !== "undefined" && (
                        <img className="w-12" src={globalStore?.getConfig().app.brand.logo} />
                    )}
                    <span className="text-4xl">{globalStore?.getConfig().app.brand.name}</span>
                </div>
                <div className="flex justify-center items-center gap-14 mx-auto">
                    {navPages.map((page: Page, i) => {
                        return (
                            <div key={`navbar-tab-${i}`} className="hover:underline">
                                <Link to={page.index ? "/" : page.id}>
                                    <span className="font-normal">{page.display}</span>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-center items-center gap-4">
                    {(globalStore?.getConfig().app.main.nav?.buttons ?? []).map((b, i) => {
                        return (
                            <Button mode={b.mode} key={`nav-button-${i}`}>
                                {b.text}
                            </Button>
                        );
                    })}
                    <IconButton
                        icon={<FontAwesomeIcon icon={faCircleHalfStroke} size="xl" />}
                        onClick={toggleDarkMode}
                    />
                </div>
            </div>
        ) : (
            <>
                <div className="relative z-50">
                    <div className="flex justify-center items-center px-8 py-6 border-b-[0.5px] border-neutral-3">
                        <Hamburger onClick={() => setIsMenuOpen(true)} />
                        <div
                            className="mx-auto flex justify-center items-center gap-4 cursor-pointer"
                            onClick={navigateHome}
                        >
                            {typeof globalStore?.getConfig().app.brand.logo !== "undefined" && (
                                <img
                                    className="w-14"
                                    src={globalStore?.getConfig().app.brand.logo}
                                />
                            )}
                            <span className="text-5xl">
                                {globalStore?.getConfig().app.brand.name}
                            </span>
                        </div>
                    </div>
                </div>
                <>
                    {/* OVERLAY */}
                    <div
                        className="absolute h-full w-full top-0 left-0 bg-neutral-0 z-[900]"
                        style={{
                            opacity: !isMenuOpen ? "0" : ".5",
                            transition: "all .2s",
                            visibility: !isMenuOpen ? "hidden" : "visible",
                        }}
                    ></div>
                    {/* DRAWER */}
                    <div
                        className="absolute h-full w-80 bg-neutral-1 top-0 left-0 z-[1000] border-r-[1px] border-neutral-3"
                        style={{
                            opacity: !isMenuOpen ? "0" : "1",
                            transition: "all .2s",
                            visibility: !isMenuOpen ? "hidden" : "visible",
                        }}
                    >
                        <div className="flex flex-col justify-start items-center relative z-50 h-full">
                            <div className="flex justify-center items-center w-full py-6 border-b-[1px] border-neutral-3">
                                <div
                                    className="flex justify-center items-center gap-4 cursor-pointer mr-auto ml-auto"
                                    onClick={navigateHome}
                                >
                                    {typeof globalStore?.getConfig().app.brand.logo !==
                                        "undefined" && (
                                        <img
                                            className="w-8"
                                            src={globalStore?.getConfig().app.brand.logo}
                                        />
                                    )}
                                    <span className="text-3xl">
                                        {globalStore?.getConfig().app.brand.name}
                                    </span>
                                </div>
                                <div
                                    className="cursor-pointer text-neutral-8 p-2 pr-5"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} size={"1x"} />
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center mb-10">
                                {navPages.map((page: Page, i) => {
                                    return (
                                        <div
                                            key={`navbar-tab-${i}`}
                                            className={`w-full border-b-[1px] border-neutral-3 py-5 px-5 ${
                                                location.pathname === "/" + page.id ||
                                                (location.pathname === "/" && page.index === true)
                                                    ? "border-r-4 border-r-primary-3"
                                                    : ""
                                            }`}
                                        >
                                            <Link to={page.index ? "/" : page.id}>
                                                <span className="font-normal">{page.display}</span>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col justify-center items-center gap-6 px-5">
                                {(globalStore?.getConfig().app.main.nav?.buttons ?? []).map(
                                    (b, i) => {
                                        return (
                                            <Button mode={b.mode} key={`nav-button-${i}`}>
                                                {b.text}
                                            </Button>
                                        );
                                    }
                                )}
                            </div>
                            <div
                                className="w-full mt-auto mb-10 flex justify-start items-center gap-4 px-5
                                                "
                            >
                                <div>Theme</div>
                                <div className="ml-auto">
                                    <IconButton
                                        icon={
                                            <FontAwesomeIcon icon={faCircleHalfStroke} size="xl" />
                                        }
                                        onClick={toggleDarkMode}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </>
        );
    })
);
