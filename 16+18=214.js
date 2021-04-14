https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

    function add(num1, num2) {
        num1 = String(num1);
        num2 = String(num2);
        let maxLength = Math.max(num1.length, num2.length);
        num1 = num1.padStart(maxLength, '0');
        num2 = num2.padStart(maxLength, '0');
        let sum = '';
        for(let i = 0; i < num1.length; i++){
            sum += +num1[i] + +num2[i];
        }
        return +sum;
    }