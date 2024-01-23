console.log('Vue ok', Vue);

const {createApp} = Vue;
const app = createApp({
    name: 'Vue Slider',
    data: () => ({
        toDoList,
    }),
    methods:{
        removeTask(id) {
            this.toDoList = this.toDoList.filter(list => id !== list.id);
        }
    }
})


app.mount('#root')