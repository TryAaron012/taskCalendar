function getTaskForDay(){
    let day = prompt("Enter a day of the week:");
    switch (day.toLowerCase()){
        case 'monday':
            alert("Finish your assignment.");
            break;
        case 'tuesday':
            alert("Attend the meeting.");
            break; 
        case 'wednesday':
            alert("Work on the presentation.");
            break; 
        case 'thursday':
            alert("Review the weekly progress.");
             break;
        case 'friday':
            alert("Submit the project.");
            break; 
        case 'saturday':
            alert("Prepare for the upcoming week.");
            break; 
        case 'sunday':
            alert("Spend time with your family.");
            break;
    }
}    