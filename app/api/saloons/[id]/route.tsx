import authOptions from "@/app/auth/authOptions";
import { saloonSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }

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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }

  const saloon = await prisma.saloon.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!saloon)
    return NextResponse.json(
      { error: "Invalid saloon deletion" },
      { status: 404 }
    );

  await prisma.saloon.delete({
    where: { id: saloon.id },
  });

  return NextResponse.json({});
}
