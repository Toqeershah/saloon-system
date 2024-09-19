import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const SaloonActions = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link href="/saloons/new">New Saloon</Link>
      </Button>
      </div>
  )
}

export default SaloonActions