"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";
// import SimpleMDE from "react-simplemde-editor";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { createSaloonSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Saloon } from "@prisma/client";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

type SaloonFormData = z.infer<typeof createSaloonSchema>;

interface Props {
  saloon?: Saloon
}

const handleSubmit = () => {
  // Use the form data to create a new saloon in the database
};

const SaloonForm = ({saloon}: {saloon?: Saloon }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SaloonFormData>({
    resolver: zodResolver(createSaloonSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      await axios.post("/api/saloons", data);
      router.push("/saloons");
    } catch (error) {
      setIsSubmitting(false);
      setError("Failed to Create Saloons");
    }
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input defaultValue={saloon?.title}
            placeholder="Title of Saloon"
            {...register("title")}
          />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          defaultValue={saloon?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description of Saloon" {...field} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          Submit New Saloon {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default SaloonForm;