//https://docs.google.com/spreadsheets/d/1ErBIKg9y1cwiORByGAQGHZqBqNkWbvKaCGLPvgoUkB8/edit?usp=sharing

// const output=document.querySelector('.output');
// const url='https://docs.google.com/spreadsheets/d/';
// const ssid='1ErBIKg9y1cwiORByGAQGHZqBqNkWbvKaCGLPvgoUkB8';
// const query1='/gviz/tq?';
// const endpoint1=`${url}${ssid}${query1}`;

// output.textContent=endpoint1;
// let json;
// fetch(endpoint1)
// .then(res=>res.text())
// .then(data=>{
    
//     json=JSON.parse(data);
// })
// const bardata = () =>
// {
//     return(json)
// }

const bardata =
    [
        {
            id:"Pune",
            '0 to 1 years':550,
            '1 to 3 years':800,
            '3 to 6 years':750,
            '6 to 12 years':680,
            '12 to 20 years':102,
            '20+ years':60,
        },
        {
            id:"Mumbai",
            '0 to 1 years':680,
            '1 to 3 years':1000,
            '3 to 6 years':980,
            '6 to 12 years':780,
            '12 to 20 years':150,
            '20+ years':80,
        },
        {
            id:"Delhi",
            '0 to 1 years':600,
            '1 to 3 years':1200,
            '3 to 6 years':1050,
            '6 to 12 years':560,
            '12 to 20 years':180,
            '20+ years':50,
        },
        {
            id:"Bangalore",
            '0 to 1 years':1200,
            '1 to 3 years':1800,
            '3 to 6 years':1500,
            '6 to 12 years':1150,
            '12 to 20 years':250,
            '20+ years':120,
        },
        {
            id:"Hyderabad",
            '0 to 1 years':400,
            '1 to 3 years':900,
            '3 to 6 years':1300,
            '6 to 12 years':1200,
            '12 to 20 years':190,
            '20+ years':90,
        }
    ]


export default bardata;

// https://spreadsheets.google.com/feeds/cells/YOURGOOGLESHEETCODE/SHEETPAGENUMBER/public/full?alt=json

// https://docs.google.com/spreadsheets/d/e/2PACX-1vQzzpesbQlwAyqh9laTWdYN5yNZhB96QIFjjHNZVF1d8d0PA4OTkGSIcMIHHIMAPe9yatj6A6YklxMa/pubhtml