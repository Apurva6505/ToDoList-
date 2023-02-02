
var form = document.getElementById("addform");
var listItem = document.getElementById("list");

// click on submit and item should be added

form.addEventListener("submit",(e)=>{
    e.preventDefault();//form not submitted by itself...empty i/p
    //accessing i/p field
    var newItem = document.getElementById("item").value;
    // console.log(newItem);

    //To create new list item
    var li = document.createElement('li');
    li.className="list-group-item";//If class name matches then only it will be added
    li.innerHTML=newItem;//the i/p should be added to the list
    //Button should also be added to the newItem in the list

    var button = document.createElement('button');
    button.className="btn btn-danger float-right";
    button.innerHTML="X";

    //Appending remove button in item and adding that item in our list..

    li.appendChild(button);
    listItem.appendChild(li);
});

//Removing an item from the list
listItem.addEventListener('click',(e)=>{
//     console.log(e.target);
if(e.target.classList.contains('btn')){
    var li = e.target.parentElement;
    //console.log(li);
    listItem.removeChild(li);
}
 })