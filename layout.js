import './globals.css';
import MainHeader from './Components/mainHeader/main-header';
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
<MainHeader/>
        {children}
      </body>
    </html>
  );
}
