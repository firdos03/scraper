
'use client'

import type { MouseEvent, ReactNode } from 'react'

interface TrackWhatsAppLinkProps {
  href: string
  className?: string
  children: ReactNode
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      parameters?: {
        send_to?: string
        event_callback?: () => void
        event_timeout?: number
      }
    ) => void
  }
}

export default function TrackWhatsAppLink({
  href,
  className,
  children,
}: TrackWhatsAppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    let opened = false
    let timeoutId: number | undefined

    const openWhatsApp = () => {
      if (opened) return

      opened = true

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId)
      }

      window.open(href, '_blank', 'noopener,noreferrer')
    }

    if (typeof window.gtag !== 'function') {
      openWhatsApp()
      return
    }

    window.gtag('event', 'conversion', {
      send_to: 'AW-18503190778/oK-fCPmjtKsdEPqRgfdE',
      event_callback: openWhatsApp,
      event_timeout: 2000,
    })

    timeoutId = window.setTimeout(openWhatsApp, 2000)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}
