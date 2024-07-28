import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./userContext";

export const ChartContext = createContext({
    chartData: {},
    setChartData: ()=>{},
})

const chartDisplayInformation = {
        labels:[],
        datasets: [
             { label: "", data: [], borderColor: "#C26EB4", tension: 0.3 },
           { label: "", data: [], borderColor: "#7E6CAB", tension: 0.3 }
           ],
}

export const ChartProvider = ({children}) => {
    const { currentUser } = useContext(UserContext)
    const [chartData, setChartData] = useState(chartDisplayInformation);
    const value = {chartData, setChartData};

    useEffect(()=>{
        if(currentUser){
            const healthHistory = currentUser?.diagnosis_history?.slice(0, 6) || [];
            const labels = [];
            const systolicData = [];
            const diastolicData = [];
            healthHistory.forEach(h => {
                labels.push(`${h.month.slice(0, 3)}, ${h.year}`);
                systolicData.push(h?.blood_pressure?.systolic?.value);
                diastolicData.push(h?.blood_pressure?.diastolic?.value);
             });
        setChartData(prevState => ({
            ...prevState,
            labels,
            datasets:[
                { ...prevState.datasets[0], data: systolicData },
                { ...prevState.datasets[1], data: diastolicData }
            ],
        }))
        }

    },[currentUser])

    const options = {
        responsive: true,
        scales: {
           x: { title: { display: true, text: "" }, grid: { display: false } },
           y: { title: { display: true, text: "" }, ticks: { callback: value => `${value}`, stepSize: 20 } },
        },
        maintainAspectRatio: false,
        plugins: { tooltip: { enabled: true }, title: { display: true, text: "Hover tooltip" } },
        title: {display:true, text:"Blood"}
     };

    return(
        <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
    )
}