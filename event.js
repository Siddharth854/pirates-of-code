const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener('click', e => {
    console.log("Grand parent 1");
},
{capture: true })

parent.addEventListener('click', e => {
    console.log("parent 1");
},
{capture: true })

child.addEventListener('click', e => {
    console.log("child 1 ");
},
{capture: true })

function print_Hi() {
    console.log("Hi div clicked");
}

function addGlobalEventListener(type,selector,callback) {
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e)
    })
}

const newDiv = document.createElement("div");
newDiv.style.width = "200px"
newDiv.style.height = "200px"
newDiv.style.backgroundColor = "purple"
newDiv.addEventListener("click",()=>{
    console.log("New Div clicked")
})
document.body.append(newDiv)

