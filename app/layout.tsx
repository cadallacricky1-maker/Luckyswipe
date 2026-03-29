import './globals.css';

export const metadata = {
  title: 'Lucky Swipe',
  description: 'Swipe for luck!'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}