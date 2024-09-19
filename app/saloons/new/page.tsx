'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewSaloonPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Title of Saloon' />
        </TextField.Root>
        <TextArea placeholder='Description of Saloon' />
        <Button>Submit New Saloon</Button>
    </div>
  )
}

export default NewSaloonPage