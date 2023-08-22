let bank = [
    {
        name: "ruxshona beaty salon",
        budget: 30000,
        tax: 12,
        expensesPerYear: [
            {
                title: 'rent',
                total: 6000
            },
            {
                title: 'others',
                total: 7000
            },
            {
                title: 'ads',
                total: 2000
            },
        ]
    },
    {
        name: "emin nosfrush",
        budget: 5000,
        tax: 0,
        expensesPerYear: [
            {
                title: 'rent',
                total: 300
            }
        ]
    },
    {
        name: "akva mashennik",
        budget: 80000,
        tax: 15,
        expensesPerYear: [
            {
                title: 'rent',
                total: 3008
            }
        ]
    }
]

// 1. Найти кто больше всех платит налог

let maxTaxCom = bank.reduce((max, company) => {
    if (company.tax > max.tax) {
        return company;
    } else {
        return max;
    }
});

console.log( maxTaxCom , 'больше всех платит налог');

// 2. Создать новый ключ компаниям (процент) Найти соотношение трат и сохранить его в новом ключе
for (let item of bank) {
    let expensesPerMonth = 0

    for (let exp of item.expensesPerYear) {
        expensesPerMonth += exp.total
    }
    item.annuallyPercent = expensesPerMonth / item.budget * 100;

    console.log(item);
}

// 3. Вычитав все расходы включая налоги определить куда пушается компания в уд или не удачные если денег остается больше 0 то в уд меньше (не удачные)
let successful = [];
let unSuccessful = [];

bank.forEach(company => {
    let totalExpenses = company.expensesPerYear.reduce((total, expense) => {
        return total + expense.total;
    }, 0);

    let totalR = company.budget - (company.budget * company.tax / 100) - totalExpenses;

    if (totalR > 0) {
        company.success = "unsuccessful";
    } else {
        company.success = "successful";
    }
});
    













