import { prisma } from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const account_login = req.nextUrl.searchParams.get("account_login") as string;
    const symbol_name = req.nextUrl.searchParams.get("symbol_name") as string;

    const count = await prisma.symbol.count({
        where: {
            symbol_name, account_login
        }
    });

    const result = count > 0 ? "1" : "0";
    return new NextResponse(result);
}