import '../styles/globals.css';
import MainLayout from '@components/layouts/mainLayout';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default MyApp;
