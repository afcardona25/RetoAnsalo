//Logic variables 
let arrayLetras = []
let arrayNumeros = []
const cycleCount = document.getElementById("cycleCount")
cycleCount.value = 0
let messageLettersSing = " la letra: "
let messageLettersPlur = "n las letras: "
let messageNumbersSing = " el número: "
let messageNumbersPlur = "n los números: "


//buttons into variables
const a_1 = document.getElementById("a1")
const b_2 = document.getElementById("b2")
const c_3 = document.getElementById("c3")
const d_4 = document.getElementById("d4")
const e_5 = document.getElementById("e5")
const f_6 = document.getElementById("f6")
const g_7 = document.getElementById("g7")
const h_8 = document.getElementById("h8")
const i_9 = document.getElementById("i9")
const j_0 = document.getElementById("j0")
const blankBtn = document.getElementById("blankBtn")
const resetBtn = document.getElementById("reset")
//inputs into variables
let inputLetras = document.getElementById("inputLetras")
let inputNumeros = document.getElementById("inputNumeros")
inputLetras.value = localStorage.getItem("Letras")
inputNumeros.value = localStorage.getItem("Numeros")
//theme change
let retroToggle = document.getElementById("retroToggle")
let retrocount = 1
let themecount = 1
//blank button will be disabled until further instruction 
blankBtn.disabled = true
//Local Storage
function guardarLetras(x) {
    localStorage.setItem("Letras", x)
}
function guardarNumeros(x) {
    localStorage.setItem("Numeros", x)
}
function guardarCuenta() {
    localStorage.setItem("cuenta", cycleCount)
}
function accederCuenta() {
    cycleCount.value = localStorage.getItem("cuenta")
    console.log(cycleCount.value)
}
/*function saveRetroMode() {
    localStorage.setItem("RetroOn", retrocount)
}
function saveDarkTheme() {
    localStorage.setItem("DarkOn", themecount)
}*/

function retroTheme() {
    retrocount += 1
    
    if (retrocount % 2 == 0) {
        document.getElementById("principal").classList.remove("border", "border-info")
        document.getElementById("principal").classList.add("retro")
        document.body.style.backgroundColor = "black";
        document.getElementById("retroToggle").classList.remove("round")
        document.getElementById("themeToggle").classList.remove("round")
        document.getElementById("pacman").classList.remove("d-none")
        changeBtnsRetro()
        console.log("se agrega retro")
        localStorage.setItem("RetroOn", true)

    } else {
        document.getElementById("principal").classList.remove("retro")
        document.getElementById("principal").classList.add("border", "border-info")
        console.log("se quita retro")
        document.body.style.backgroundColor = "initial";
        document.getElementById("retroToggle").classList.add("round")
        document.getElementById("themeToggle").classList.add("round")
        document.getElementById("pacman").classList.add("d-none")
        localStorage.setItem("RetroOn", false)
        changeBtnsNormal()
        
    }
}
function darkTheme() {
    themecount += 1
    
    if (themecount % 2 == 0) {
        document.getElementById("principal").classList.add("dark","border-light")
        document.body.style.backgroundColor = "rgb(49, 49, 49)";
        console.log(document.getElementById("principal"))
        localStorage.setItem("DarkOn", true)
        document.getElementById("labelLetras").classList.add("text-light")
        document.getElementById("labelNumeros").classList.add("text-light")
        document.getElementById("principal").classList.remove("border-info")
        changeBtnsdark()
        document.getElementById("labelRetro").classList.add("text-light")
        document.getElementById("labelTema").classList.add("text-light")
        
    } else {
        document.getElementById("principal").classList.remove("dark")
        console.log(document.getElementById("principal"))
        document.body.style.backgroundColor = "initial";
        localStorage.setItem("DarkOn", false)
        document.getElementById("principal").classList.add("border-info")
        document.getElementById("principal").classList.remove("border-light")
        document.getElementById("labelLetras").classList.remove("text-light")
        document.getElementById("labelNumeros").classList.remove("text-light")
        changeBtnsNormal()
        document.getElementById("labelRetro").classList.remove("text-light")
        document.getElementById("labelTema").classList.remove("text-light")
        
    }

}
function setTheme() {
    let retro = localStorage.getItem("RetroOn")
    let dark = localStorage.getItem("DarkOn")
    console.log(retro)
    console.log(dark)
    if(retro == "true"){
        retroTheme()
        document.getElementById("retro").checked = true
    } else if( dark == "true"){
        darkTheme()
        document.getElementById("dark").checked = true
    }
    
}

