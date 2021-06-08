export const initialstate = {
    basket:[],
    user:null,
}

export function reducer(state,action) {
    console.log(action);
    switch(action.type) {

        case "SET_USER":
            return {...state,user:action.user};

        case "ADD_TO_BASKET" :
            return {...state,basket:[...state.basket ,action.item]};

        case "REMOVE_FROM_BASKET":
            let newbasket = [...state.basket]

            const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id)
            if(index >=0){
                newbasket.splice(index,1);
            }

            return {...state , basket:newbasket};

        default:
            return state;
    }
}


export const subtotal = (basket) => basket?.reduce((amount,item)=>item.price+amount ,0);