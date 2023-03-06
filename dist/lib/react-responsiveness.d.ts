import { ReactResponsivenessBreakpoints, ReactResponsivenessMatches } from "./types";
export declare const useReactResponsiveness: () => {
    addListeners: (breakpoints?: ReactResponsivenessBreakpoints) => void;
    matches: ReactResponsivenessMatches<string>;
    currentInterval: string;
};
