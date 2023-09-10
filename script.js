let btn = document.querySelector(".btn");
let input = document.querySelector(".inp");
let list = document.querySelector(".list");


btn.addEventListener("click", () => {

    if (input.value == "") {
        alert("Please enter a value");
    }else{
        let span = document.createElement("span");
        let li = document.createElement("li");
        li.textContent = input.value;
        span.innerHTML ="\u00d7";
        list.prepend(li);
        
       li.classList.add("listitem");
       li.append(span);
        input.value = "";
        data();
    }
   


});


list.addEventListener("click", (e) => {
   
   
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("listitem");
    // e.target.remove();
        data();
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        data();
    }
   
});

function data(){
    localStorage.setItem("datalist",list.innerHTML);
   

}

function show(){
    list.innerHTML = localStorage.getItem("datalist");
}

show();
