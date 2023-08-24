import * as React from 'react'

export type ReactResponsivenessBreakpoints = Record<string, number | null>

export type Matcher = {
  max: boolean
  min: boolean
  only: boolean
}

export interface ResponsivenessContextValue {
  children?: React.ReactNode
  matches: Record<string, Matcher>
  currentInterval: string
  isMin: (interval: string) => boolean
  isMax: (interval: string) => boolean
  isOnly: (interval: string) => boolean
}
