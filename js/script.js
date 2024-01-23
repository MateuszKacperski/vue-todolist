console.log('Vue ok', Vue);

const {createApp} = Vue;
const app = createApp({
    name: 'Vue Slider',
    data: () => ({
        toDoList,
        taskContent: ''
    }),
    methods:{
        removeTask(id) {
            this.toDoList = this.toDoList.filter(list => id !== list.id);
        },
        addTask() {
            const newTask = {
                id: new Date().toISOString(),
                done: false,
                text: this.taskContent
            }
            this.toDoList.push(newTask);
        }
    }
})


app.mount('#root')