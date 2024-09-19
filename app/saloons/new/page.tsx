"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface SaloonForm {
  title: string;
  description: string;
}

const handleSubmit = () => {
  // Use the form data to create a new saloon in the database
};

const NewSaloonPage = () => {
    const router = useRouter()
  const { register, control, handleSubmit } = useForm<SaloonForm>();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/saloons', data)
        router.push('/saloons')
      })}
    >
      <TextField.Root>
        <TextField.Input placeholder="Title of Saloon" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description of Saloon" {...field} />
        )}
      />

      <Button>Submit New Saloon</Button>
    </form>
  );
};

export default NewSaloonPage;
