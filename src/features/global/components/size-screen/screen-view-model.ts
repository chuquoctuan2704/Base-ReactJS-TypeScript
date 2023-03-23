import { useEffect, useState } from 'react'

export const screenSizes = {
  xs: '375px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
}

export const devices = {
  screenXs: `(max-width: ${screenSizes.xs})`,
  screenSm: `(max-width: ${screenSizes.sm})`,
  screenMd: `(max-width: ${screenSizes.md})`,
  screenLg: `(max-width: ${screenSizes.lg})`,
  screenXl: `(max-width: ${screenSizes.xl})`,
  screenXxl: `(max-width: ${screenSizes.xxl})`
}

export function useMedia(mediaQuery: string) {
  const match = () => {
    if (!window.matchMedia) {
      return false
    }
    return window.matchMedia(mediaQuery).matches
  }

  const [value, setValue] = useState(match)

  useEffect(() => {
    const handler = () => setValue(match)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  })
  return value
}
