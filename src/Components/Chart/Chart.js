import ChartBar from "./ChartBar";
import './Chart.css';
let Chart = (props)=>{
    let chartValues = props.dataPoints.map((point)=>point.value);
    let maxValue = Math.max(...chartValues);
    console.log(maxValue);
    return(
        <div className='chart'>
            {
            props.dataPoints.map(
                (point)=><ChartBar label={point.label} value={point.value} maxValue={maxValue}/>
            )
            }
        </div>
    );
}
export default Chart;