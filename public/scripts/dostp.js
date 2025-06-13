remove.onclick = () => 
{
    const el = document.querySelectorAll('.dpd');
    for (let i = 0; i < el.length; i++) 
    {
        if( !el[i].classList.contains('dost') )
        {
            el[i].classList.add("dost");
        }
        else
        {
            el[i].classList.remove("dost");
        }
    }
}