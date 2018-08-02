var endPoint = parseInt(prompt("Insert a maximum number."));

for(x=1; x<=endPoint;x++){
    if(x%3 === 0 && x%5===0) // Excellent use of type restricted conditionals!
    {
        document.write(x + " FIZZBUZZ +<hr/>")
    }
    else if (x % 3 === 0)
    {
        document.write(x + " FIZZ" +"<hr/>"); // Using the horz rule. Nice!
    }
    else if(x % 5 === 0)
    {
        document.write(x + " BUZZ" +"<hr/>");
    }
    else
    {
        console.log(x)
    }
}


/*

    KEY: EXCELLENT JOB! 

    No comments though :-P

*/