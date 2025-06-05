import { prisma } from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data: { name: string, value: string }[] = await req.json();


    const account_login = data.filter(x => x.name == "account_login")[0].value;
    const account_trade_mode = data.filter(x => x.name == "account_trade_mode")[0].value;
    const account_leverage = parseInt(data.filter(x => x.name == "account_leverage")[0].value || "0");
    const account_limit_orders = parseInt(data.filter(x => x.name == "account_limit_orders")[0].value || "0");
    const account_margin_so_mode = data.filter(x => x.name == "account_margin_so_mode")[0].value;
    const account_trade_allowed = data.filter(x => x.name == "account_trade_allowed")[0].value == "true";
    const account_trade_expert = data.filter(x => x.name == "account_trade_expert")[0].value == "true";
    const account_margin_mode = data.filter(x => x.name == "account_margin_mode")[0].value;
    const account_currency_digits = parseInt(data.filter(x => x.name == "account_currency_digits")[0].value || "0");
    const account_fifo_close = data.filter(x => x.name == "account_fifo_close")[0].value == "true";
    const account_hedge_allowed = data.filter(x => x.name == "account_hedge_allowed")[0].value == "true";
    const account_balance = parseFloat(data.filter(x => x.name == "account_balance")[0].value || "0");
    const account_credit = parseFloat(data.filter(x => x.name == "account_credit")[0].value || "0");
    const account_profit = parseFloat(data.filter(x => x.name == "account_profit")[0].value || "0");
    const account_equity = parseFloat(data.filter(x => x.name == "account_equity")[0].value || "0");
    const account_margin = parseFloat(data.filter(x => x.name == "account_margin")[0].value || "0");
    const account_margin_free = parseFloat(data.filter(x => x.name == "account_margin_free")[0].value || "0");
    const account_margin_so_call = parseFloat(data.filter(x => x.name == "account_margin_so_call")[0].value || "0");
    const account_margin_so_so = parseFloat(data.filter(x => x.name == "account_margin_so_so")[0].value || "0");
    const account_margin_initial = parseFloat(data.filter(x => x.name == "account_margin_initial")[0].value || "0");
    const account_margin_maintenance = parseFloat(data.filter(x => x.name == "account_margin_maintenance")[0].value || "0");
    const account_assets = parseFloat(data.filter(x => x.name == "account_assets")[0].value || "0");
    const account_liabilities = parseFloat(data.filter(x => x.name == "account_liabilities")[0].value || "0");
    const account_commission_blocked = parseFloat(data.filter(x => x.name == "account_commission_blocked")[0].value || "0");
    const account_name = data.filter(x => x.name == "account_name")[0].value;
    const account_server = data.filter(x => x.name == "account_server")[0].value;
    const account_currency = data.filter(x => x.name == "account_currency")[0].value;
    const account_company = data.filter(x => x.name == "account_company")[0].value;

    const accountPreCount = await prisma.account.count({
        where: {
            account_login
        }
    })
    if (accountPreCount == 0) {

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
    }
    return NextResponse.json({});
}