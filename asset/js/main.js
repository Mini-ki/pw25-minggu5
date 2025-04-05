document.getElementById('kolomSignUp').addEventListener('submit', function(submit){
    let errorMsg = []
    
    let firstName = document.getElementById('firstName').value.trim()
    let lastName = document.getElementById('lastName').value.trim()
    let email = document.getElementById('email').value.trim()
    let password = document.getElementById('password').value.trim()
    let confirmPassword = document.getElementById('confirmPassword').value.trim()

    let isValid = true
    let cont = 0

    if(firstName === ''){
        errorMsg[cont] = "First Name is Required!!"
        isValid = false
        cont++
    }
    else if (!/^[A-Za-z\s]+$/.test(firstName)) {
        errorMsg[cont] = 'Name Must Only Contain Letters!!'
        isValid = false
        cont++
    }
    
    if(lastName === ''){
        errorMsg[cont] = "Last Name is Required!!"
        isValid = false
        cont++
    }
    else if (!/^[A-Za-z\s]+$/.test(firstName)) {
        errorMsg[cont] = 'Name Must Only Contain Letters!!'
        isValid = false
        cont++
    }

    if(email === '' || !/^\S+@\S+\.\S+$/.test(email)){
        errorMsg[cont] = "Please Enter a Valid Email Address!!"
        isValid = false
        cont++
    }

    if(password === ''){
        console.log('a')
        errorMsg[cont] = "Password is Required!!"
        isValid = false
        cont++
    }
    else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)){
        console.log('a')
        errorMsg[cont] = "Password Must be at Least 8 Characters Long and Include a Letter, a Number, a Special Character (e.g. !@#$%)\n";
        isValid = false
        cont++
    }

    if(confirmPassword === '' || confirmPassword !== password){
        errorMsg[cont] = "Confirm password does not match the entered password!!"
        isValid = false
        cont++
    }

    if(!isValid){
        submit.preventDefault();
        let errorBox = document.getElementById('errorBox')
        for(let i = 0; i < cont; i++){
            setTimeout(() => {
                errorBox.classList.remove('show')
                errorBox.innerText = errorMsg[i]
                errorBox.classList.add('show')
        
            
                setTimeout(() => {
                errorBox.classList.remove('show')
                }, 1500)
            }, i * 2000)
        }
    }
})

document.getElementById('formLogin').addEventListener('submit', function(submit){
    let errorMsg = []
    let email = document.getElementById('emailLogin').value.trim()


})