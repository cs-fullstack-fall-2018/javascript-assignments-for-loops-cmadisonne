var myNumberList = [12, 2112, 9000, 1999, 24];


// for(initial=0 ; initial>largestNum ; initial++) // KEY: Largest number undefined :-(
// {
//     document.write(myNumberList[initial]);
// }

/*
	KEY: The key to this one is just have variable to keep track of largest number.
*/

function main() {

    var myNumberList = [12, 2112, 9000, 1999, 24];
    var largestNumber = -1;

    for (var x = 0; x < myNumberList.length; x++) {
        if (myNumberList[x] > largestNumber) { // If bigger than your current largest number, set to current largest number
            largestNumber = myNumberList[x]; // Hang onto the largest number
        }

    }       
    console.log("The largest number is " + largestNumber);
}
main();