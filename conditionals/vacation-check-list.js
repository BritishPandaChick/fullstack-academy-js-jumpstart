//vacation checklist
function vacationCheckList(directions, chargedGPS, packed){
    if(directions && chargedGPS){
        if(packed === "ready"){
            return "Have a great vacation!";
        } else if(packed === "need more supplies"){
            return "What are you waiting for? Go Shopping!";
        } else if(packed === "need luggage"){
            return "Get yourself Luggage!";
        } else {
            return "Are you ready or not?";
        }
    } else if(directions || chargedGPS){
        return "You need both items, directions and a charged GPS";
    } else {
        return "You have a lot of work to do, hopefully you packed!";
    }
}

vacationCheckList("some value", "some value", "some value");
