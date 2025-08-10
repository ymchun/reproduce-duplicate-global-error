'use client'

import NextError from 'next/error'
import type { FunctionComponent } from 'react'
import { useEffect } from 'react'

type Props = {
  error: Error & {
    digest?: string
  }
}

const GlobalError: FunctionComponent<Props> = ({}) => {
  return (
    <html>
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  )
}

export default GlobalError
