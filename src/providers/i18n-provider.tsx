import React, { ReactElement, ReactNode, useEffect } from 'react'
import Debug from 'debug'
import { initI18n } from '../commons/services/i18n-sercive'
import { useAsyncError } from '../commons/hook/use-async-error'

const debug = Debug('i18n-provider')

export function I18nProvider({
	children,
}: {
  children: ReactNode;
}): ReactElement {
	const throwError = useAsyncError()
	useEffect(() => {
		initI18n(true)
			.then(() => {
				debug('successfully initialized i18n provider')
			})
			.catch((error: Error) => {
				throwError(
					new Error(`Failed to initialize i18n cause: ${error.message}`)
				)
			})
	}, [])
	return <>{children}</>
}
