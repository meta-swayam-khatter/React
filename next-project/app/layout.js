import './globals.css'
import { FormProvider } from '../context/FormContext'

export const metadata = {
  title: 'Form',
  description: 'Next.js form',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FormProvider>
          {children}
        </FormProvider>
      </body>
    </html>
  )
}

