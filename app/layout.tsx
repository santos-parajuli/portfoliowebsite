import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Santosh Parajuli | Portfolio',
	description:
		"Welcome to Santosh Parajuli's portfolio – your gateway to the world of innovative web development. As a skilled web developer specializing in JS frameworks, including React and Next.js, I bring dynamic and responsive solutions to the digital realm.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
