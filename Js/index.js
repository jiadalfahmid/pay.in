document.getElementById('login').addEventListener("click", function(event){
     event.preventDefault()
     const phone = document.getElementById('phone').value
     const pin = document.getElementById('pin').value

     if(phone.length === 11 && pin.length === 4){
          window.location.href = "./home.html"
     }else{
          alert('Your Phone or pin is invalid! Please try again with the correct one.')
     }
})