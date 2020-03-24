import {createStore} from 'redux'

// redux在createStore在初始化时，或默认发出异常action通知，调用一次reducer，给store默认值
                                // state：当前store中保存的状态  action：本次dispatch出来的对象
var store=createStore(function(state,action){
    switch(action.type){      //这一部分是reducer
        case 'gethouse' :{

            return [...new Set([action.v,...state])]
        }
         
        default:return []
    }
    // if(action.type==='changeName'){
    //     return "李四"
    // }
    // return 什么值，store就保存什么值
})

// 获取当前state的值 store.getState() 
//    console.log(store.getState());
   
// store.dispatch({type:用来区分每次做什么事情})
// 初始化系统发出dispatch通知，触发一次reducer  进入default，返回一个默认值

// store.dispatch({     //修改store状态，dispatch触发reducer去修改store的值
//     type:'changeName',
//     name:'李四'
// })
export default store 