import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  quantity: number;
  thumbnail: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  warrantyInformation: string;
  shippingInformation: string;
  images: string[];
}

interface CartState {
  items: Product[];
  totalQuantity: number;
  total: number;
  discountedTotal: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  total: 0,
  discountedTotal: 0,
  status: 'idle',
  error: null,
};

export const fetchCartItems = createAsyncThunk<Product[], void, { rejectValue: string }>(
  'cart/fetchCartItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://dummyjson.com/carts/user/5');
      const data = await response.json();
      console.log(data); 
      const firstCart = data.carts[0];
      if (!firstCart || firstCart.products.length === 0) {
        return [];
      }
      return firstCart.products;
    } catch (err) {
      return rejectWithValue('Failed to fetch cart items');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.totalQuantity = action.payload.reduce((total, item) => total + item.quantity, 0);
        state.total = action.payload.reduce((total, item) => total + item.price * item.quantity, 0);
        state.discountedTotal = action.payload.reduce((total, item) => total + (item.price * item.quantity * (100 - item.discountPercentage)) / 100, 0);
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default cartSlice.reducer;
