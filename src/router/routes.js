const routes = [
    {
        name:'DetailPage',
        path:'/',
        component:()=>import('@/DetailPage')
    },
    {
        name:'InfoPage',
        path:'/info',
        component:()=>import('@/InfoPage')
    }
]

export default routes