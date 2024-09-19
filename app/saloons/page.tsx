import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const SaloonsPage = () => {
  return (
    <div>
      <Button><Link href='/saloons/new'>New Saloon</Link></Button>
    </div>
  )
}

export default SaloonsPage