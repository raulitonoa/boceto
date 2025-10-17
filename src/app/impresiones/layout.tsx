import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boceto SL – Impresiones y Multiservicios',
  description: 'Servicios profesionales de impresión digital, offset, gran formato y personalización en Mallorca. Calidad garantizada y entrega rápida.',
  keywords: 'impresión digital, impresión offset, gran formato, vinilos, rotulación, cerámica personalizada, Mallorca, Illes Balears',
  openGraph: {
    title: 'Boceto SL – Impresiones y Multiservicios',
    description: 'Servicios profesionales de impresión digital, offset, gran formato y personalización en Mallorca.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}