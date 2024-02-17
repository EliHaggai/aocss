'use client'
import React from 'react'
import HeaderSection from '../header/HeaderSection';
import FooterSection from '../footer/FooterSection';
import { useAocssContext } from '@/context/AocssContext';
interface LayoutProps {
    children: any;
}
const Layout:React.FC<LayoutProps> = ({children}) => {
  const {isDarkTheme} = useAocssContext()
  return (
    <div className={`tl-inner-blog-body tl-inner-courses-body ${isDarkTheme ? 'dark_mode':''}`}>
      <HeaderSection/>
      {children}
      <FooterSection footerStyle='kb-10-footer'/>
    </div>
  )
}

export default Layout