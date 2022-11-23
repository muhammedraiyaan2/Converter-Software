let from = document.getElementById("from")
let to = document.getElementById("to")
let input = document.getElementById("kg-g")
let button = document.getElementById("kg-g-b")
let response = document.getElementById("response")
button.addEventListener("click",()=>{
 let dataFrom = from.options[from.selectedIndex].text
 let dataTo = to.options[to.selectedIndex].text
 if(dataFrom=="Kilogram" && dataTo =="Gram"){
  let result = input.value*1000
  response.innerHTML = `${result} Gram`
 }
 else if(dataFrom=="Gram" && dataTo =="Kilogram"){
  let result = input.value/1000
  response.innerHTML = `${result} Kilogram`
 }
 else if(dataFrom=="Kilometer" && dataTo =="Meter"){
  let result = input.value*1000
  response.innerHTML = `${result} Meter`
 }
 else if(dataFrom=="Meter" && dataTo =="Kilometer"){
  let result = input.value/1000
  response.innerHTML = `${result} Kilometer`
 }
 else if(dataFrom=="Kilolitre" && dataTo =="Litre"){
  let result = input.value*1000
  response.innerHTML = `${result} Litre`
 }
 else if(dataFrom=="Litre" && dataTo =="Kilolitre"){
  let result = input.value/1000
  response.innerHTML = `${result} Kilolitre`
 }
 else if(dataFrom=="Kilometer" && dataTo =="Miles"){
  let result = parseFloat(input.value/1.609).toFixed(3)
  response.innerHTML = `${result} Miles`
 }
 else if(dataFrom=="Miles" && dataTo =="Kilometer"){
  let result = parseFloat(input.value*1.609).toFixed(3)
  response.innerHTML = `${result} Kilometer`
 }
 else if(dataFrom=="Meter" && dataTo =="Miles"){
  let result = parseFloat(input.value/1609).toFixed(3)
  response.innerHTML = `${result} Miles`
 }
 else if(dataFrom=="Miles" && dataTo =="Meter"){
  let result = parseFloat(input.value*1609).toFixed(3)
  response.innerHTML = `${result} Meter`
 }
 else{
  response.innerHTML = `Can't Convert from ${dataFrom} to ${dataTo}`
 }
})