import { FC } from "react";
import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../../../infrastructure/store";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton } from "../../../components";
import { Page } from "../../../../domain/model/config";

interface IProps {
    globalStore?: GlobalStore;
}

export const Navbar: FC<IProps> = inject("globalStore")(
    observer(({ globalStore }) => {
        const navigate = useNavigate();

        const toggleDarkMode = () => {
            globalStore?.setDarkMode(!globalStore.darkMode);
        };

        const navPages = (globalStore?.getConfig().app.main.pages ?? []).filter((p) => p.navItem);

        return (
            <div className="flex justify-start items-center px-8 py-6 border-b-[0.5px] border-neutral-3 relative z-50">
                <div
                    className="flex justify-center items-center gap-4 cursor-pointer"
                    onClick={() => navigate("/")}
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
        );
    })
);
