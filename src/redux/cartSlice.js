import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    cartItems : localStorage.getItem("hub-cart-items") ? JSON.parse(localStorage.getItem("hub-cart-items")) : [],
    cartTotalQuantity : 0,
    cartTotalQAmount : 0,
};

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        addToCart : (state,action) =>{
           const itemIndex = state.cartItems.findIndex( e => e._id === action.payload._id);

            if(itemIndex >= 0){
                state.cartItems[itemIndex].quantity += 1; 
                const newQty = state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price;
                state.cartItems[itemIndex].totalPrice = newQty;
                toast.info("increased product quantity",{
                    position : "bottom-right",
                })
            }else{
                const newItem = {...action.payload , quantity : 1 , totalPrice : action.payload.price};
                state.cartItems.push(newItem);
                toast.success(`${action.payload.productName} added to cart`,{
                    position : "bottom-right",
                })
            }

            localStorage.setItem("hub-cart-items",JSON.stringify(state.cartItems));

        },
        increaseQuantity : (state,action)=>{
            const itemIndex = state.cartItems.findIndex( e => e._id === action.payload);

            if(itemIndex >= 0){
                state.cartItems[itemIndex].quantity += 1; 
                const newQty = state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price;
                state.cartItems[itemIndex].totalPrice = newQty;
            }

            localStorage.setItem("hub-cart-items",JSON.stringify(state.cartItems));

        },
        drecreaseQuantity : (state,action)=>{
            const itemIndex = state.cartItems.findIndex( e => e._id === action.payload);

            if(state.cartItems[itemIndex].quantity === 1){
                state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
            }else{
                state.cartItems[itemIndex].quantity -= 1;
                const newQty = state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price;
                state.cartItems[itemIndex].totalPrice = newQty;
            }
            localStorage.setItem("hub-cart-items",JSON.stringify(state.cartItems));
        },
        removeFromCart : (state,action)=>{
            state.cartItems = state.cartItems.filter(e => e._id !== action.payload);
            localStorage.setItem("hub-cart-items",JSON.stringify(state.cartItems));
            toast.error("Product removed from cart", {
                position : "bottom-right",
              });
        },
        resetCart : (state)=>{
            state.cartItems = [];
            localStorage.setItem("hub-cart-items",JSON.stringify(state.cartItems));
            toast.error('Cart cleared',{
                position : "bottom-right",
            })
        },
        getTotals : (state) =>{
            let {total,quantity} = state.cartItems.reduce((cartTotal,cartItem) => {
                let {price,quantity} = cartItem;

                const toPrice = price * quantity;
                cartTotal.total += toPrice;
                cartTotal.quantity += quantity;
                return cartTotal;
            }, 
            {
                total : 0,
                quantity : 0,

            });

            state.cartTotalQAmount = total;
            state.cartTotalQuantity = quantity;
        }
    }
})

export const {addToCart,increaseQuantity,drecreaseQuantity,removeFromCart,resetCart,getTotals} = cartSlice.actions;
export default cartSlice.reducer;