import { saloonSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = saloonSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const saloon = await prisma.saloon.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!saloon)
    return NextResponse.json({ error: "Invalid saloon" }, { status: 404 });

  const updatedSaloon = await prisma.saloon.update({
    where: { id: saloon.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedSaloon, { status: 200 });
}
