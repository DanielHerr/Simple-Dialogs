"use strict"

function tell(message, options) {
 return(new Promise(function(resolve) {
  if(typeof(options) == "function") {
   callback = options
   options = {}
  }
  options = options || {}
  let dialog = document.createElement("dialog")
  dialog.textContent = message
  dialog.innerHTML = dialog.innerHTML.split("\n").join("<br>") + "<br><br>"
  let close = document.createElement("button")
  close.textContent = options.text || "Continue"
  close.style.float = options.side || "right"
  close.addEventListener("click", function() {
   dialog.close()
  })
  dialog.appendChild(close)
  dialog.addEventListener("close", function() {
   dialog.remove()
   resolve()
  })
  document.body.appendChild(dialog)
  dialog.showModal()
})) }

function ask(message, options) {
 return(new Promise(function(resolve, reject) {
  if(typeof options === "function") {
   callback = options
   options = {}
  }
  options = options || {}
  options.yes = options.yes || {}
  options.no = options.no || {}
  let dialog = document.createElement("dialog")
  dialog.textContent = message
  dialog.innerHTML = dialog.innerHTML.split("\n").join("<br>") + "<br><br>" 
  let yes = document.createElement("button")
  yes.textContent = options.yes.text || "Continue"
  yes.style.float = options.yes.side || "left"
  yes.addEventListener("click", function() {
   dialog.close(true)
  })
  dialog.appendChild(yes)
  let no = document.createElement("button")
  no.textContent = options.no.text || "Cancel"
  no.style.float = options.no.side || "right"
  no.addEventListener("click", function() {
   dialog.close()
  })
  dialog.appendChild(no)
  dialog.addEventListener("close", function() {
   dialog.remove()
   if(dialog.returnValue) {
    resolve()
   } else {
    reject()
  } })
  document.body.appendChild(dialog)
  dialog.showModal()
})) }
