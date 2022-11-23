import React, { useState, createContext, useCallback, ReactElement, useEffect, useMemo } from 'react'
import {
  defaultPreferences,
  getPreferences,
  Preferences,
  setPreferences as setPreferencesService
} from '../commons/services/preference-service'
import { useAsyncError } from '../commons/hook/use-async-error'
import { debug } from '../commons/common-utils'

type PreferencesState = {
  preferences: Preferences
  setPreferences: typeof setPreferencesService
}

const defaultContext = { preferences: defaultPreferences, setPreferences: setPreferencesService }

export const PreferencesContext = createContext<PreferencesState>(defaultContext)

export function PreferencesProvider({ children }: { children: React.ReactNode }): ReactElement {
  const [preferencesState, setPreferencesState] = useState<Preferences>(defaultPreferences)
  const [preferencesLoaded, setPreferencesLoaded] = useState(false)
  const throwError = useAsyncError()

  useEffect(() => {
    getPreferences()
      .then((preferences) => {
        setPreferencesState(preferences)
        setPreferencesLoaded(true)
      })
      .catch((error: Error) => {
        throwError(new Error(`Failed to load preferences cause: ${error.stack || error.message}`))
      })
  }, [throwError])

  const setPreferences = useCallback(
    async (preferencesToSet: Preferences) => {
      const storePreferences = async (preferences: Preferences) => {
        await setPreferencesService(preferences)
      }

      return await storePreferences(preferencesToSet)
        .then(() => {
          debug('Succeeded to store preferences')
          setPreferencesState(preferencesToSet)
        })
        .catch((error: Error) => {
          throwError(new Error(`Failed to store preferences cause: ${error.stack ?? error.message}`))
        })
    },
    [throwError]
  )

  return useMemo(() => {
    if (preferencesLoaded) {
      return (
        <PreferencesContext.Provider value={{ preferences: preferencesState, setPreferences }}>
          {children}
        </PreferencesContext.Provider>
      )
    }
    return <></>
  }, [children, preferencesLoaded, preferencesState, setPreferences])
}
