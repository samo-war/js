const money = prompt('Ваш бюджет на месяц?');
const time = prompt('Введите дату в формате YYYY-MM-DD');
const exp1 = prompt('Введите обязательную статью расходов в этом месяце');
const exp2 = prompt('Во сколько обойдется?');
const exp3 = prompt('Введите обязательную статью расходов в этом месяце');
const exp4 = prompt('Во сколько обойдется?');

const appData = {
  moneyData: money,
  timeData: time,
  expenses: {
    exp1: exp2,
    exp3: exp4
  },
  optionalExpenses: {

  },
  income: [

  ],
  savings: false
};
alert(appData.moneyData / 30);
console.log(appData.expenses.exp1);
