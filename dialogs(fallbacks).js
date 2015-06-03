
function tell(message, options, callback) {
  if(typeof options === "function" && callback == undefined) {
    callback = options
    options = {}
  }
  var dialog = document.createElement("dialog")
  if(dialog.showModal) {
    dialog.textContent = message
    dialog.innerHTML = dialog.innerHTML.split("\n").join("<br>") + "<br><br>"
    var close = document.createElement("button")
    if(options && options.text) {
      close.textContent = options.closetext
    } else { close.textContent = "Close"}
    if(options && options.side) {
      close.style.float = options.side
    } else { close.style.float = "right"}
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
  if(typeof options === "function" && callback == undefined) {
    callback = options
    options = {}
  }
  var dialog = document.createElement("dialog")
  if(dialog.showModal) {
    dialog.textContent = message
    dialog.innerHTML = dialog.innerHTML.split("\n").join("<br>") + "<br><br>"
    var yes = document.createElement("button")
    if(options && options.yestext) {
      yes.textContent = options.yestext
    } else { yes.textContent = "Yes"}
    if(options && options.yesside) {
      yes.style.float = options.yesside
    } else { yes.style.float = "left"}
    dialog.appendChild(yes)
    var no = document.createElement("button")
    if(options && options.notext) {
      no.textContent = options.notext
    } else { no.textContent = "No"}
    if(options && options.noside) {
      no.style.float = options.noside
    } else { no.style.float = "right"}
    dialog.appendChild(no)
    if(callback) {
      yes.addEventListener("click", function() {
        dialog.close()
        callback(true)
      })
      no.addEventListener("click", function() {
        dialog.close()
        callback(false)
      })
      dialog.addEventListener("cancel", function() {
        callback(false)
      })
    } else {
      yes.addEventListener("click", function() {
        dialog.close()
      })
      no.addEventListener("click", function() {
        dialog.close()
      })
    }
    document.body.appendChild(dialog)
    dialog.showModal()
  } else if(callback) {
    callback(confirm(message))
  } else { confirm(message)}
}
