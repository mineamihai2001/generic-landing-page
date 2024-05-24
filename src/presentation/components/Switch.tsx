import { FC } from "react";

interface IProps {}

// TODO: check
export const Switch: FC<IProps> = () => {
    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                onChange={() => {}}
                type="checkbox"
                defaultChecked={false}
                className="sr-only peer"
            />
            <div
                className="relative w-11 h-6 
                bg-neutral-3 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                dark:border-gray-600 peer-checked:bg-primary-3"
            ></div>
        </label>
    );
};
