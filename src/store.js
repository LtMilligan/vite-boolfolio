import { reactive } from 'vue' 
export const store = reactive({
    menuItems: [{
        name: 'homepage',
        label: 'Homepage'
    },
    {
        name: 'myprojects',
        label: 'MyProjects'
    }
    ]
}); 