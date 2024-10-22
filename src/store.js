import { reactive } from 'vue' 
export const store = reactive({
    menuItems: [{
        name: 'Homepage',
        label: 'Homepage'
    },
    {
        name: 'myprojects',
        label: 'MyProjects'
    }
    ]
}); 