export default{
    path:'/movie',
    component:()=>import ("@/views/Movie"),
    children:[
        {path:'city',
        component:() =>import ("@/components/City")
        },
        {path:'playing',
        component:() =>import ("@/components/Playing")
        },
        {path:'coming',
        component:() =>import ("@/components/Coming")
        },
        {path:'search',
        component:() =>import ("@/components/Search")
        },
        {
            path:'detail/:movieid',
            components:{
                detail: ()=>import ("@/components/Detail")
            },
            props:{
                detail:true
            }
        },
        {path:"/movie",
        redirect:"/movie/city"
        }
    ]
}