export type ReactResponsivenessBreakpoints = Record<string, number | null>;
export type ReactResponsivenessMatches<T extends string = ""> = Record<T, {
    min: boolean;
    max: boolean;
    only: boolean;
}>;
