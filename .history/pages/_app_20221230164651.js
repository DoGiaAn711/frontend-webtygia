import '../styles/globals.css';
// import MainLayout from '@components/layouts/mainLayout';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import React from 'react';

function MyApp({ Component, pageProps }) {
	const [queryClient] = React.useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			<MainLayout>
				{/* <Hydrate state={pageProps.dehydratedState}> */}
				<Component {...pageProps} />
				{/* </Hydrate> */}
			</MainLayout>
			{/* <ReactQueryDevtools initialIsOpen={true} /> */}
		</QueryClientProvider>
	);
}

export default MyApp;
