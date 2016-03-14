# Simple Dialogs
Easily create modal dialogs. Requires a dialog element polyfill.

Usage:
```
tell("It works.")
tell("It still works.", { closetext: "CLOSE", closeside: "left" }).then(function() {
 console.log("Dialog closed.")
})
ask("Does it work?").then(function(result) {
 if(result) {
  console.log("Dialog closed and works.")
 } else {
  console.log("Dialog closed and fails.")
} })
ask("Does it work now?", {
 yestext: "Proceed", yesside: "right", notext: "Exit", noside: "left", noerror: true }
}).then(function() {
 console.log("Dialog closed and works.")
}).catch(function() {
 console.log("Dialog closed and fails.")
})
```
