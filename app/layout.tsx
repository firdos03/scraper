
import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Providers } from './providers'

const LOGO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCp53XPGayNfp_VxII2sOKE9vgP7UCOsuhtrI9DOqEd4jR1l6OtechlBYqMeUAR1emEYxxMoa5oCevdYz3H9kYlKwblR6jDqvqgomHRUJfKZMvqRVE6qzOt_027-Usk9VLmPQPphFMER9iemnNXhrVOTNYFQDacbao16yclltTFB9KU8VNmGzHtgrTotbuSJo3eTPKlC-rUdm0gpcEUC3BDcBDG_wIzHRyDmdibfWLc80yZFGTHIvK5Cw'

const GOOGLE_TAG_ID = 'AW-18503190778'

export const metadata: Metadata = {
  title: 'AB Traders | Trusted Scrap Buyers in Hyderabad | +91 99510 74243',
  description:
    'Sell your recyclable scrap with a simple, transparent doorstep pickup process. AB Traders collects metal, electrical, vehicle, electronic and other scrap across Hyderabad.',
  icons: {
    icon: LOGO,
    apple: LOGO,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />

        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);',
          }}
        />
      </head>

      <body className="bg-surface font-body text-on-surface">
        <Providers>{children}</Providers>

        {/* Google Ads tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_TAG_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