accederCuenta()

//themeChanging logic

retroToggle.addEventListener("click", ()=>{
    retroTheme()
    localStorage.setItem("DarkOn", false)
})
let themeToggle = document.getElementById("themeToggle")
themeToggle.addEventListener("click", () => {
    darkTheme() 
    localStorage.setItem("RetroOn", false)
})

function changeBtnsRetro(){
    let x,i
    x = document.querySelectorAll(".customBtn")
    for (i = 0; i < x.length; i++){
        x[i].classList.remove("btn", "btn-outline-info")
    }
}
function changeBtnsNormal() {
    let x, i
    x = document.querySelectorAll(".customBtn")
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("btn", "btn-outline-info")
        x[i].classList.remove("btn-outline-light")

    }
}
function changeBtnsdark() {
    let x, i
    x = document.querySelectorAll(".customBtn")
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("btn", "btn-outline-light")
        x[i].classList.remove("btn-outline-info")
    }
}





//Enable all Buttons
function enableBtns (){
    let x, i
    x = document.querySelectorAll(".ansaloBtn")
    for (i = 0; i<x.length; i++){
        x[i].disabled = false
    }
}




//Buttons Logic  
resetBtn.addEventListener("click", ()=>{
    localStorage.removeItem("Letras")
    localStorage.removeItem("Numeros")
    localStorage.removeItem("cuenta")
    inputLetras.value = ""
    inputNumeros.value = ""
    cycleCount.value = 0
    enableBtns()
})
a_1.addEventListener("click", () =>{
    if(cycleCount.value==0){
        
            inputLetras.value += "A "
            a_1.disabled = true
            guardarLetras(inputLetras.value)
        
    } else {
        inputNumeros.value += 1
        a_1.disabled = true
        guardarNumeros(inputNumeros.value)
    }
   
})
b_2.addEventListener("click", () => {
    if (cycleCount.value==0){
        if (inputLetras.value === "A ") {
            inputLetras.value += "B "
            b_2.disabled = true
            guardarLetras(inputLetras.value)
        } else {
            swal("Error!", "Te falta la letra A", "warning");
        }
    } else {
        if (inputNumeros.value == 1) {
            inputNumeros.value += 2
            b_2.disabled = true
            guardarNumeros(inputNumeros.value)
        } else {
            swal("Error!", `Te falta${messageNumbersSing} 1`, "warning");
        }
    }
})
c_3.addEventListener("click", ()=>{
    if(cycleCount.value== 0 ){
        if (inputLetras.value === "A B ") {
            inputLetras.value += "C "
            c_3.disabled = true
            guardarLetras(inputLetras.value)
        } else {
            if (inputLetras.value === "") {
                swal("Error!", "Te falta las letras A y B", "warning");
            } else {
                swal("Error!", "Te falta la letra B", "warning");
            }

        }
    } else {
        if (inputNumeros.value == 12) {
            inputNumeros.value += 3
            c_3.disabled = true
            guardarNumeros(inputNumeros.value)
        } else {
            if (inputNumeros.value == "") {
                swal("Error!", `Te falta${messageNumbersPlur} 1 y 2`, "warning");
            } else {
                swal("Error!", `Te falta${messageNumbersSing} 2`, "warning");
            }

        }
    }
})

