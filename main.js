const money = +prompt('Ваш бюджет на месяц?', '');
const time = prompt('Введите дату в формате YYYY-MM-DD', '');

const appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};

// let i = 0;
// while (i < 2) {
//   const a = prompt('Введите обязательную статью расходов в этом месяце', '');
//   const b = prompt('Во сколько обойдется?', '');

//   if (typeof(a) === 'string'
//       && a !== null
//       && a !== ''
//       && parseInt(b) !== NaN
//       && b !== null
//       && b !== '') {
//     appData.expenses[a] = parseInt(b);
//     console.log('done');
//   } else {
//     --i;
//   }
//   i++;
// }

// let i = 0;
// do {
//   const a = prompt('Введите обязательную статью расходов в этом месяце', '');
//   const b = prompt('Во сколько обойдется?', '');

//   if (typeof(a) === 'string'
//       && a !== null
//       && a !== ''
//       && parseInt(b) !== NaN
//       && b !== null
//       && b !== '') {
//     appData.expenses[a] = parseInt(b);
//     console.log('done');
//   } else {
//     --i;
//   }
//   i++;
// } while (i < 2);


for (let i = 0; i < 2; i++) {
  const a = prompt('Введите обязательную статью расходов в этом месяце', '');
  const b = prompt('Во сколько обойдется?', '');

  if (typeof(a) === 'string'
      && a !== null
      && a !== ''
      && parseInt(b) !== NaN
      && b !== null
      && b !== '') {
    appData.expenses[a] = parseInt(b);
    console.log('done');
  } else {
    --i;
  }
}



appData.moneyPerDay = appData.budget / 30;

alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);

if (appData.moneyPerDay < 100) {
  console.log('У Вас минимальный прожиточный бюджет');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('У Вас средний бюджет');
} else if (appData.moneyPerDay > 2000) {
  console.log('У Вас высокий бюджет');
} else {
  console.log('Произошла ошибка');
} 
