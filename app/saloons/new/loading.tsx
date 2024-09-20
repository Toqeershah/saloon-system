//loading new saloon page when creating new saloon

import { Box } from '@radix-ui/themes'
import React from 'react'
import {Skeleton} from '@/app/components' 

const LoadingNewSaloonPage = () => {
  return (
    <div>
      <Box className='max-w-xl'>
        <Skeleton />
        <Skeleton height='20rem' />
      </Box>
    </div>
  )
}

export default LoadingNewSaloonPage