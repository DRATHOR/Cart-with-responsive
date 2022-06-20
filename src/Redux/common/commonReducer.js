
const initialState={
    component:'',
    headerFlag:false,
    message:'',
    paging:'',
    cartRef:'',
}
export const commonReducer=(State=initialState,action)=>{

 switch(action.type){
    case 'update': return {...State,
      headerFlag:action.payload.flag,
      component:action.payload.component,
      message:action.payload.message,
      paging:action.payload.paging,
      cartRef:action.payload.cartRef,
    }

  default: return initialState;
 }
}