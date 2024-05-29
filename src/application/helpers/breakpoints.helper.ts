type TBreakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export class Breakpoints {
    private static map: Map<TBreakpoint, number> = new Map<TBreakpoint, number>([
        ["xs", 0],
        ["sm", 640],
        ["md", 768],
        ["lg", 1024],
        ["xl", 1280],
        ["2xl", 1536],
    ]);

    static up(breakpoint: TBreakpoint): string {
        return `(min-width: ${this.map.get(breakpoint)!}px)`;
    }

    static down(breakpoint: TBreakpoint): string {
        return `(max-width: ${this.map.get(breakpoint)!}px)`;
    }
}
