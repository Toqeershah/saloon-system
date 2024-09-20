//single saloon detail page

import SaloonStatusBadge from "@/app/components/SaloonStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import delay from "delay";

interface Props {
  params: { id: string };
}

const SaloonDetailPage = async ({ params }: Props) => {
  // if (typeof params.id !== 'number') notFound();

  const saloon = await prisma.saloon.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!saloon) notFound();
  await delay(2000);

  return (
    <div>
      <h2 className="mb-5 font-semi-bold text-lg">Single Saloon Detail Page</h2>
      <Heading as="h2">{saloon.title}</Heading>
      <Flex className="space-x-4" my='4'>
        <SaloonStatusBadge status={saloon.status} />
        <Text>{saloon.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt='6'>
       <ReactMarkdown>{saloon.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default SaloonDetailPage;
