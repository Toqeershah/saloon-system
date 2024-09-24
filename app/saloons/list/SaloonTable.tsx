import { SaloonStatusBadge } from "@/app/components";
import { Saloon, Status } from "@prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
import NextLink from "next/link";
import Link from "next/link";

export interface SaloonQuery {
    status: Status;
    orderBy: keyof Saloon;
    page: string;
}

interface Props {
  searchParams: SaloonQuery
  saloons: Saloon[];
}

const SaloonTable = ({ searchParams, saloons }: Props) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell
              key={column.value}
              className={column.className}
            >
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
  );
};

const columns: { label: string; value: keyof Saloon; className?: string }[] = [
  { label: "Saloon", value: "title" },
  { label: "Status", value: "status", className: "hidden md:table-cell" },
  {
    label: "Created At",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
];

export const columnNames = columns.map((column) => column.value);

export default SaloonTable;
