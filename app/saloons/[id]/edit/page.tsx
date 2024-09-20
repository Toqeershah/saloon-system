import prisma from '@/prisma/client'
import SaloonForm from '../../_components/SaloonForm'
import { notFound } from 'next/navigation';

interface Props {
  params: {id: string}
}

const EditSaloonPage = async ({ params}: Props) => {

  const saloon = await prisma.saloon.findUnique({
    where: {id: parseInt(params.id)},
    
  });

  if (!saloon) notFound()

  return (
    <div>
      <SaloonForm saloon={saloon} />
    </div>
  )
}

export default EditSaloonPage