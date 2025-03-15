import {refill, display, buy} from "./vending";

// 変数typeにDrinkType型の値を代入
export type DrinkType = "Milk" | "Cola" | "Beer";

// LogOptions = status, message
export type LogOptions = {
  status: "OK" | "NG";
  message: string;
};

// ↑依存
// log 関数は、オブジェクトを引数に取り、ログを出力する関数 
// : void → 戻り値なし（console.log() するだけだから）
export const log = (options: LogOptions): void => {
  console.log(`${options.status} | ${options.message}`);
};

// Scenario
refill([
  { type: "Milk", quantity: 2 },
  { type: "Beer", quantity: 3 },
]);
display();
buy("Milk", 100);
buy("Milk", 200);
display();
buy("Cola", 200);
refill([
  { type: "Milk", quantity: 1 },
  { type: "Cola", quantity: 2 },
]);
display();
buy("Cola", 200);
display();
