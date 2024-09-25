import prisma from "@/prisma/client";
import LatestSaloons from "./LatestSaloons";
import SaloonSummary from "./SaloonSummary";
import SaloonChart from "./SaloonChart";

export default async function Home() {

  const open = await prisma.saloon.count({where: {status: 'OPEN'}})
  const closed = await prisma.saloon.count({where: {status: 'CLOSED'}})
  const shortBreak = await prisma.saloon.count({where: {status: 'SHORT_BREAK'}})

  return (
    <SaloonChart open={open} closed={closed} shortBreak={shortBreak} />
    // <SaloonSummary open={open} closed={closed} shortBreak={shortBreak} />
    // <LatestSaloons />
  );
}
