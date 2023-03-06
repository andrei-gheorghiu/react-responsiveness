import { ReactResponsivenessBreakpoints, ReactResponsivenessMatches } from "./types";
export declare const useReactResponsiveness: () => {
    addListeners: (breakpoints?: ReactResponsivenessBreakpoints) => void;
    isMin: (interval: string) => boolean;
    isMax: (interval: string) => boolean;
    isOnly: (interval: string) => boolean;
    currentInterval: string;
    matches: ReactResponsivenessMatches<string>;
};
