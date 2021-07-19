import Chart from "./Chart";
function ExpenseChart(props){
    let data = [
        {label:"January",value:0},
        {label:"February",value:0},
        {label:"March",value:0},
        {label:"April",value:0},
        {label:"May",value:0},
        {label:"June",value:0},
        {label:"July",value:0},
        {label:"August",value:0},
        {label:"September",value:0},
        {label:"October",value:0},
        {label:"November",value:0},
        {label:"December",value:0},
    ];
    let setValues = props.filteredExpenses.map((expense)=>{
        data[expense.date.getMonth()].value += expense.amount;
    }
    );
    console.log("hi   "+data[2].value);
    console.log("Inside chart"+props.filteredExpenses);
    return (
        <div>
            <Chart dataPoints={data}/>
        </div>
    )
}
export default ExpenseChart;