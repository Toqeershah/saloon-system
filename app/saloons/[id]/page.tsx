import SaloonStatusBadge from "@/app/components/SaloonStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const SaloonDetailPage = async ({ params }: Props) => {
  // if (typeof params.id !== 'number') notFound();

  const saloon = await prisma.saloon.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!saloon) notFound();

  return (
    <div>
      <h2 className="mb-5 font-semi-bold text-lg">Single Saloon Detail Page</h2>
      <Heading as="h2">{saloon.title}</Heading>
      <Flex className="space-x-4" my='4'>
        <SaloonStatusBadge status={saloon.status} />
        <Text>{saloon.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
       <p>{saloon.description}</p>
      </Card>
    </div>
  );
};

export default SaloonDetailPage;
