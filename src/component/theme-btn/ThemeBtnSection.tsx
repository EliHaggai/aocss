'use client'
import { useAocssContext } from '@/context/AocssContext';
import React from 'react';

const ThemeBtnSection = () => {
  const {isDarkTheme,toggleTheme} = useAocssContext()

  return (
    <div
      className={`tl-dark-light-view-box ${isDarkTheme ? '' : 'has-clicked'}`}
      onClick={toggleTheme}
    >
      <div className={`tl-dark-light-view-toogle-dot ${isDarkTheme ? 'pos-bottom' : ''}`}></div>
    </div>
  );
};

export default ThemeBtnSection;

