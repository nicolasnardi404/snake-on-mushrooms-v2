import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
  try {
    const firstDayOfMonth = new Date();
    firstDayOfMonth.setDate(1);
    firstDayOfMonth.setHours(0, 0, 0, 0);

    const scores = await prisma.score.findMany({
      where: {
        createdAt: {
          gte: firstDayOfMonth,
        },
      },
      orderBy: {
        score: "desc",
      },
      take: 10,
    });

    return NextResponse.json(scores);
  } catch (error) {
    console.error("Error fetching monthly scores:", error);
    return NextResponse.json(
      { error: "Error fetching scores" },
      { status: 500 }
    );
  }
}
