import { FC, useEffect, useState } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "../../components";
import { AppError } from "../../../application/error";

interface IProps {}

export const Error: FC<IProps> = () => {
    const routerError = useRouteError();
    const navigate = useNavigate();

    const [error, setError] = useState<AppError>(new AppError());

    useEffect(() => {
        setError(
            new AppError(
                (routerError as any)?.status,
                (routerError as any)?.statusText,
                (routerError as any)?.data,
                (routerError as any)?.error
            )
        );
    }, [routerError]);

    return (
        <div
            className="w-full h-full flex justify-center items-center"
            style={{
                background:
                    "linear-gradient(180deg, var(--color-neutral-200), var(--color-neutral-100))",
            }}
        >
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="w-full flex justify-start items-center gap-5">
                    <span>Status: </span>
                    <span className="ml-auto">{error.status}</span>
                </div>
                <div className="w-full flex justify-start items-center gap-5">
                    <span>Description: </span>
                    <span className="ml-auto">{error.statusText}</span>
                </div>
                <div className="w-full flex justify-start items-center gap-5">
                    <span>Message: </span>
                    <span className="ml-auto">{error.data}</span>
                </div>
                {import.meta.env.DEV && (
                    <div className="w-full flex justify-start items-center gap-5">
                        <span>Details: </span>
                        <span className="ml-auto">{JSON.stringify(error.error)}</span>
                    </div>
                )}
                <Button className="mt-4" onClick={() => navigate("/")}>
                    Take me Home
                </Button>
            </div>
        </div>
    );
};
