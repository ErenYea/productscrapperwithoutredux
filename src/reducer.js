// import axios from 'axios';
// const req = async () => {
//   const response = await axios.get('http://localhost:3001/table')
//   console.log(response.data)
//   return response.data
// //   
// }
// const data =req()
export const initialState = {
    data:[],
    user:''
}

const reducer = (state,action)=>{
    switch (action.type){
        case 'LOGIN':
            return{...state,user:action.user}
        case 'LOGOUT':
            return{...state,user:''}
        case "ADD":
            return {...state,data:action.data}
        case 'REMOVE':
            var data = state.data.filter((row)=>{
                if (row.item_number!=action.item_number){
                    return row
                }
            })
            return {...state,data:data}
        default:
            return state
    }
}

export default reducer;