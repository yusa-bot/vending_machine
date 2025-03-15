import {exec} from "child_process";

const execute = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec("tsx ./src/vending_machine.ts", (err, stdout) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(stdout);
    });
  });
};

describe("vending_machine scenario", () => {
  test("output results", async () => {
    const out = await execute();
    const lines = out.split("\n");
    expect(lines[0]).toMatch(/^OK \| 2 Milk have been refilled$/);
    expect(lines[2]).toMatch(/^#\sDisplay drinks\s#$/);
    expect(lines[4]).toMatch(/^Cola\s\|\s150\s\|\sSold out$/);
    expect(lines[6]).toMatch(/^NG \| Not enough paymentAmount for Milk$/);
    expect(lines[7]).toMatch(/^OK \| Milk purchased$/);
    expect(lines[12]).toMatch(/^NG \| Cola is sold out$/);
    expect(lines[14]).toMatch(/^OK \| 2 Cola have been refilled$/);
    expect(lines[19]).toMatch(/^OK \| Cola purchased$/);
    expect(lines[23]).toMatch(/^Beer\s\|\s220\s\|\s*$/);
  });
});
