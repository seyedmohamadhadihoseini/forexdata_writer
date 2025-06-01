import { prisma } from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const account_login = req.nextUrl.searchParams.get("account_number") as string;
    const count = await prisma.account.count(
        {
            where: {
                account_login
            }
        }
    );
    const result = count > 0 ? "1" : "0";
    return new NextResponse(result);
}