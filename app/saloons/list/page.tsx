//fetching/rendering all saloons table(page)

import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import delay from "delay";
import SaloonActions from "./SaloonActions";
import SaloonTable, { columnNames, SaloonQuery } from "./SaloonTable";
import Pagination from "@/app/components/Pagination";
import { Flex } from "@radix-ui/themes";

interface Props {
  searchParams: SaloonQuery
}

const SaloonsPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);

  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

    const page = parseInt(searchParams.page) || 1;
    const pageSize = 10;

  const saloons = await prisma.saloon.findMany({
    where: { status },
    orderBy,
  });
  await delay(1000);

  const saloonCount = await prisma.saloon.count({where: {}});

  return (
    <Flex direction='column' gap='3'>
      <SaloonActions />
      <SaloonTable searchParams={searchParams} saloons={saloons} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={saloonCount}
      />
    </Flex>
  );
};

export default SaloonsPage;
