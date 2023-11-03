document.getElementById('Input btn').onclick = function(){
    if(document.getElementById('task').value.length == 0){
        alert("Please Enter Task!!!!")
    }

    else{
        document.getElementById('tasks').innerHTML += `
            ${document.querySelector('#newtask input').value}
            <button class="delete">Delete</button>
        `;
        var arr = document.querySelectorAll(".delete");
        for(var i=0; i<arr.length; i++){
            arr[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}