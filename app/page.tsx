import prisma from "@/prisma/client";
import LatestSaloons from "./LatestSaloons";
import SaloonSummary from "./SaloonSummary";
import SaloonChart from "./SaloonChart";
import { Flex, Grid } from "@radix-ui/themes";

export default async function Home() {
  const open = await prisma.saloon.count({ where: { status: "OPEN" } });
  const closed = await prisma.saloon.count({ where: { status: "CLOSED" } });
  const shortBreak = await prisma.saloon.count({
    where: { status: "SHORT_BREAK" },
  });

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <SaloonSummary open={open} closed={closed} shortBreak={shortBreak} />
        <SaloonChart open={open} closed={closed} shortBreak={shortBreak} />
      </Flex>
      <LatestSaloons />
    </Grid>
  );
}
