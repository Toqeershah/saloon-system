import { Button } from '@radix-ui/themes'
import React from 'react'

const DeleteSaloonButton = ({saloonId}: {saloonId: number}) => {
  return (
    <div>
        <Button color='red'>Delete Saloon</Button>
    </div>
  )
}

export default DeleteSaloonButton