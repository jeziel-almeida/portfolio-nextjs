import React, { ReactNode } from 'react'
import Header from './Header';
import jetbrains_mono from '../fonts/JetbrainsMono';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={jetbrains_mono.className}>
        <Header />
        {children}
        <div>Footer</div>
    </div>
  )
}

export default Layout