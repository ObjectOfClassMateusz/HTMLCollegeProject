let i =0;

black.onclick = () => 
{
    const el = document.querySelectorAll('.bedark');
    for (let i = 0; i < el.length; i++) 
    {
        if( !el[i].classList.contains('dark') )
        {
            el[i].classList.add("dark");
        }
        else
        {
            el[i].classList.remove("dark");
        } 
    }

    const el2 = document.querySelectorAll('.bedark2');
    for (let i = 0; i < el2.length; i++) 
    {
        if( !el2[i].classList.contains('dark2') )
        {
            el2[i].classList.add("dark2");
        }
        else
        {
            el2[i].classList.remove("dark2");
        } 
    }

    const el3= document.querySelectorAll('.bedark3');
    for (let i = 0; i < el3.length; i++) 
    {
        if( !el3[i].classList.contains('dark3') )
        {
            el3[i].classList.add("dark3");
        }
        else
        {
            el3[i].classList.remove("dark3");
        } 
    }

    const img = document.getElementById('slideOne');
    i++;
    if(i%2==1)
    {
        img.style.backgroundImage = "url(./img/dark/alt.jpg)";
    }
    else
    {
        img.style.backgroundImage = "url(./img/pexels-olly-3762800.jpg)";
    }
    
    

    //background-image: 
}