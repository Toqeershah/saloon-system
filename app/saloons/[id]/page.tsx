import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const SaloonDetailPage = async ({ params }: Props) => {

  // if (typeof params.id !== 'number') notFound();

  const singleSaloon = await prisma.saloon.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!singleSaloon) notFound();

  return (
    <div>
      <h2 className="font-bold text-lg">Saloon Detail Page</h2>
      <p>{singleSaloon.title}</p>
      <p>{singleSaloon.description}</p>
      <p>{singleSaloon.status}</p>
      <p>{singleSaloon.createdAt.toDateString()}</p>
    </div>
  );
};

export default SaloonDetailPage;