d_4.addEventListener("click", ()=>{
   if(cycleCount.value==0){
       if (inputLetras.value === "A B C ") {
           inputLetras.value += "D "
           d_4.disabled = true
           guardarLetras(inputLetras.value)
       } else if (inputLetras.value === "") {
           swal("Error!", "Te falta las letras A, B y C", "warning");

       } else if (inputLetras.value === "A ") {
           swal("Error!", "Te falta las letras B y C", "warning");
       } else {
           swal("Error!", "Te falta la letra C", "warning");
       }
   } else{
       if (inputNumeros.value == 123) {
           inputNumeros.value += 4
           d_4.disabled = true
           guardarNumeros(inputNumeros.value)
       } else if (inputNumeros == "") {
           swal("Error!", `Te falta${messageNumbersPlur} 1, 2 y 3`, "warning");

       } else if (inputNumeros.value == 1) {
           swal("Error!", `Te falta${ messageNumbersPlur } 2 y 3`, "warning");
       } else {
           swal("Error!", `Te falta${messageNumbersSing} 3`, "warning");
       }
   }
        
})
e_5.addEventListener("click", () => {
    if(cycleCount.value== 0 ){
        if (inputLetras.value === "A B C D ") {
            inputLetras.value += "E "
            e_5.disabled = true
            guardarLetras(inputLetras.value)
            } else if (inputLetras.value === "") {
            swal("Error!", "Te falta las letras A, B, C y D", "warning");

            } else if (inputLetras.value === "A ") {
            swal("Error!", "Te falta las letras B, C y D", "warning");
            } else if (inputLetras.value === "A B ") {
            swal("Error!", "Te falta las letras C y D", "warning");
            } else {
            swal("Error!", "Te falta la letra D", "warning");
                }
        } else if (inputNumeros.value == 1234) {
        inputNumeros.value += 5
        e_5.disabled = true
        guardarNumeros(inputNumeros.value)
        } else if (inputNumeros.value == "") {
            swal("Error!", `Te falta${messageNumbersPlur} 1, 2, 3 y 4`, "warning");

        } else if (inputNumeros.value == 1) {
        swal("Error!", `Te falta${messageNumbersPlur} 2, 3 y 4`, "warning");
        } else if (inputNumeros.value == 12) {
        swal("Error!", `Te falta${messageNumbersPlur} 3 y 4`, "warning");
        } else {
            swal("Error!",`Te falta${messageNumbersSing} 4`, "warning");
    }

})

