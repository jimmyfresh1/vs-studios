
numberOfPeople = 5
numberOfSlices = 12

function cakecutting(numberOfPeople, numberOfSlices) {
    var leftovers = numberOfSlices%numberOfPeople
    console.log(leftovers)
    if (leftovers == 0) {
        console.log("No leftovers for you!");
    }
        else if (leftovers>0 & leftovers<=2) {
        console.log("You have some leftovers");
    }
    else if (leftovers>2 & leftovers<=5) {
        console.log("You have leftovers to share");
    }
    else {
        console.log("Hold another party!");
    }
}

cakecutting(9,12)