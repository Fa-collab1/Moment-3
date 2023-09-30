function fibionacci(iterations) {
    if (iterations < 1) {
        console.log("not defined in this scope")
        return
    }

    var firstNumber = 0;
    var secondNumber = 1;
    var sum = 0;
    var i = 1;

    while (i <= iterations) {
        sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;
        console.log(sum)
        i++
    }

}

fibionacci(10);