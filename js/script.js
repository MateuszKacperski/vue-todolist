console.log('Vue ok', Vue);

const {createApp} = Vue;
const app = createApp({
    name: 'Vue Slider',
    data: () => ({
        toDoList,
    }),
    
})


app.mount('#root')