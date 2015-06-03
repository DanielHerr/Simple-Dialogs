function tell(message, options, callback) {
  if(typeof options === "function" && callback == undefined) {
    callback = options
    options = {}
  }
  else if(options == undefined) {
    options = {}
  }
  var dialog = document.createElement("dialog")
  dialog.innerHTML = message
  if(options.show !== false) {
    dialog.innerHTML = message + "<br><br>"
    var close = document.createElement("button")
    close.textContent = options.text || "Close"
    close.style.float = options.side || "right"
    close.addEventListener("click", function() {
      dialog.close()
    })
    dialog.appendChild(close)
  }
  if(callback) {
    dialog.addEventListener("close", callback)
  }
  document.body.appendChild(dialog)
  dialog.showModal()
}

function ask(message, options, callback) {
  if(typeof options == "function") {
    callback = options
    options = {}
  }
  else if(options == undefined) {
    options = {}
  }
  var dialog = document.createElement("dialog")
  dialog.innerHTML = message
  if(options.yesshow !== false || options.noshow !== false) {
    dialog.innerHTML = message + "<br><br>"
  }
  if(options.yesshow !== false) {
    var yes = document.createElement("button")
    yes.textContent = options.yestext || "Yes"
    yes.style.float = options.yesside || "left"
    yes.addEventListener("click", function() {
      dialog.close(true)
    })
    dialog.appendChild(yes)
  }
  if(options.noshow !== false) {
    var no = document.createElement("button")
    no.textContent = options.notext || "No"
    no.style.float = options.noside || "right"
    no.addEventListener("click", function() {
      dialog.close()
    })
    dialog.appendChild(no)
  }
  if(callback) {
    dialog.addEventListener("close", function() {
      callback(dialog.returnValue)
    })
  }
  document.body.appendChild(dialog)
  dialog.showModal()
}
