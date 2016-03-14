"use strict"

function tell(message, { closetext = "Close", closeside = "right" } = {}) {
 return(new Promise(function(resolve) {
  let dialog = document.createElement("dialog")
  dialog.textContent = message
  dialog.innerHTML = dialog.innerHTML.split("\n").join("<br>") + "<br><br>"
  let close = document.createElement("button")
  close.textContent = closetext
  close.style.float = closeside
  close.addEventListener("click", function() {
   dialog.close()
  })
  dialog.appendChild(close)
  dialog.addEventListener("close", function() {
   resolve()
   dialog.remove()
  })
  document.body.appendChild(dialog)
  dialog.showModal()
})) }

function ask(message, { yestext = "Yes", yesside = "left", notext = "No", noside = "right", noerror = false } = {}) {
 return(new Promise(function(resolve, reject) {
  let dialog = document.createElement("dialog")
  dialog.textContent = message
  dialog.innerHTML = dialog.innerHTML.split("\n").join("<br>") + "<br><br>" 
  let yes = document.createElement("button")
  yes.textContent = yestext
  yes.style.float = yesside
  yes.addEventListener("click", function() {
   dialog.close(true)
  })
  dialog.appendChild(yes)
  let no = document.createElement("button")
  no.textContent = notext
  no.style.float = noside
  no.addEventListener("click", function() {
   dialog.close()
  })
  dialog.appendChild(no)
  dialog.addEventListener("close", function() {
   if(dialog.returnValue) {
    resolve(true)
   } else if(noerror) {
    reject(false)
   } else {
    resolve(false)
   }
   dialog.remove()
  })
  document.body.appendChild(dialog)
  dialog.showModal()
})) }
