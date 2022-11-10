const Notify = document.getElementsByClassName("notify")
let error = document.getElementById("email")
let errortext = document.getElementById("errortext")


function Notifying(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    error.classList.remove("error")
    errortext.classList.add("hidden")
    return (true)
  }
   
    error.classList.add("error")
    errortext.classList.remove("hidden")
    return (false)
}
