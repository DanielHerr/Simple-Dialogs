function tell(message, callback) {
  if(callback == undefined) {
    callback = function(response) {}
  }
  var dialog = document.createElement("dialog")
  if(dialog.showModal) {  
    dialog.innerHTML = message + "<br><br>"
    var close = document.createElement("button")
    close.style.float = "left"
    close.textContent = "Close"
    close.addEventListener("click", function() {
      dialog.close()
    })
    dialog.appendChild(close)
    dialog.addEventListener("close", callback)
    document.body.appendChild(dialog)
    dialog.showModal()
  } else {
    callback(alert(message))
  }
}

function ask(message, callback) {
  if(callback == undefined) {
    callback = function(response) {}
  }
  var dialog = document.createElement("dialog")
  if(dialog.showModal) {
    dialog.innerHTML = message + "<br><br>"
    var yes = document.createElement("button")
    yes.style.float = "left"
    yes.textContent = "Yes"
    yes.addEventListener("click", function() {
      dialog.close()
      callback(true)
    })
    dialog.appendChild(yes)
    var no = document.createElement("button")
    no.style.float = "right"
    no.textContent = "No"
    no.addEventListener("click", function() {
      dialog.close()
      callback(false)
    })
    dialog.appendChild(no)
    dialog.addEventListener("cancel", function() {
      callback(false)
    })
    document.body.appendChild(dialog)
    dialog.showModal()
  } else {
    callback(confirm(message))
  }
}
