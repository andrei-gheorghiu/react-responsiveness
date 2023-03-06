import {
  ReactResponsivenessBreakpoints,
  ReactResponsivenessMatches,
} from "./types";
import { Presets } from "./presets";
import { useAtom, useAtomValue, atom } from "jotai";

const matchesAtom = atom<ReactResponsivenessMatches<string>>({});
const currentIntervalAtom = atom(
  (get) =>
    Object.entries(get(matchesAtom)).find(([, value]) => value?.only)?.[0] || ""
);

export const useReactResponsiveness = () => {
  const [matches, setMatches] = useAtom(matchesAtom);
  const currentInterval = useAtomValue(currentIntervalAtom);

  const addListeners = (
    breakpoints: ReactResponsivenessBreakpoints = Presets.Bootstrap_5
  ) => {
    const intervals: Record<string, { min: string; max: string }> =
      Object.entries(breakpoints)
        .sort(([, a], [, b]) => (a || 0) - (b || 0))
        .reduce((out, [key, min], i, arr) => {
          out[key] = {
            min: min ? `(min-width: ${min}px)` : "",
            max: arr[i + 1]?.[1]
              ? `(max-width: ${(arr[i + 1][1] as number) - 0.1}px)`
              : "",
          };
          return out;
        }, {} as Record<string, { min: string; max: string }>);
    setMatches((prev) =>
      Object.assign(
        prev,
        ...Object.keys(intervals).map((_) => ({
          [_]: { min: false, max: false, only: false },
        }))
      )
    );
    Object.entries(intervals).forEach(([interval, mediaQueries]) => {
      const queryLists: Record<"min" | "max", MediaQueryList> = {
        min: window.matchMedia(mediaQueries.min),
        max: window.matchMedia(mediaQueries.max),
      };
      Object.entries(queryLists).forEach(([key, mediaQueryList]) => {
        const listener = ({ matches: val }: { matches: boolean }) => {
          setMatches((prev) => {
            if (prev[interval]?.[key as "min" | "max"] === val) {
              return prev;
            }
            const { min, max } = {
              ...prev[interval],
              [key]: val,
            } as {
              min: boolean;
              max: boolean;
            };
            return {
              ...prev,
              [interval]: { min, max, only: min && max },
            };
          });
        };
        mediaQueryList.addEventListener("change", listener);
        listener(mediaQueryList);
      });
    });
  };

  const getMatches = (
    interval: string,
    type: "only" | "min" | "max" = "only"
  ) => matches[interval]?.[type] || false;

  const isMin = (interval: string) => getMatches(interval, "min");
  const isMax = (interval: string) => getMatches(interval, "max");
  const isOnly = (interval: string) => getMatches(interval);

  return { addListeners, isMin, isMax, isOnly, currentInterval, matches };
};
