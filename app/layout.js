import '../src/assets/scss/init.scss';
import 'prismjs/themes/prism-solarizedlight.css';
import SiteLayout from '../src/components/SiteLayout';

export const metadata = {
  title: 'Dinkar Pundir',
  description: 'Welcome to my punching bag.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><SiteLayout>{children}</SiteLayout></body>
    </html>
  );
}
