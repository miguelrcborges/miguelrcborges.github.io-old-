var proj = 1

function dispbox2()
{
    document.getElementById("box1").style.display="none";
    document.getElementById("box2").style.display="block"
}

function closebox2()
{
    document.getElementById("box2").style.display="none";
    document.getElementById("box1").style.display="block";
}

function nextProject()
{
    if (proj == 2)
    {
        return
    }
    document.getElementById("proj" + proj + "logo").style.display="none";
    document.getElementById("proj" + proj + "summ").style.display="none";
    proj += 1;
    document.getElementById("proj" + proj + "logo").style.display="block";
    document.getElementById("proj" + proj + "summ").style.display="block";
    document.getElementById("Previous").classList.add("Active")
    if (proj == 2)
    {
        document.getElementById("Next").classList.remove("Active")
    }
}

function previousProject()
{
    if (proj == 1)
    {
        return
    }
    document.getElementById("proj" + proj + "logo").style.display="none";
    document.getElementById("proj" + proj + "summ").style.display="none";
    proj -= 1;
    document.getElementById("proj" + proj + "logo").style.display="block";
    document.getElementById("proj" + proj + "summ").style.display="block";
    document.getElementById("Next").classList.add("Active")
    if (proj == 1)
    {
        document.getElementById("Previous").classList.remove("Active")
    }
}