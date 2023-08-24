import * as React from 'react'
import type {
  Matcher,
  ReactResponsivenessBreakpoints,
  ResponsivenessContextValue
} from './types'
import { Presets } from './presets'

interface ResponsivenessContextProps {
  children?: React.ReactNode
  breakpoints?: ReactResponsivenessBreakpoints
}

const Responsiveness = React.createContext<ResponsivenessContextValue>(
  {} as ResponsivenessContextValue
)

export const useResponsiveness = () => React.useContext(Responsiveness)

export const ResponsivenessProvider: React.FC<ResponsivenessContextProps> = ({
  children,
  breakpoints = Presets.Bootstrap_5
}: ResponsivenessContextProps) => {
  const [currentInterval, setCurrentInterval] =
    React.useState<keyof typeof breakpoints>('')
  const intervals = React.useMemo(
    () =>
      Object.entries(breakpoints)
        .sort(([, a], [, b]) => (a || 0) - (b || 0))
        .reduce(
          (out, [key, min], i, arr) => {
            out[key] = {
              min: min ? `(min-width: ${min}px)` : '',
              max: arr[i + 1]?.[1]
                ? `(max-width: ${(arr[i + 1][1] as number) - 0.1}px)`
                : ''
            }
            return out
          },
          {} as Record<keyof typeof breakpoints, { min: string; max: string }>
        ),
    [breakpoints]
  )
  const [matches, setMatches] = React.useState<
    Record<keyof typeof breakpoints, Matcher>
  >(
    Object.assign(
      {},
      ...Object.keys(intervals).map((_) => ({
        [_]: { min: false, max: false, only: false }
      }))
    )
  )
  React.useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      Object.entries(intervals).forEach(([interval, mediaQueries]) => {
        const queryLists: Record<'min' | 'max', MediaQueryList> = {
          min: window.matchMedia(mediaQueries.min),
          max: window.matchMedia(mediaQueries.max)
        }
        Object.entries(queryLists).forEach(([key, mediaQueryList]) => {
          const listener = ({ matches: val }: { matches: boolean }) =>
            setMatches((prev) => {
              if (prev[interval]?.[key as 'min' | 'max'] === val) {
                return prev
              }
              const { min, max } = {
                ...prev[interval],
                [key]: val
              } as Matcher
              interval !== currentInterval &&
                min &&
                max &&
                setCurrentInterval(interval)
              return {
                ...prev,
                [interval]: { min, max, only: min && max }
              }
            })
          mediaQueryList.addEventListener('change', listener)
          listener(mediaQueryList)
        })
      })
    }
  }, [breakpoints])

  const isMin = (interval: string): boolean => matches[interval]?.min || false
  const isMax = (interval: string): boolean => matches[interval]?.min || false
  const isOnly = (interval: string): boolean =>
    (matches[interval]?.min && matches[interval]?.max) || false
  return (
    <Responsiveness.Provider
      value={{ isMin, isMax, isOnly, matches, currentInterval }}
    >
      {children}
    </Responsiveness.Provider>
  )
}
