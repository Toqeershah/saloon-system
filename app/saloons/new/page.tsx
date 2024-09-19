"use client";
import { Button, Callout, Text, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSaloonSchema } from "@/app/ValidationSchemas";
import { z } from "zod";


type SaloonForm = z.infer< typeof createSaloonSchema>

const handleSubmit = () => {
  // Use the form data to create a new saloon in the database
};

const NewSaloonPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit, formState: { errors } } = useForm<SaloonForm>({
    resolver: zodResolver(createSaloonSchema)
  });
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
        {errors.title && <Text color='red' as="p">{errors.title.message}</Text>}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description of Saloon" {...field} />
          )}
        />
        {errors.description && <Text color='red' as="p">{errors.description.message}</Text>}
        <Button>Submit New Saloon</Button>
      </form>
    </div>
  );
};

export default NewSaloonPage;
