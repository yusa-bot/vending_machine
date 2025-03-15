import {log, DrinkType, LogOptions} from "./vending_machine";

// 種類:補充数
// 1種類のデータなので、Recordを使っていない
type DrinkStock = {
  type: DrinkType;
  // quantityは「補充したい数」
  quantity: number;
};

// class はデータを「操作」する
    // refill() や buy() などのメソッドを使って データを変更できる
export class VendingMachine {
// Record <K, V> は、キーKに対して、値Vを持つオブジェクトを定義する型

  // 種類:最初の在庫
  private stock: Record<DrinkType, number> = {
    Milk: 0,
    Cola: 0,
    Beer: 0,
  };

  // 種類:値段
  private prices: Record<DrinkType, number> = {
    Milk: 120,
    Cola: 150,
    Beer: 220,
  };

  display(): void {
    console.log("# Display drinks #");

    // entryはオブジェクトのキーと値を「配列の配列」に変換するメソッド
        // entryは汎用的な関数のため強制的にtype型になってしまう→キャスト
    // thisはclass VendingMachineのこと
    Object.entries(this.prices).forEach(([type, price]) => {
        // 型エラーを回避
        const drinkType = type as DrinkType; // string → DrinkType にキャスト
        // キーのdrinkTypeでstockを探し、値のnumberを返す
        const stockStatus = this.stock[drinkType] === 0 ? "Sold out" : "";
        // オブジェクトの各要素をループで処理できる
        console.log(`${drinkType} | ${price} | ${stockStatus}`);
      });
  }

    // typeに値が入っている
    buy(type: DrinkType, money: number): void {

        // 存在する種類か
        if (!(type in this.prices)) {
            log({status:"NG", message:`${type} is not registered`});
            return;
        }
    
        // 売り切れ
        if (this.stock[type] === 0) {
            log({status:"NG", message:`${type} is sold out`});
          return;
        }
        
        // お金足りない
        if (money < this.prices[type]) {
            log({status:"NG", message:`Not enough paymentAmount for ${type}`});
            return;
        }
    
        // 買える
        // 自販機の在庫から 1 つ減らす処理
        this.stock[type] -= 1;
        log({status:"OK", message:`${type} purchased`});
    }

  // 在庫補充
  // drinks は 補充するドリンクのリスト
  refill(drinks: {type: DrinkType; quantity: number}[]): void {
    drinks.forEach(({type, quantity}) => {
        
      // 存在しない飲み物の場合
      if (!(type in this.stock)) {
        log({status:"NG", message:`${type} is not registered`});
        return;
      }

      // 在庫を補充
      this.stock[type] += quantity;
      log({status: "OK", message: `${quantity} ${type} have been refilled`});
    });
  }
}

const vendingMachine = new VendingMachine();

export const display = () => vendingMachine.display();
export const refill = (drinks: { type: DrinkType; quantity: number }[]) => vendingMachine.refill(drinks);
export const buy = (type: DrinkType, money: number) => vendingMachine.buy(type, money);