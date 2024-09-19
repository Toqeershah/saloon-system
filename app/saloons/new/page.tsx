"use client";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SaloonForm {
  title: string;
  description: string;
}

const handleSubmit = () => {
  // Use the form data to create a new saloon in the database
};

const NewSaloonPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<SaloonForm>();
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/saloons", data);
            router.push("/saloons");
          } catch (error) {
            setError("Failed to Create Saloons");
          }
        })}
      >
        <TextField.Root>
          <TextField.Input
            placeholder="Title of Saloon"
            {...register("title")}
          />
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
    </div>
  );
};

export default NewSaloonPage;
