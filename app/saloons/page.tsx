import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const SaloonsPage = async () => {
  const saloons = await prisma.saloon.findMany({})
  return (
    <div>
      <div className="mb-5">
      <Button>
        <Link href="/saloons/new">New Saloon</Link>
      </Button>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Saloon</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Created At</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {saloons.map(saloon => (
            <Table.Row key={saloon.id}>
              <Table.Cell>
                {saloon.title}
                <div className="block md:hidden">{saloon.status}</div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">{saloon.status}</Table.Cell>
              <Table.Cell className="hidden md:table-cell">{saloon.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default SaloonsPage;
