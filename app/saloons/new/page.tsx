'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const NewSaloonPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Title of Saloon' />
        </TextField.Root>
        <SimpleMDE placeholder='Description of Saloon' />
        <Button>Submit New Saloon</Button>
    </div>
  )
}

export default NewSaloonPage