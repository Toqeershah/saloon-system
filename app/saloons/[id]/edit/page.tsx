import prisma from "@/prisma/client";
// import SaloonForm from '../../_components/SaloonForm'
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import SaloonFormSkeleton from "./loading";

const SaloonForm = dynamic(
  () => import("@/app/saloons/_components/SaloonForm"),
  {ssr: false,
  loading: () => <SaloonFormSkeleton />
  }
);

interface Props {
  params: { id: string };
}

const EditSaloonPage = async ({ params }: Props) => {
  const saloon = await prisma.saloon.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!saloon) notFound();

  return (
    <div>
      <SaloonForm saloon={saloon} />
    </div>
  );
};

export default EditSaloonPage;
