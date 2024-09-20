//single saloon detail page

import SaloonStatusBadge from "@/app/components/SaloonStatusBadge";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import delay from "delay";
import Link from "next/link";
import { Pencil2Icon } from "@radix-ui/react-icons";

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
    <>
      <div>
        <h2 className="mb-5 font-semi-bold text-lg">
          Single Saloon Detail Page
        </h2>
      </div>
      <Grid columns={{ initial: "1", md: "2" }} gap="5">
        <Box>
          <Heading as="h2">{saloon.title}</Heading>
          <Flex className="space-x-4" my="4">
            <SaloonStatusBadge status={saloon.status} />
            <Text>{saloon.createdAt.toDateString()}</Text>
          </Flex>
          <Card className="prose" mt="6">
            <ReactMarkdown>{saloon.description}</ReactMarkdown>
          </Card>
        </Box>
        <Box>
          <Button>
            <Pencil2Icon />
            <Link href={`/saloons/${saloon.id}/edit`}>Edit Saloon</Link>
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default SaloonDetailPage;
