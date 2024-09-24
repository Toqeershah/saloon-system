// custom button for creation of new saloon

import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import SaloonStatusFilter from './SaloonStatusFilter'

const SaloonActions = () => {
  return (
    <Flex justify='between'>
      <SaloonStatusFilter />
      <Button>
        <Link href="/saloons/new">New Saloon</Link>
      </Button>
      </Flex>
  )
}

export default SaloonActions