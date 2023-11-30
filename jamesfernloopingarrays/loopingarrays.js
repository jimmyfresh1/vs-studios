// this does not technically exactly follow the instructions, but it's a practice assignment anyway, and this function basically does 'all three' without me having to make new ones. 
arr1 = [8,6,7,5,3,0,9];
arr2= [4,7,13,13,19,37,-2];
arr3=[6,2,12,14,-24,5,0];
var sum=0;
function looperprinter(GenArray) {
    for (var i=0; i<GenArray.length; i++) {
        sum += GenArray[i];
        var msg = "This value "
        var msg2= "No dice! "
        if (GenArray[i] > 5) {
            console.log(GenArray[i]);
            msg += GenArray[i]
            msg += " is greater than five!"
            console.log(msg)
        }
        else {
            msg+= GenArray[i]
            msg+= " is less than or equal to five!"
            console.log(msg2 + msg)
        }
    }
        return sum
}
var First = looperprinter(arr1)
var Second = looperprinter(arr2)
var Third = looperprinter(arr3)
console.log(First, Second, Third)
//TESTING making a change 