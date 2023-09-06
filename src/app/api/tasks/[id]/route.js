import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export function GET(request, { params }) {
  return NextResponse.json("obteniendo tarea " + params.id);
}

export function POST(request, { params }) {
  return NextResponse.json("creando tarea " + params.id);
}

export function PUT(request, { params }) {
  return NextResponse.json("actualizando tarea " + params.id);
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const taskRemoved = await prisma.task.delete({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(taskRemoved);
}
