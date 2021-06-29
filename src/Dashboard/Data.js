function generateData(count, start, growth) {
    //create an empty array
    const  data=[];
    // loop over count
    for (let i = 0; i < count; i++) {
        // push a random number onto the array
        data.push(Math.floor(start + Math.random() * i * growth));
    }
    return data;

}

export const chartData= [
    {
        name: 'Phones',
        data: generateData(12,7, 10),
        color:'#149947',

    }, {
        name: 'Services',
        data: generateData(12,10, 0.3),
        color:'#1DDA65',

    }, {
        name: 'Laptops',
        data: generateData(12,6, 0.2),
        color:'#5CF396',

    }, {
        name: 'Tablets',
        data: generateData(12,9, 5),
        color:'#C1FAD7',

    }
];

const months=[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

function format(num){
    return `$${num} Billion`;
}

export const tableRows=months.map((month, i)=>({
    month,
    phones: format(chartData[0].data[i]),
    services:format(chartData[1].data[i]),
    laptops:format(chartData[2].data[i]),
    tablets:format(chartData[3].data[i])
}));

export const tableColumns=[
    {
        width:240,
        label:'Month',
        dataKey: 'month'
    },
    {
        width:240,
        label:'Phones',
        dataKey: 'phones',
        numeric:true,
    },
    {
        width:240,
        label:'Services',
        dataKey: 'services',
        numeric:true
    },
    {
        width:240,
        label:'Laptops',
        dataKey: 'laptops',
        numeric:true,
    },
    {
        width:240,
        label:'Tablets',
        dataKey: 'tablets',
        numeric:true,
    },
];

