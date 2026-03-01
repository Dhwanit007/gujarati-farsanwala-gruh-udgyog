'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const PopupContext = createContext(null)

export function PopupProvider({ children }) {
  const [show, setShow] = useState(false)
  const [closing, setClosing] = useState(false)

  // Auto-show on page load after 1.8s
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  const openPopup = () => {
    setClosing(false)
    setShow(true)
  }

  const closePopup = () => {
    setClosing(true)
    setTimeout(() => { setShow(false); setClosing(false) }, 300)
  }

  return (
    <PopupContext.Provider value={{ show, closing, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  )
}

export function usePopup() {
  const ctx = useContext(PopupContext)
  if (!ctx) throw new Error('usePopup must be used inside PopupProvider')
  return ctx
}
