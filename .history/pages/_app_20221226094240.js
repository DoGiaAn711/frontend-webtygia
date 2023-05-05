import '../styles/globals.css';
import MainLayout from '@components/layouts/mainLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps }) {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
}

export default MyApp;
