const production = [];


production.push({
    TimeToDay: "Camila",
    cycleLineOfTime: 500,
    lineEficiency: 80,
    

});

function calcularCapacidadProduccion(
    timeToDay, 
    cycleLineOfTime,
     lineEficiency,
     laboralDays) {

        const denominatorOperation = timeToDay*cycleLineOfTime*(lineEficiency/100)*laboralDays;

        const cpResult = 3600 / denominatorOperation;

        return cpResult;
}


function onClickButtonProductionCapacity() {
    const inputDayTime = document.getElementById("InputDayTime");
    const DayTimeValue =  inputDayTime.value;

    const inputCycleDayTime = document.getElementById("InputCycleDayTime");
    const cycleDayTimeValue = inputCycleDayTime.value;

    const inputLinePercent = document.getElementById("InputLinePercent");
    const LinePercentValue = inputLinePercent.value;

    const inputLaboralDays = document.getElementById("InputLaboralDays");
    const laboralDaysValue = inputLaboralDays.value;

    const capacidadProduccion = calcularCapacidadProduccion(DayTimeValue, cycleDayTimeValue, LinePercentValue, laboralDaysValue);


    const resultCp = document.getElementById("ResultCp");
    resultCp.innerText = "La capacidad de producción para este producto es de : "+ capacidadProduccion +" Piezas por año";
}
