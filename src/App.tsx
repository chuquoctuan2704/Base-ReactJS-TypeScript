import React, { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'

const queryClient = new QueryClient()

export function App(): ReactElement {
	return (
		<QueryClientProvider client={queryClient}>
			<div />
		</QueryClientProvider>
	)
}
