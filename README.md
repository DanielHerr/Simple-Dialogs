# Simple Dialogs
Easily create modal dialogs. Requires a dialog element polyfill.

Usage:
```javascript
tell("It works.")
tell("It still works.", { text: "Close", side: "left" }).then(function() {
 console.log("Dialog closed.")
})
ask("Does it work now?", {
 yes: { text: "Proceed", side: "right" }, no: { text: "Exit", side: "left" }
}).then(function() {
 console.log("Dialog closed and works.")
}).catch(function() {
 console.log("Dialog closed and fails.")
})
```
