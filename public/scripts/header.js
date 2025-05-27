function backNavShowsUp()
{
    let backNavVariable = document.getElementById("backNavId");
    let backNavButtonVariable = document.getElementById("backNavButtId");
    
    if (backNavVariable.style.visibility == "") 
    {
        backNavVariable.style.visibility = "visible";
        backNavVariable.style.width = "40vw";
        backNavButtonVariable.style.transition = "0.5s";
        backNavButtonVariable.style.visibility = "visible";
    }
    else 
    {
        //console.log("Go home")
        backNavVariable.style.visibility = "";
        backNavVariable.style.width = "0px";
        backNavButtonVariable.style.visibility = "";
        backNavButtonVariable.style.transition = "0s";
    }    
}