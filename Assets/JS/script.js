// document.getElementById("myP").style.fontFamily = "Impact,Charcoal,sans-serif";
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

//Enable all Buttons
function enableBtns (){
    let x, i
    x = document.querySelectorAll(".ansaloBtn")
    for (i = 0; i<x.length; i++){
        x[i].disabled = false
    }
}


//inputs into variables
let inputLetras = document.getElementById("inputLetras")
let inputNumeros = document.getElementById("inputNumeros")
inputLetras.value = localStorage.getItem("Letras")
inputNumeros.value = localStorage.getItem("Numeros")
//blank button will be disabled until further instruction 
blankBtn.disabled = true
//Local Storage
function guardarLetras(x){
    localStorage.setItem("Letras", x)
}
function guardarNumeros(x) {
    localStorage.setItem("Numeros", x)
}
function guardarCuenta(){
    localStorage.setItem("cuenta", cycleCount)
}
function accederCuenta(){
   cycleCount.value = localStorage.getItem("cuenta")
    console.log(cycleCount.value)
}
accederCuenta()

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
        guardarLetras(inputNumeros.value)
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
       guardarLetras(inputNumeros.value)
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
            guardarLetras(inputNumeros.value)
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
    guardarLetras(inputNumeros.value)
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
        guardarLetras(inputNumeros.value)
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

