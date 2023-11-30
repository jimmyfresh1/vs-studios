// this does not technically exactly follow the instructions, but it's a practice assignment anyway, and this function basically does 'all three' without me having to make new ones.
//for condition 1,  every value in each array is noted and shown to the user, satisfying the printing each number
// for condition 2, the sums are shown at the end. i felt the wording was a little ambiguous, so i just had it sum.
// for condition 3, i had it note which ones weren't greater than 5. they're still named, so that condition 1 can be satisfied essentially. 
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