f_6.addEventListener("click", () => {
   if(cycleCount.value==0){
       if (inputLetras.value === "A B C D E ") {
           inputLetras.value += "F "
           f_6.disabled = true
           guardarLetras(inputLetras.value)
       } else if (inputLetras.value === "") {
           swal("Error!", "Te falta las letras A, B, C, D y E", "warning");

       } else if (inputLetras.value === "A ") {
           swal("Error!", "Te falta las letras B, C, D y E", "warning");
       } else if (inputLetras.value === "A B ") {
           swal("Error!", "Te falta las letras C, D y E", "warning");
       } else if (inputLetras.value === "A B C ") {
           swal("Error!", "Te falta las letras D y E", "warning");
       } else {
           swal("Error!", "Te falta la letra E", "warning");
       }
   } else if (inputNumeros.value == 12345) {
       inputNumeros.value += 6
       f_6.disabled = true
       guardarNumeros(inputNumeros.value)
        } else if (inputNumeros.value == "") {
       swal("Error!", `Te falta${messageNumbersPlur} 1, 2, 3, 4 y 5`, "warning");

        } else if (inputNumeros.value == 1) {
       swal("Error!", `Te falta${messageNumbersPlur} 2, 3, 4 y 5`, "warning");
        } else if (inputNumeros.value == 12) {
       swal("Error!", `Te falta${messageNumbersPlur} 3, 4 y 5`, "warning");
        } else if (inputNumeros.value == 123) {
       swal("Error!", `Te falta${messageNumbersPlur} 4 y 5`, "warning");
        } else {
       swal("Error!", `Te falta${ messageNumbersSing } 5`, "warning");
   }

})
g_7.addEventListener("click", () => {
    if(cycleCount.value==0){
        if (inputLetras.value === "A B C D E F ") {
            inputLetras.value += "G "
            g_7.disabled = true
            guardarLetras(inputLetras.value)
        } else if (inputLetras.value === "") {
            swal("Error!", "Te falta las letras A, B, C, D, E y F", "warning");

        } else if (inputLetras.value === "A ") {
            swal("Error!", "Te falta las letras B, C, D, E y F", "warning");
        } else if (inputLetras.value === "A B ") {
            swal("Error!", "Te falta las letras C, D, E y F", "warning");
        } else if (inputLetras.value === "A B C ") {
            swal("Error!", "Te falta las letras D, E y F", "warning");
        } else if (inputLetras.value === "A B C D ") {
            swal("Error!", "Te falta las letras E y F", "warning");
        } else {
            swal("Error!", "Te falta la letra F", "warning");
        }
    } else{
        if (inputNumeros.value == 123456) {
            inputNumeros.value += 7
            g_7.disabled = true
            guardarNumeros(inputNumeros.value)
        } else if (inputNumeros.value == "") {
            swal("Error!", `Te falta${messageNumbersPlur} 1, 2, 3, 4, 5 y 6`, "warning");

        } else if (inputNumeros.value == 1) {
            swal("Error!", `Te falta${messageNumbersPlur} 2, 3, 4, 5 y 6`, "warning");
        } else if (inputNumeros.value == 12) {
            swal("Error!", `Te falta${messageNumbersPlur} 3, 4, 5 y 6`, "warning");
        } else if (inputNumeros.value == 123) {
            swal("Error!", `Te falta${messageNumbersPlur} 4, 5 y 6`, "warning");
        } else if (inputNumeros.value == 1234) {
            swal("Error!", `Te falta${messageNumbersPlur} 5 y 6`, "warning");
        } else {
            swal("Error!", `Te falta${messageNumbersSing} 6`, "warning");
        }
    }

})
h_8.addEventListener("click", () => {
if(cycleCount.value==0){
    if (inputLetras.value === "A B C D E F G ") {
        inputLetras.value += "H "
        h_8.disabled = true
        guardarLetras(inputLetras.value)
    } else if (inputLetras.value === "") {
        swal("Error!", "Te falta las letras A, B, C, D, E, F y G", "warning");

    } else if (inputLetras.value === "A ") {
        swal("Error!", "Te falta las letras B, C, D, E, F y G", "warning");
    } else if (inputLetras.value === "A B ") {
        swal("Error!", "Te falta las letras C, D, E, F y G", "warning");
    } else if (inputLetras.value === "A B C ") {
        swal("Error!", "Te falta las letras D, E, F y G", "warning");
    } else if (inputLetras.value === "A B C D ") {
        swal("Error!", "Te falta las letras E, F y G", "warning");
    } else if (inputLetras.value === "A B C D E ") {
        swal("Error!", "Te falta las letras F y G", "warning");
    } else {
        swal("Error!", "Te falta la letra F", "warning");
    }
} else if (inputNumeros.value ==1234567) {
    inputNumeros.value += 8
    h_8.disabled = true
    guardarNumeros(inputNumeros.value)
} else if (inputNumeros.value == "") {
    swal("Error!", `Te falta${messageNumbersPlur} 1, 2, 3, 4, 5, 6 y 7`, "warning");

} else if (inputNumeros.value == 1) {
    swal("Error!", `Te falta${messageNumbersPlur} 2, 3, 4, 5, 6 y 7`, "warning");
} else if (inputNumeros.value == 12) {
    swal("Error!", `Te falta${messageNumbersPlur} 3, 4, 5, 6 y 7`, "warning");
} else if (inputNumeros.value == 123) {
    swal("Error!", `Te falta${messageNumbersPlur} 4, 5, 6 y 7`, "warning");
} else if (inputNumeros.value == 1234) {
    swal("Error!", `Te falta${messageNumbersPlur} 5, 6 y 7`, "warning");
} else if (inputNumeros.value == 12345) {
    swal("Error!", `Te falta${messageNumbersPlur} 6 y 7`, "warning");
} else {
    swal("Error!", `Te falta${messageNumbersSing} 7`, "warning");
}

})
i_9.addEventListener("click", () => {
    if(cycleCount.value==0){
        if (inputLetras.value === "A B C D E F G H ") {
            inputLetras.value += "I "
            i_9.disabled = true
            guardarLetras(inputLetras.value)
        } else if (inputLetras.value === "") {
            swal("Error!", "Te falta las letras A, B, C, D, E, F, G y H", "warning");

        } else if (inputLetras.value === "A ") {
            swal("Error!", "Te falta las letras B, C, D, E, F, G y H", "warning");
        } else if (inputLetras.value === "A B ") {
            swal("Error!", "Te falta las letras C, D, E, F, G y H", "warning");
        } else if (inputLetras.value === "A B C ") {
            swal("Error!", "Te falta las letras D, E, F, G y H", "warning");
        } else if (inputLetras.value === "A B C D ") {
            swal("Error!", "Te falta las letras E, F, G y H", "warning");
        } else if (inputLetras.value === "A B C D E ") {
            swal("Error!", "Te falta las letras F, G y H", "warning");
        } else if (inputLetras.value === "A B C D E F ") {
            swal("Error!", "Te falta las letras G y H", "warning");
        } else {
            swal("Error!", "Te falta la letra H", "warning");
        }
    } else if (inputNumeros.value ==12345678) {
        inputNumeros.value += 9
        i_9.disabled = true
        guardarNumeros(inputNumeros.value)
    } else if (inputNumeros.value == "") {
        swal("Error!", `Te falta${messageNumbersPlur} 1, 2, 3, 4, 5, 6, 7 y 8`, "warning");

    } else if (inputNumeros.value ==1) {
        swal("Error!", `Te falta${messageNumbersPlur} 2, 3, 4, 5, 6, 7 y 8`, "warning");
    } else if (inputNumeros.value == 12) {
        swal("Error!", `Te falta${messageNumbersPlur} 3, 4, 5, 6, 7 y 8`, "warning");
    } else if (inputNumeros.value == 123) {
        swal("Error!", `Te falta${messageNumbersPlur} 4, 5, 6, 7 y 8`, "warning");
    } else if (inputNumeros.value == 1234) {
        swal("Error!", `Te falta${messageNumbersPlur} 5, 6, 7 y 8`, "warning");
    } else if (inputNumeros.value == 12345) {
        swal("Error!", `Te falta${messageNumbersPlur} 6, 7 y 8`, "warning");
    } else if (inputNumeros.value == 123456) {
        swal("Error!", `Te falta${messageNumbersPlur} 7 y 8`, "warning");
    } else {
        swal("Error!", `Te falta${messageNumbersSing} 8`, "warning");
    }

})

