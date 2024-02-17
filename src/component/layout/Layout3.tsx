'use client'
import React from 'react'
import HeaderSection2 from '../header/HeaderSection2';
import FooterSection2 from '../footer/FooterSection2';
import { useAocssContext } from '@/context/AocssContext';
interface LayoutProps {
    children: any;
}
const Layout3:React.FC<LayoutProps> = ({children}) => {
  const {isDarkTheme} = useAocssContext()
  return (
    <div className={`tl-3-inner tl-inner-courses-body ${isDarkTheme ? 'dark_mode':''}`}>
      <HeaderSection2 style='position-relative' logo="assets/images/logos/logo.png"/>
      {children}
      <FooterSection2 
      darkLogo="assets/images/logos/logo-dark.png"
      lightLogo="assets/images/logos/logo.png"
      />
    </div>
  )
}

export default Layout3