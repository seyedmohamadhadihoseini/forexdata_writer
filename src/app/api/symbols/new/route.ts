import { prisma } from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const account_login = req.nextUrl.searchParams.get("account_login") as string;
    const symbol_name = req.nextUrl.searchParams.get("symbol_name") as string;
    const symbol_subscription_delay = req.nextUrl.searchParams.get("symbol_subscription_delay") == "true";
    const symbol_sector = req.nextUrl.searchParams.get("symbol_sector");
    const symbol_industry = req.nextUrl.searchParams.get("symbol_industry");
    const symbol_custom = req.nextUrl.searchParams.get("symbol_custom") == "true";
    const symbol_chart_mode = req.nextUrl.searchParams.get("symbol_chart_mode");
    const symbol_digits = parseInt(req.nextUrl.searchParams.get("symbol_digits") || "0");
    const symbol_spread_float = req.nextUrl.searchParams.get("symbol_spread_float") == "true";
    const symbol_ticks_bookdepth = parseInt(req.nextUrl.searchParams.get("symbol_ticks_bookdepth") || "0");
    const symbol_trade_calc_mode = req.nextUrl.searchParams.get("symbol_trade_calc_mode");
    const symbol_trade_mode = req.nextUrl.searchParams.get("symbol_trade_mode");
    const symbol_trade_stops_level = parseInt(req.nextUrl.searchParams.get("symbol_trade_stops_level") || "0");
    const symbol_trade_freeze_level = parseInt(req.nextUrl.searchParams.get("symbol_trade_freeze_level") || "0");
    const symbol_trade_exemode = req.nextUrl.searchParams.get("symbol_trade_exemode");
    const symbol_swap_mode = req.nextUrl.searchParams.get("symbol_swap_mode");
    const symbol_swap_rollover3days = req.nextUrl.searchParams.get("symbol_swap_rollover3days");
    const symbol_margin_hedged_use_leg = req.nextUrl.searchParams.get("symbol_margin_hedged_use_leg") == "true";
    const symbol_expiration_mode = parseInt(req.nextUrl.searchParams.get("symbol_expiration_mode") || "0");
    const symbol_filling_mode = parseInt(req.nextUrl.searchParams.get("symbol_filling_mode") || "0");
    const symbol_order_mode = parseInt(req.nextUrl.searchParams.get("symbol_order_mode") || "0");
    const symbol_order_gtc_mode = req.nextUrl.searchParams.get("symbol_order_gtc_mode");
    const symbol_option_mode = req.nextUrl.searchParams.get("symbol_option_mode");
    const symbol_option_right = req.nextUrl.searchParams.get("symbol_option_right");
    const symbol_point = parseFloat(req.nextUrl.searchParams.get("symbol_point") || "0");
    const symbol_trade_tick_size = parseFloat(req.nextUrl.searchParams.get("symbol_trade_tick_size") || "0");
    const symbol_trade_contract_size = parseFloat(req.nextUrl.searchParams.get("symbol_trade_contract_size") || "0");
    const symbol_volume_min = parseFloat(req.nextUrl.searchParams.get("symbol_volume_min") || "0");
    const symbol_volume_max = parseFloat(req.nextUrl.searchParams.get("symbol_volume_max") || "0");
    const symbol_volume_step = parseFloat(req.nextUrl.searchParams.get("symbol_volume_step") || "0");
    const symbol_volume_limit = parseFloat(req.nextUrl.searchParams.get("symbol_volume_limit") || "0");
    const symbol_margin_initial = parseFloat(req.nextUrl.searchParams.get("symbol_margin_initial") || "0");
    const symbol_margin_maintenance = parseFloat(req.nextUrl.searchParams.get("symbol_margin_maintenance") || "0");
    const symbol_margin_hedged = parseFloat(req.nextUrl.searchParams.get("symbol_margin_hedged") || "0");
    const symbol_basis = req.nextUrl.searchParams.get("symbol_basis");
    const symbol_category = req.nextUrl.searchParams.get("symbol_category");
    const symbol_country = req.nextUrl.searchParams.get("symbol_country");
    const symbol_sector_name = req.nextUrl.searchParams.get("symbol_sector_name");
    const symbol_industry_name = req.nextUrl.searchParams.get("symbol_industry_name");
    const symbol_currency_base = req.nextUrl.searchParams.get("symbol_currency_base");
    const symbol_currency_profit = req.nextUrl.searchParams.get("symbol_currency_profit");
    const symbol_currency_margin = req.nextUrl.searchParams.get("symbol_currency_margin");
    const symbol_bank = req.nextUrl.searchParams.get("symbol_bank");
    const symbol_description = req.nextUrl.searchParams.get("symbol_description");
    const symbol_exchange = req.nextUrl.searchParams.get("symbol_exchange");
    const symbol_formula = req.nextUrl.searchParams.get("symbol_formula");
    const symbol_isin = req.nextUrl.searchParams.get("symbol_isin");
    const symbol_page = req.nextUrl.searchParams.get("symbol_page");
    const symbol_path = req.nextUrl.searchParams.get("symbol_path");

        await prisma.symbol.create({
            data: {
                account_login, symbol_name, symbol_trade_freeze_level, symbol_trade_mode, symbol_trade_stops_level,
                symbol_chart_mode, symbol_ticks_bookdepth, symbol_trade_calc_mode, symbol_trade_exemode,
                symbol_custom, symbol_subscription_delay, symbol_swap_mode, symbol_swap_rollover3days,
                symbol_digits, symbol_order_mode, symbol_sector, symbol_spread_float,
                symbol_expiration_mode, symbol_option_right, symbol_order_gtc_mode,
                symbol_filling_mode, symbol_industry, symbol_margin_hedged_use_leg, symbol_option_mode,
                symbol_point,symbol_trade_tick_size,symbol_trade_contract_size,symbol_volume_min,
                symbol_volume_max,symbol_volume_step,symbol_volume_limit,symbol_margin_initial,symbol_margin_maintenance,
                symbol_margin_hedged,symbol_basis,symbol_category,symbol_country,symbol_sector_name,
                symbol_industry_name,symbol_currency_base,symbol_currency_profit,symbol_currency_margin,symbol_bank,
                symbol_description,symbol_exchange,symbol_formula,symbol_isin,symbol_page,symbol_path,
            }
        })
    return new NextResponse("");
}