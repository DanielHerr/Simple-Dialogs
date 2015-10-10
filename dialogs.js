function tell(message, options, callback) {
 if(typeof(options) == "function") {
  callback = options
  options = {}
 }
 options = options || {}
 var dialog = document.createElement("dialog")
 if(dialog.showModal) {
  dialog.textContent = message
  dialog.innerHTML = dialog.innerHTML.split("\n").join("<br>") + "<br><br>"
  var close = document.createElement("button")
  close.textContent = options.text || "Close"
  close.style.float = options.side || "right"
  close.addEventListener("click", function() {
   dialog.close()
  })
  dialog.appendChild(close)
  if(callback) {
   dialog.addEventListener("close", callback)
  }
  document.body.appendChild(dialog)
  dialog.showModal()
 } else if(callback) {
  callback(alert(message))
 } else { alert(message)}
}

function ask(message, options, callback) {
 if(typeof options === "function") {
  callback = options
  options = {}
 }
 options = options || {}
 var dialog = document.createElement("dialog")
 if(dialog.showModal) {
  dialog.textContent = message
  dialog.innerHTML = dialog.innerHTML.split("\n").join("<br>") + "<br><br>" 
  var yes = document.createElement("button")
  yes.textContent = options.yestext || "Yes"
  yes.style.float = options.yesside || "left"
  yes.addEventListener("click", function() {
   dialog.close(true)
  })
  dialog.appendChild(yes)
  var no = document.createElement("button")
  no.textContent = options.notext || "No"
  no.style.float = options.noside || "right"
  no.addEventListener("click", function() {
   dialog.close()
  })
  dialog.appendChild(no)
  if(callback) {
   dialog.addEventListener("close", function() {
    callback(dialog.returnValue || false)
   })
  }
  document.body.appendChild(dialog)
  dialog.showModal()
 } else if(callback) {
  callback(confirm(message))
 } else { confirm(message)}
}
