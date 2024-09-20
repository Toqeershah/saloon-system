//loading new saloon page when creating new saloon

import { Box } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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