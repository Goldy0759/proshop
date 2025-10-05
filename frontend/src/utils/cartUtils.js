export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
    //Calculate Items Price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
      //Calculate Shipping Price
      //If order is over 500 then free shipping else 40 shipping
      state.shippingPrice = addDecimals(state.itemsPrice > 500 ? 0 : 40);
      //Calculate Tax Price(18% tax)
      state.taxPrice = addDecimals(0.18 * state.itemsPrice);
      //Calculate Total Price
      state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      );
      localStorage.setItem("cart", JSON.stringify(state));
      
      return state;
}