j_0.addEventListener("click", () => {
   if(cycleCount.value==0){
       if (inputLetras.value === "A B C D E F G H I ") {
           inputLetras.value += "J "
           guardarLetras(inputLetras.value)
           enableBtns()
           swal("Bien Hecho", "Has terminado las letras", "success")
           cycleCount.value = 1
           guardarCuenta()
       } else if (inputLetras.value === "") {
           swal("Error!", "Te falta las letras A, B, C, D, E, F, G, H y I", "warning");

       } else if (inputLetras.value === "A ") {
           swal("Error!", "Te falta las letras B, C, D, E, F, G, H y I", "warning");
       } else if (inputLetras.value === "A B ") {
           swal("Error!", "Te falta las letras C, D, E, F, G, H y I", "warning");
       } else if (inputLetras.value === "A B C ") {
           swal("Error!", "Te falta las letras D, E, F, G, H y I", "warning");
       } else if (inputLetras.value === "A B C D ") {
           swal("Error!", "Te falta las letras E, F, G, H y I", "warning");
       } else if (inputLetras.value === "A B C D E ") {
           swal("Error!", "Te falta las letras F, G, H y I", "warning");
       } else if (inputLetras.value === "A B C D E F ") {
           swal("Error!", "Te falta las letras G, H y I", "warning");
       } else if (inputLetras.value === "A B C D E F G ") {
           swal("Error!", "Te falta las letras H y I", "warning");
       } else {
           swal("Error!", "Te falta la letra I", "warning");
       }
   } else if (inputNumeros.value ==123456789) {
       inputNumeros.value += 0
       guardarNumeros(inputNumeros.value)
       swal("Bien Hecho", "Has terminado Números y Letras", "success")
       cycleCount.value = 1
       j_0.disabled = true
       guardarCuenta()
   } else if (inputNumeros.value === "") {
       swal("Error!", `Te falta${messageNumbersPlur} 1, 2, 3, 4, 5, 6, 7, 8 y 9`, "warning");

   } else if (inputNumeros.value == 1) {
       swal("Error!", `Te falta${messageNumbersPlur} 2, 3, 4, 5, 6, 7, 8 y 9`, "warning");
   } else if (inputNumeros.value == 12) {
       swal("Error!", `Te falta${messageNumbersPlur} 3, 4, 5, 6, 7, 8 y 9`, "warning");
   } else if (inputNumeros.value == 123) {
       swal("Error!", `Te falta${messageNumbersPlur} 4, 5, 6, 7, 8 y 9`, "warning");
   } else if (inputNumeros.value == 1234) {
       swal("Error!", `Te falta${messageNumbersPlur} 5, 6, 7, 8 y 9`, "warning");
   } else if (inputNumeros.value == 12345) {
       swal("Error!", `Te falta${messageNumbersPlur} 6, 7, 8 y 9`, "warning");
   } else if (inputNumeros.value == 123456) {
       swal("Error!", `Te falta${messageNumbersPlur} 7, 8 y 9`, "warning");
   } else if (inputNumeros.value == 1234567) {
       swal("Error!", `Te falta${messageNumbersPlur} 8 y 9`, "warning");
   } else {
       swal("Error!", `Te falta${messageNumbersSing} 8`, "warning");
   }
    
})

document.getElementById('body').onload = setTheme()