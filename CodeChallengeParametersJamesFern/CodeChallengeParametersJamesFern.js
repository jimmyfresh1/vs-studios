function greet(time,person) {
    if (time < 12) {
        var tod = "Morning!"
    }
    else {
            tod = "Evening!"
    }

    if (person == "Count Dooku") {
        enemy = true
    }
    else {
        enemy = false
        }
        

        if (enemy == true) {
                console.log(tod," Just the time to kill you, Count Dooku!")
            }
        else { 
                console.log (tod, "How are you,",person,"?")
            }

}

greet(13, "James") 
