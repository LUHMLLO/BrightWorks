<template>
    <div>


   <div class="global-horizontal-position"  v-for="(task, tasksData) in filteredTasks" :key="tasksData">


     <div class="global-detailed-task mdl-shadow--2dp">
       
       <div class="global-detailed-task-header">
          
          <div class="global-detailed-task-header-title">
            <h3>{{task.title}}</h3>
          </div>

          <div class="global-detailed-task-header-options">
            <i class='uil uil-pen'></i>
            <i class='uil uil-trash'></i>
          </div>

       </div><!---header--->

       <div class="global-detailed-task-content">
         <p>{{task.content}}</p>
       </div><!---task content--->

       <div class="global-detailed-task-footer">
         <div class="global-detailed-task-footer-priority">
           <i class='uil uil-exclamation-circle'></i>
           <span>{{task.priority}}</span>
         </div>
         
         <div class="global-detailed-task-footer-date">
           <i class='uil uil-clock'></i>
           <span>{{task.date}}</span>
         </div>
       </div><!----task foooterr---->


     </div><!---detailed task--->

</div><!---horizontal position--->


    </div>
</template>


<script>
export default {
    name: 'taskmodule',
    data(){
        return{

            

            tasks:[
                {'title':'finish this project', 'content':'deadline its tomorrow', 'priority': 'fucking high', 'date':'april 7 2019'},
                {'title':'finish this project', 'content':'deadline its tomorrow', 'priority': 'fucking high', 'date':'april 7 2019'},
                {'title':'finish this project', 'content':'deadline its tomorrow', 'priority': 'fucking high', 'date':'april 7 2019'},
            ],



        }
    },

  computed: {
    filteredTasks: function() {
        let result = this.tasks
          return result
    }

  },

  updated(){
         this.filteredTasks()
  }

}
</script>
