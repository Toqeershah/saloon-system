//fetching/rendering all saloons table(page)

import prisma from "@/prisma/client";
import {  Table } from "@radix-ui/themes";
import {SaloonStatusBadge, Link} from '@/app/components'
import delay from "delay";
import SaloonActions from "./SaloonActions";

const SaloonsPage = async () => {
  const saloons = await prisma.saloon.findMany({});
  await delay(1000); // simulate network latency

  return (
    <div>
      <SaloonActions />
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
                <Link href={`/saloons/${saloon.id}`}>
                 {saloon.title}
                </Link>
                <div className="block md:hidden">
                  <SaloonStatusBadge status={saloon.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <SaloonStatusBadge status={saloon.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">{saloon.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default SaloonsPage;
