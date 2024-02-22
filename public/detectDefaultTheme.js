console.log("In here")

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
const bodyElement = document.querySelector("body")

if(bodyElement){
  const classes = bodyElement.classList
  console.log(darkThemeMq.matches)
  if (darkThemeMq.matches) {
    classes.add("dark")
  } else {
    classes.remove("dark")
  }
} else {
  console.log("Body not found!")
}

function changeTheme(theme) {
  const classes = document.querySelector("body")?.classList
  if (classes) {
    if (classes.contains("dark")) {
      classes.remove("dark")
    } else {
      classes.add("dark")
    }
  }
}