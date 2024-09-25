import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import React from "react";
import { Link, SaloonStatusBadge } from "./components";

const LatestSaloons = async () => {
  const saloons = await prisma.saloon.findMany({
    orderBy: {
      createdAt: "asc",
    },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });

  return (
    <Card>
        <Heading size="4" mb="5">Latest Saloons Assigned to Branch Admins</Heading>
      <Table.Root>
        <Table.Body>
          {saloons.map((saloon) => (
            <Table.Row key={saloon.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" align="start" gap="2">
                    <Link href={`/saloons/${saloon.id}`}>{saloon.title}</Link>
                    <SaloonStatusBadge status={saloon.status} />
                  </Flex>
                  {saloon.assignedToUser && (
                    <Avatar src={saloon.assignedToUser.image!} fallback="?" />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestSaloons;
