import '../styles/globals.css';
import MainLayout from '@components/layouts/mainLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps }) {
	const [queryClient] = React.useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}></QueryClientProvider>
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
		<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default MyApp;
