//fetching/rendering all saloons table(page)

import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import { SaloonStatusBadge, Link } from "@/app/components";
import delay from "delay";
import SaloonActions from "./SaloonActions";
import { Saloon, Status } from "@prisma/client";
import NextLink from "next/link";
import { ArrowUpIcon } from "@radix-ui/react-icons";

interface Props {
  searchParams: { status: Status; orderBy: keyof Saloon };
}

const SaloonsPage = async ({ searchParams }: Props) => {

  const columns: { label: string; value: keyof Saloon; className?: string }[] =
    [
      { label: "Saloon", value: "title" },
      { label: "Status", value: "status", className: "hidden md:table-cell" },
      {
        label: "Created At",
        value: "createdAt",
        className: "hidden md:table-cell",
      },
    ];

  const statuses = Object.values(Status);

  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

    const orderBy = columns.map((column) => column.value).includes(searchParams.orderBy) ? { [searchParams.orderBy]: 'asc' }
    : undefined;

  const saloons = await prisma.saloon.findMany({
    where: { status },
    orderBy
  });
  await delay(1000);

  return (
    <div>
      <SaloonActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell key={column.value} className={column.className}>
                <NextLink
                  href={{
                    query: { ...searchParams, orderBy: column.value },
                  }}
                >
                  {column.label}
                </NextLink>
                {column.value === searchParams.orderBy && (
                  <ArrowUpIcon className="inline" />
                )}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {saloons.map((saloon) => (
            <Table.Row key={saloon.id}>
              <Table.Cell>
                <Link href={`/saloons/${saloon.id}`}>{saloon.title}</Link>
                <div className="block md:hidden">
                  <SaloonStatusBadge status={saloon.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <SaloonStatusBadge status={saloon.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {saloon.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default SaloonsPage;
