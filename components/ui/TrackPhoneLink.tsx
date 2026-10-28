
'use client'

import type { MouseEvent, ReactNode } from 'react'

interface TrackPhoneLinkProps {
  phone: string
  className?: string
  children: ReactNode
}

declare global {
  interface Window {
    dataLayer?: unknown[][]
  }
}

export default function TrackPhoneLink({
  phone,
  className,
  children,
}: TrackPhoneLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const url = `tel:${phone}`

    let navigated = false

    const navigate = () => {
      if (navigated) return

      navigated = true
      window.location.href = url
    }

    if (!window.dataLayer) {
      navigate()
      return
    }

    window.dataLayer.push([
      'event',
      'conversion',
      {
        send_to: 'AW-18503190778/R3N0CM-ZsqsdEPqRgfdE',
        event_callback: navigate,
        event_timeout: 2000,
      },
    ])

    window.setTimeout(navigate, 2000)
  }

  return (
    <a
      href={`tel:${phone}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}
