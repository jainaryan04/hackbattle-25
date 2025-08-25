import './globals.css';
import { Press_Start_2P } from 'next/font/google';

export const metadata = { title: 'About', description: 'About page' };

const pressStart2P = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-press2p',
    display: 'swap',
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={pressStart2P.className}>{children}</body>
        </html>
    );
}
