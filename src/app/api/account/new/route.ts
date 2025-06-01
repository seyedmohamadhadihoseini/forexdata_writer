import { prisma } from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const account_login = req.nextUrl.searchParams.get("account_login") as string;
    const account_trade_mode = req.nextUrl.searchParams.get("account_trade_mode");
    const account_leverage = parseInt(req.nextUrl.searchParams.get("account_leverage") || "0");
    const account_limit_orders = parseInt(req.nextUrl.searchParams.get("account_limit_orders") || "0");
    const account_margin_so_mode = req.nextUrl.searchParams.get("account_margin_so_mode");
    const account_trade_allowed = req.nextUrl.searchParams.get("account_trade_allowed") == "true";
    const account_trade_expert = req.nextUrl.searchParams.get("account_trade_expert") == "true";
    const account_margin_mode = req.nextUrl.searchParams.get("account_margin_mode");
    const account_currency_digits = parseInt(req.nextUrl.searchParams.get("account_currency_digits") || "0");
    const account_fifo_close = req.nextUrl.searchParams.get("account_fifo_close") == "true";
    const account_hedge_allowed = req.nextUrl.searchParams.get("account_hedge_allowed") == "true";
    const account_balance = parseFloat(req.nextUrl.searchParams.get("account_balance") || "0");
    const account_credit = parseFloat(req.nextUrl.searchParams.get("account_credit") || "0");
    const account_profit = parseFloat(req.nextUrl.searchParams.get("account_profit") || "0");
    const account_equity = parseFloat(req.nextUrl.searchParams.get("account_equity") || "0");
    const account_margin = parseFloat(req.nextUrl.searchParams.get("account_margin") || "0");
    const account_margin_free = parseFloat(req.nextUrl.searchParams.get("account_margin_free") || "0");
    const account_margin_so_call = parseFloat(req.nextUrl.searchParams.get("account_margin_so_call") || "0");
    const account_margin_so_so = parseFloat(req.nextUrl.searchParams.get("account_margin_so_so") || "0");
    const account_margin_initial = parseFloat(req.nextUrl.searchParams.get("account_margin_initial") || "0");
    const account_margin_maintenance = parseFloat(req.nextUrl.searchParams.get("account_margin_maintenance") || "0");
    const account_assets = parseFloat(req.nextUrl.searchParams.get("account_assets") || "0");
    const account_liabilities = parseFloat(req.nextUrl.searchParams.get("account_liabilities") || "0");
    const account_commission_blocked = parseFloat(req.nextUrl.searchParams.get("account_commission_blocked") || "0");
    const account_name = req.nextUrl.searchParams.get("account_name");
    const account_server = req.nextUrl.searchParams.get("account_server");
    const account_currency = req.nextUrl.searchParams.get("account_currency");
    const account_company = req.nextUrl.searchParams.get("account_company");


    await prisma.account.create({
        data: {
            account_login, account_assets, account_balance, account_commission_blocked,
            account_company, account_credit, account_currency, account_currency_digits,
            account_equity, account_fifo_close, account_hedge_allowed, account_leverage,
            account_liabilities, account_limit_orders, account_margin, account_margin_free,
            account_margin_initial, account_margin_maintenance, account_margin_mode,
            account_margin_so_call, account_margin_so_mode, account_margin_so_so,
            account_name, account_profit, account_server, account_trade_allowed,
            account_trade_expert, account_trade_mode,
        }
    })
    return NextResponse.json({});
}