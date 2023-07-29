import { Account } from "./account";

export class Stock{
    id: number;
    symbol: string;
    stockName: string;
    account: Account;
    currentPrice: number;
    totalAmount: number;
    averagePrice: number;
    currentValue: number;
    profitLoss: number;
}