import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/assets/css/all.min.css';
import '../../public/assets/css/sharp-regular.min.css';
import '../../public/assets/css/sharp-solid.min.css';
import '../../public/assets/css/icofont.min.css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import "flag-icons/css/flag-icons.min.css";
import '../../public/assets/css/style.css';
import { ToastContainer } from 'react-toastify';
import { AocssProvider } from '@/context/AocssContext';
import ThemeBtnSection from '@/component/theme-btn/ThemeBtnSection';
import SidebarSection from '@/component/sidebar/SidebarSection';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AocssProvider>
        <body>
          <ThemeBtnSection/>
          <SidebarSection/>
          {children}
          <ToastContainer/>
        </body>
      </AocssProvider>
    </html>
  )
}
