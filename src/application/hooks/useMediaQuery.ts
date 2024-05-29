import { useState } from "react";

export function useMediaQuery(query: string): boolean {
    const [media, setMedia] = useState<boolean>(window.matchMedia(query).matches);

    window.matchMedia(query).addEventListener("change", (v) => {
        setMedia(v.matches);
    });

    return media;
}
