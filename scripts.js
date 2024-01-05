let value = new Date;
value.getFullYear();
console.log(value.getFullYear());
let submitBtn = document.getElementById("button");
submitBtn.onclick = function(){
    console.log("Hello");
    let yearValue = document.getElementById("year");
    let monthValue = document.getElementById("month");
    let dayValue = document.getElementById("day");
    

    yearValue = Number(yearValue.value);
    dayValue = Number(dayValue.value);
    monthValue = Number(monthValue.value);
    if(yearValue=="" || monthValue == "" || dayValue ==""){
        for(let x =0; x <=3; x++){
        let input = document.getElementsByClassName("input")[x];
        input.style.border = "1px solid red";
        
        let text = document.getElementsByClassName("error-text")[x];
       
        setTimeout(function(){
            
            input.style.border = "1px solid grey";
            text.classList.remove("on");
        }, 1000);
        text.classList.add("on");
         }
        
        

        
        

        

    }

    console.log(monthValue);
};

function calculate(Year, Month, Day){
    let date = new Date();
    let currYear = date.getFullYear();
    let currDay = date.getDay();
    let currMonth = date.getMonth();



    let userYear = Year;
    let userMonth = Month;
    let userDay = Day;

    


}