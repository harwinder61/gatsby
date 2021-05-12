import React from "react"
import HeaderHome from './headerHome'
import FooterHome from './footerHome'

export default function Layout({ children }) {
  return (
    <>
      <HeaderHome />
        {children}
      <FooterHome />
    </>
  )
}