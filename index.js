console.log("we are running!");

const data = [{
    Principal: 2500,
    Time: 1.8
}, {
    Principal: 1000,
    Time: 5
},{
    Principal: 2000,
    Time: 3
}];

interestCalculator(data);

function interestCalculator (array){
    const interestData = array.map(arrItem => {
        if (arrItem.Principal >= 2500 && (arrItem.Time > 1 && arrItem.Time < 3)){
            arrItem.Rate = 3;
            const interest = (arrItem.Principal * arrItem.Time * arrItem.Rate)/100;
            arrItem.Interest = interest;
        }
        else if(arrItem.Principal >= 2500 && arrItem.Time >= 3){
            arrItem.Rate = 4;
            const interest = (arrItem.Principal * arrItem.Time * arrItem.Rate)/100;
            arrItem.Interest = interest;
        }
        else if (arrItem.Principal < 2500 || arrItem.Time <= 1){
            arrItem.Rate = 2;
            const interest = (arrItem.Principal * arrItem.Time * arrItem.Rate)/100;
            arrItem.Interest = interest;
        }else{
            arrItem.Rate = 1;
            const interest = (arrItem.Principal * arrItem.Time * arrItem.Rate)/100;
            arrItem.Interest = interest;
        }

        console.log(arrItem);

        return arrItem;
    })


    // return interestData;
}