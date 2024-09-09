 /*discountPercentage=

​    if(MRP >= sellingPrice){
    
    let message = "enter the price"

    console.log("the price is")
    if (MRP >= sellingPrice){
        console.log("hai")
    }
        else {
            console.log("noit")
        } */
   
       /* function calculateDiscount() {
            const mrp = parseFloat(document.getElementById('mrp').value);
            const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);

            if (isNaN(mrp) || isNaN(sellingPrice) || mrp <= 0) {
                document.getElementById('result').innerText = 'Please enter valid numbers. MRP must be greater than zero.';
                return;
            }

            const discountPercentage = ((mrp - sellingPrice) * 100) / mrp;
            document.getElementById('result').innerText = `The discount percentage is ${discountPercentage.toFixed(2)}%`;
        }
*/

        let MRP = 200 
         
        let sellingPrice = 150
         let discountPercentage = (MRP-sellingPrice)*100/MRP
   //     let message = "The Maximum Retail Price is"
        console.log(discountPercentage + "%");
        
        

  


/*

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculateBMI(weight, height) {
    return weight / (height * height);
}
rl.question('Enter your weight (kg): ', (weightInput) => {
    const weight = parseFloat(weightInput);
    rl.question('Enter your height (m): ', (heightInput) => {
        const height = parseFloat(heightInput);
        if (isNaN(weight) || isNaN(height) || height <= 0) {
            console.log('Please enter valid weight and height.');
        } else {
            const bmi = calculateBMI(weight, height);
            let category;
            if (bmi < 18.5) {
                category = 'Underweight';
            } else if (bmi < 24.9) {
                category = 'Normal weight';
            } else if (bmi < 29.9) {
                category = 'Overweight';
            } else {
                category = 'Obese';
            }
            console.log(`Your BMI is: ${bmi.toFixed(2)} (${category})`);
        }
        rl.close();
    });
});
       
*/


