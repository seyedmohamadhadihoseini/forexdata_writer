import { prisma } from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const symbol_time = req.nextUrl.searchParams.get("symbol_time") as string;
    const symbol_name = req.nextUrl.searchParams.get("symbol_name") as string;
    const symbol_background_color = req.nextUrl.searchParams.get("symbol_background_color");
    const symbol_exist = req.nextUrl.searchParams.get("symbol_exist") == "true";
    const symbol_select = req.nextUrl.searchParams.get("symbol_select") == "true";
    const symbol_visible = req.nextUrl.searchParams.get("symbol_visible") == "true";
    const symbol_session_deals = parseInt(req.nextUrl.searchParams.get("symbol_session_deals") || "0");
    const symbol_session_buy_orders = parseInt(req.nextUrl.searchParams.get("symbol_session_buy_orders") || "0");
    const symbol_session_sell_orders = parseInt(req.nextUrl.searchParams.get("symbol_session_sell_orders") || "0");
    const symbol_volume = parseInt(req.nextUrl.searchParams.get("symbol_volume") || "0");
    const symbol_volumehigh = parseInt(req.nextUrl.searchParams.get("symbol_volumehigh") || "0");
    const symbol_volumelow = parseInt(req.nextUrl.searchParams.get("symbol_volumelow") || "0");
    const symbol_time_msc = parseInt(req.nextUrl.searchParams.get("symbol_time_msc") || "0");
    const symbol_spread = parseInt(req.nextUrl.searchParams.get("symbol_spread") || "0");
    const symbol_expiration_time = parseInt(req.nextUrl.searchParams.get("symbol_expiration_time") || "0");
    const symbol_bid = parseFloat(req.nextUrl.searchParams.get("symbol_bid") || "0");
    const symbol_bidhigh = parseFloat(req.nextUrl.searchParams.get("symbol_bidhigh") || "0");
    const symbol_bidlow = parseFloat(req.nextUrl.searchParams.get("symbol_bidlow") || "0");
    const symbol_ask = parseFloat(req.nextUrl.searchParams.get("symbol_ask") || "0");
    const symbol_askhigh = parseFloat(req.nextUrl.searchParams.get("symbol_askhigh") || "0");
    const symbol_asklow = parseFloat(req.nextUrl.searchParams.get("symbol_asklow") || "0");
    const symbol_last = parseFloat(req.nextUrl.searchParams.get("symbol_last") || "0");
    const symbol_lasthigh = parseFloat(req.nextUrl.searchParams.get("symbol_lasthigh") || "0");
    const symbol_lastlow = parseFloat(req.nextUrl.searchParams.get("symbol_lastlow") || "0");
    const symbol_volume_real = parseFloat(req.nextUrl.searchParams.get("symbol_volume_real") || "0");
    const symbol_volumehigh_real = parseFloat(req.nextUrl.searchParams.get("symbol_volumehigh_real") || "0");
    const symbol_volumelow_real = parseFloat(req.nextUrl.searchParams.get("symbol_volumelow_real") || "0");
    const symbol_option_strike = parseFloat(req.nextUrl.searchParams.get("symbol_option_strike") || "0");
    const symbol_trade_tick_value = parseFloat(req.nextUrl.searchParams.get("symbol_trade_tick_value") || "0");
    const symbol_trade_tick_value_profit = parseFloat(req.nextUrl.searchParams.get("symbol_trade_tick_value_profit") || "0");
    const symbol_trade_tick_value_loss = parseFloat(req.nextUrl.searchParams.get("symbol_trade_tick_value_loss") || "0");
    const symbol_trade_accrued_interest = parseFloat(req.nextUrl.searchParams.get("symbol_trade_accrued_interest") || "0");
    const symbol_trade_face_value = parseFloat(req.nextUrl.searchParams.get("symbol_trade_face_value") || "0");
    const symbol_trade_liquidity_rate = parseFloat(req.nextUrl.searchParams.get("symbol_trade_liquidity_rate") || "0");
    const symbol_swap_long = parseFloat(req.nextUrl.searchParams.get("symbol_swap_long") || "0");
    const symbol_swap_short = parseFloat(req.nextUrl.searchParams.get("symbol_swap_short") || "0");
    const symbol_swap_sunday = parseFloat(req.nextUrl.searchParams.get("symbol_swap_sunday") || "0");
    const symbol_swap_monday = parseFloat(req.nextUrl.searchParams.get("symbol_swap_monday") || "0");
    const symbol_swap_tuesday = parseFloat(req.nextUrl.searchParams.get("symbol_swap_tuesday") || "0");
    const symbol_swap_wednesday = parseFloat(req.nextUrl.searchParams.get("symbol_swap_wednesday") || "0");
    const symbol_swap_thursday = parseFloat(req.nextUrl.searchParams.get("symbol_swap_thursday") || "0");
    const symbol_swap_friday = parseFloat(req.nextUrl.searchParams.get("symbol_swap_friday") || "0");
    const symbol_swap_saturday = parseFloat(req.nextUrl.searchParams.get("symbol_swap_saturday") || "0");
    const symbol_session_volume = parseFloat(req.nextUrl.searchParams.get("symbol_session_volume") || "0");
    const symbol_session_turnover = parseFloat(req.nextUrl.searchParams.get("symbol_session_turnover") || "0");
    const symbol_session_interest = parseFloat(req.nextUrl.searchParams.get("symbol_session_interest") || "0");
    const symbol_session_buy_orders_volume = parseFloat(req.nextUrl.searchParams.get("symbol_session_buy_orders_volume") || "0");
    const symbol_session_sell_orders_volume = parseFloat(req.nextUrl.searchParams.get("symbol_session_sell_orders_volume") || "0");
    const symbol_session_open = parseFloat(req.nextUrl.searchParams.get("symbol_session_open") || "0");
    const symbol_session_close = parseFloat(req.nextUrl.searchParams.get("symbol_session_close") || "0");
    const symbol_session_aw = parseFloat(req.nextUrl.searchParams.get("symbol_session_aw") || "0");
    const symbol_session_price_settlement = parseFloat(req.nextUrl.searchParams.get("symbol_session_price_settlement") || "0");
    const symbol_session_price_limit_min = parseFloat(req.nextUrl.searchParams.get("symbol_session_price_limit_min") || "0");
    const symbol_session_price_limit_max = parseFloat(req.nextUrl.searchParams.get("symbol_session_price_limit_max") || "0");
    const symbol_price_change = parseFloat(req.nextUrl.searchParams.get("symbol_price_change") || "0");
    const symbol_price_volatility = parseFloat(req.nextUrl.searchParams.get("symbol_price_volatility") || "0");
    const symbol_price_theoretical = parseFloat(req.nextUrl.searchParams.get("symbol_price_theoretical") || "0");
    const symbol_price_delta = parseFloat(req.nextUrl.searchParams.get("symbol_price_delta") || "0");
    const symbol_price_theta = parseFloat(req.nextUrl.searchParams.get("symbol_price_theta") || "0");
    const symbol_price_gamma = parseFloat(req.nextUrl.searchParams.get("symbol_price_gamma") || "0");
    const symbol_price_vega = parseFloat(req.nextUrl.searchParams.get("symbol_price_vega") || "0");
    const symbol_price_rho = parseFloat(req.nextUrl.searchParams.get("symbol_price_rho") || "0");
    const symbol_price_omega = parseFloat(req.nextUrl.searchParams.get("symbol_price_omega") || "0");
    const symbol_price_sensitivity = parseFloat(req.nextUrl.searchParams.get("symbol_price_sensitivity") || "0");


    await prisma.symbolprice.create({
        data: {
            symbol_name, symbol_time: new Date(symbol_time),
            symbol_ask, symbol_askhigh, symbol_asklow, symbol_lastlow,
            symbol_bid, symbol_bidhigh, symbol_bidlow, symbol_last, symbol_lasthigh,
            symbol_background_color, symbol_exist, symbol_expiration_time: GetDateOrNow(symbol_expiration_time),
            symbol_option_strike, symbol_price_change, symbol_price_delta, symbol_price_gamma,
            symbol_price_omega, symbol_price_rho, symbol_price_sensitivity, symbol_price_theoretical,
            symbol_price_theta, symbol_price_vega, symbol_price_volatility, symbol_select, symbol_session_aw,
            symbol_session_buy_orders, symbol_session_buy_orders_volume, symbol_session_close, symbol_session_deals,
            symbol_session_interest, symbol_session_open, symbol_session_price_limit_max, symbol_session_price_limit_min,
            symbol_session_price_settlement, symbol_session_sell_orders, symbol_session_sell_orders_volume,
            symbol_session_turnover, symbol_session_volume,
            symbol_trade_tick_value, symbol_trade_tick_value_profit, symbol_trade_tick_value_loss, symbol_trade_accrued_interest,
            symbol_trade_face_value,
            symbol_trade_liquidity_rate, symbol_swap_long, symbol_swap_short, symbol_swap_sunday, symbol_swap_monday,
            symbol_swap_tuesday, symbol_swap_wednesday, symbol_swap_thursday, symbol_swap_friday,
            symbol_swap_saturday, symbol_volume_real, symbol_volumehigh_real,
            symbol_volumelow_real, symbol_volume, symbol_volumehigh, symbol_volumelow,
            symbol_time_msc: GetDateOrNow(symbol_time_msc), symbol_spread, symbol_visible
        }
     
    });


    return NextResponse.json({});
}
function GetDateOrNow(strDate: number | null) {
    if (strDate) {
        return new Date(strDate);
    }
    return new Date();
}