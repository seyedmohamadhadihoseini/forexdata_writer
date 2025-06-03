import { prisma } from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data: { name: string, value: string }[] = await req.json();
    const account_login = data.filter(x => x.name == "account_login")[0].value;
    const symbol_name = data.filter(x => x.name == "symbol_name")[0].value;
    const symbol_subscription_delay = data.filter(x => x.name == "symbol_subscription_delay")[0].value == "true";
    const symbol_sector = data.filter(x => x.name == "symbol_sector")[0].value;
    const symbol_industry = data.filter(x => x.name == "symbol_industry")[0].value;
    const symbol_custom = data.filter(x => x.name == "symbol_custom")[0].value == "true";
    const symbol_chart_mode = data.filter(x => x.name == "symbol_chart_mode")[0].value;
    const symbol_digits = parseInt(data.filter(x => x.name == "symbol_digits")[0].value || "0");
    const symbol_spread_float = data.filter(x => x.name == "symbol_spread_float")[0].value == "true";
    const symbol_ticks_bookdepth = parseInt(data.filter(x => x.name == "symbol_ticks_bookdepth")[0].value || "0");
    const symbol_trade_calc_mode = data.filter(x => x.name == "symbol_trade_calc_mode")[0].value;
    const symbol_trade_mode = data.filter(x => x.name == "symbol_trade_mode")[0].value;
    const symbol_trade_stops_level = parseInt(data.filter(x => x.name == "symbol_trade_stops_level")[0].value || "0");
    const symbol_trade_freeze_level = parseInt(data.filter(x => x.name == "symbol_trade_freeze_level")[0].value || "0");
    const symbol_trade_exemode = data.filter(x => x.name == "symbol_trade_exemode")[0].value;
    const symbol_swap_mode = data.filter(x => x.name == "symbol_swap_mode")[0].value;
    const symbol_swap_rollover3days = data.filter(x => x.name == "symbol_swap_rollover3days")[0].value;
    const symbol_margin_hedged_use_leg = data.filter(x => x.name == "symbol_margin_hedged_use_leg")[0].value == "true";
    const symbol_expiration_mode = parseInt(data.filter(x => x.name == "symbol_expiration_mode")[0].value || "0");
    const symbol_filling_mode = parseInt(data.filter(x => x.name == "symbol_filling_mode")[0].value || "0");
    const symbol_order_mode = parseInt(data.filter(x => x.name == "symbol_order_mode")[0].value || "0");
    const symbol_order_gtc_mode = data.filter(x => x.name == "symbol_order_gtc_mode")[0].value;
    const symbol_option_mode = data.filter(x => x.name == "symbol_option_mode")[0].value;
    const symbol_option_right = data.filter(x => x.name == "symbol_option_right")[0].value;
    const symbol_point = parseFloat(data.filter(x => x.name == "symbol_point")[0].value || "0");
    const symbol_trade_tick_size = parseFloat(data.filter(x => x.name == "symbol_trade_tick_size")[0].value || "0");
    const symbol_trade_contract_size = parseFloat(data.filter(x => x.name == "symbol_trade_contract_size")[0].value || "0");
    const symbol_volume_min = parseFloat(data.filter(x => x.name == "symbol_volume_min")[0].value || "0");
    const symbol_volume_max = parseFloat(data.filter(x => x.name == "symbol_volume_max")[0].value || "0");
    const symbol_volume_step = parseFloat(data.filter(x => x.name == "symbol_volume_step")[0].value || "0");
    const symbol_volume_limit = parseFloat(data.filter(x => x.name == "symbol_volume_limit")[0].value || "0");
    const symbol_margin_initial = parseFloat(data.filter(x => x.name == "symbol_margin_initial")[0].value || "0");
    const symbol_margin_maintenance = parseFloat(data.filter(x => x.name == "symbol_margin_maintenance")[0].value || "0");
    const symbol_margin_hedged = parseFloat(data.filter(x => x.name == "symbol_margin_hedged")[0].value || "0");
    const symbol_basis = data.filter(x => x.name == "symbol_basis")[0].value;
    const symbol_category = data.filter(x => x.name == "symbol_category")[0].value;
    const symbol_country = data.filter(x => x.name == "symbol_country")[0].value;
    const symbol_sector_name = data.filter(x => x.name == "symbol_sector_name")[0].value;
    const symbol_industry_name = data.filter(x => x.name == "symbol_industry_name")[0].value;
    const symbol_currency_base = data.filter(x => x.name == "symbol_currency_base")[0].value;
    const symbol_currency_profit = data.filter(x => x.name == "symbol_currency_profit")[0].value;
    const symbol_currency_margin = data.filter(x => x.name == "symbol_currency_margin")[0].value;
    const symbol_bank = data.filter(x => x.name == "symbol_bank")[0].value;
    const symbol_description = data.filter(x => x.name == "symbol_description")[0].value;
    const symbol_exchange = data.filter(x => x.name == "symbol_exchange")[0].value;
    const symbol_formula = data.filter(x => x.name == "symbol_formula")[0].value;
    const symbol_isin = data.filter(x => x.name == "symbol_isin")[0].value;
    const symbol_page = data.filter(x => x.name == "symbol_page")[0].value;
    const symbol_path = data.filter(x => x.name == "symbol_path")[0].value;

    try {
        await prisma.symbol.create({
            data: {
                account_login, symbol_name, symbol_trade_freeze_level, symbol_trade_mode, symbol_trade_stops_level,
                symbol_chart_mode, symbol_ticks_bookdepth, symbol_trade_calc_mode, symbol_trade_exemode,
                symbol_custom, symbol_subscription_delay, symbol_swap_mode, symbol_swap_rollover3days,
                symbol_digits, symbol_order_mode, symbol_sector, symbol_spread_float,
                symbol_expiration_mode, symbol_option_right, symbol_order_gtc_mode,
                symbol_filling_mode, symbol_industry, symbol_margin_hedged_use_leg, symbol_option_mode,
                symbol_point, symbol_trade_tick_size, symbol_trade_contract_size, symbol_volume_min,
                symbol_volume_max, symbol_volume_step, symbol_volume_limit, symbol_margin_initial, symbol_margin_maintenance,
                symbol_margin_hedged, symbol_basis, symbol_category, symbol_country, symbol_sector_name,
                symbol_industry_name, symbol_currency_base, symbol_currency_profit, symbol_currency_margin, symbol_bank,
                symbol_description, symbol_exchange, symbol_formula, symbol_isin, symbol_page, symbol_path,
            }
        })
    }
    catch (e) {
        console.log(`error in ${symbol_name}  error:${e}`);
    }
    return new NextResponse("");
}