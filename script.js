///addition of tasks
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').
    value.length  == 0){
        alert("task box is empty");
        console.log("success")
    }
    else{
        document.getElementById("tasks").style.display = "block"
        document.querySelector('#tasks').innerHTML +=`
              <div class="task">
                  <span id="taskname">
                         ${document.querySelector('#newtask input').value}
                  </span>
                  <button class = "delete">
                      <i class="far fa-trash-alt"></i>
                  </button>
              </div>
              `;

              //remove the task which is added
              var current_task = document.querySelectorAll(".delete");
              for(var i=0; i<current_task.length; i++){
                  current_task[i].onclick = function(){
                      this.parentNode.remove()
                  }

              }
              //mark task which is completed
              var tasks = document.querySelectorAll(".task");
              for(var i=0; i<tasks.length; i++){
                  tasks[i].onclick = function(){
                      this.classList.toggle('complete')
                  }
              }
            }
            document.querySelector("#newtask input").value = ""
}