"use client"

import { ThemeProvider } from 'next-themes'
import React, { useEffect } from 'react'

export default function Provider({ children }: {
  children: React.ReactNode
}) {

  // useEffect(() => {
  //   console.log("In here!!")

  //   const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  //   const bodyElement = document.querySelector("body")

  //   if (bodyElement) {
  //     const classes = bodyElement.classList
  //     console.log(darkThemeMq.matches)
  //     if (darkThemeMq.matches) {
  //       classes.add("dark")
  //     } else {
  //       classes.remove("dark")
  //     }
  //   } else {
  //     console.log("Body not found!")
  //   }

  // }, [])

  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  )
}
