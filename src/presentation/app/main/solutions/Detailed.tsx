import { FC } from "react";
import { DetailedConfig } from "../../../../domain/model/config";
import { GlobalStore } from "../../../../infrastructure/store";

interface IProps {
    globalStore?: GlobalStore;
    config: DetailedConfig;
}

export const Detailed: FC<IProps> = () => {
    return <div>

    </div>;
};
