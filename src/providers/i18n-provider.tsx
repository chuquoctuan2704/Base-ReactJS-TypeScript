import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import { initI18n } from '../commons/services/i18n-service'
import { useAsyncError } from '../commons/hook/use-async-error'
import Debug from 'debug'

const debug = Debug('I18nProvider:')

export function I18nProvider({ children }: { children: ReactNode }): ReactElement {
  const throwError = useAsyncError()
  const [i18nInitialized, setI18nInitialized] = useState(false)
  useEffect(() => {
    initI18n(import.meta.env.DEV)
      .then(() => {
        debug('successfully initialized i18n provider')
        setI18nInitialized(true)
      })
      .catch((error: Error) => {
        throwError(new Error(`Failed to initialize i18n cause: ${error.message}`))
      })
  }, [])
  if (!i18nInitialized) {
    return <></>
  }
  return <>{children}</>
}
