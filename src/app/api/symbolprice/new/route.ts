import ArryaToDict from "@/app/functions/arrayToDict";
import { prisma } from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const receivedData: { name: string, value: string }[] = await req.json();
    const data = ArryaToDict(receivedData);
    const symbol_time = parseInt(data.symbol_time)*1000;
    const symbol_name = data.symbol_name;
    const symbol_background_color = data.symbol_background_color;
    const symbol_exist = data.symbol_exist == "true";
    const symbol_select = data.symbol_select == "true";
    const symbol_visible = data.symbol_visible == "true";
    const symbol_session_deals = parseInt(data.symbol_session_deals || "0");
    const symbol_session_buy_orders = parseInt(data.symbol_session_buy_orders || "0");
    const symbol_session_sell_orders = parseInt(data.symbol_session_sell_orders || "0");
    const symbol_volume = parseInt(data.symbol_volume || "0");
    const symbol_volumehigh = parseInt(data.symbol_volumehigh || "0");
    const symbol_volumelow = parseInt(data.symbol_volumelow || "0");
    const symbol_time_msc = parseInt(data.symbol_time_msc || "0");
    const symbol_spread = parseInt(data.symbol_spread || "0");
    const symbol_expiration_time = parseInt(data.symbol_expiration_time || "0");
    const symbol_bid = parseFloat(data.symbol_bid);
    const symbol_bidhigh = parseFloat(data.symbol_bidhigh);
    const symbol_bidlow = parseFloat(data.symbol_bidlow);
    const symbol_ask = parseFloat(data.symbol_ask);
    const symbol_askhigh = parseFloat(data.symbol_askhigh);
    const symbol_asklow = parseFloat(data.symbol_asklow);
    const symbol_last = parseFloat(data.symbol_last);
    const symbol_lasthigh = parseFloat(data.symbol_lasthigh);
    const symbol_lastlow = parseFloat(data.symbol_lastlow);
    const symbol_volume_real = parseFloat(data.symbol_volume_real);
    const symbol_volumehigh_real = parseFloat(data.symbol_volumehigh_real);
    const symbol_volumelow_real = parseFloat(data.symbol_volumelow_real);
    const symbol_option_strike = parseFloat(data.symbol_option_strike);
    const symbol_trade_tick_value = parseFloat(data.symbol_trade_tick_value);
    const symbol_trade_tick_value_profit = parseFloat(data.symbol_trade_tick_value_profit);
    const symbol_trade_tick_value_loss = parseFloat(data.symbol_trade_tick_value_loss);
    const symbol_trade_accrued_interest = parseFloat(data.symbol_trade_accrued_interest);
    const symbol_trade_face_value = parseFloat(data.symbol_trade_face_value);
    const symbol_trade_liquidity_rate = parseFloat(data.symbol_trade_liquidity_rate);
    const symbol_swap_long = parseFloat(data.symbol_swap_long);
    const symbol_swap_short = parseFloat(data.symbol_swap_short);
    const symbol_swap_sunday = parseFloat(data.symbol_swap_sunday);
    const symbol_swap_monday = parseFloat(data.symbol_swap_monday);
    const symbol_swap_tuesday = parseFloat(data.symbol_swap_tuesday);
    const symbol_swap_wednesday = parseFloat(data.symbol_swap_wednesday);
    const symbol_swap_thursday = parseFloat(data.symbol_swap_thursday);
    const symbol_swap_friday = parseFloat(data.symbol_swap_friday);
    const symbol_swap_saturday = parseFloat(data.symbol_swap_saturday);
    const symbol_session_volume = parseFloat(data.symbol_session_volume);
    const symbol_session_turnover = parseFloat(data.symbol_session_turnover);
    const symbol_session_interest = parseFloat(data.symbol_session_interest);
    const symbol_session_buy_orders_volume = parseFloat(data.symbol_session_buy_orders_volume);
    const symbol_session_sell_orders_volume = parseFloat(data.symbol_session_sell_orders_volume);
    const symbol_session_open = parseFloat(data.symbol_session_open);
    const symbol_session_close = parseFloat(data.symbol_session_close);
    const symbol_session_aw = parseFloat(data.symbol_session_aw);
    const symbol_session_price_settlement = parseFloat(data.symbol_session_price_settlement);
    const symbol_session_price_limit_min = parseFloat(data.symbol_session_price_limit_min);
    const symbol_session_price_limit_max = parseFloat(data.symbol_session_price_limit_max);
    const symbol_price_change = parseFloat(data.symbol_price_change);
    const symbol_price_volatility = parseFloat(data.symbol_price_volatility);
    const symbol_price_theoretical = parseFloat(data.symbol_price_theoretical);
    const symbol_price_delta = parseFloat(data.symbol_price_delta);
    const symbol_price_theta = parseFloat(data.symbol_price_theta);
    const symbol_price_gamma = parseFloat(data.symbol_price_gamma);
    const symbol_price_vega = parseFloat(data.symbol_price_vega);
    const symbol_price_rho = parseFloat(data.symbol_price_rho);
    const symbol_price_omega = parseFloat(data.symbol_price_omega);
    const symbol_price_sensitivity = parseFloat(data.symbol_price_sensitivity);
    const account_login = data.account_login;

    const finalData = {
        symbol_name, symbol_time:  GetDateOrNow(symbol_time),
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
        symbol_time_msc: GetDateOrNow(symbol_time_msc), symbol_spread, symbol_visible, account_login: account_login
    }
    await prisma.symbolprice.create({
        data: finalData

    });


    return NextResponse.json({});
}
function GetDateOrNow(strDate: number | null) {
    if (strDate) {
        return new Date(strDate);
    }
    return new Date();
}