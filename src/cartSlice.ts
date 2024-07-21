import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

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
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
      state.discountedTotal += (action.payload.price * action.payload.quantity * (100 - action.payload.discountPercentage)) / 100;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const item = state.items[index];
        state.totalQuantity -= item.quantity;
        state.total -= item.price * item.quantity;
        state.discountedTotal -= (item.price * item.quantity * (100 - item.discountPercentage)) / 100;
        state.items.splice(index, 1);
      }
    },
    updateCart: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        const existingItem = state.items[index];
        state.totalQuantity = state.totalQuantity - existingItem.quantity + action.payload.quantity;
        state.total = state.total - (existingItem.price * existingItem.quantity) + (action.payload.price * action.payload.quantity);
        state.discountedTotal = state.discountedTotal - (existingItem.price * existingItem.quantity * (100 - existingItem.discountPercentage) / 100)
          + (action.payload.price * action.payload.quantity * (100 - action.payload.discountPercentage) / 100);
        state.items[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.totalQuantity = action.payload.reduce((acc, item) => acc + item.quantity, 0);
        state.total = action.payload.reduce((acc, item) => acc + item.price * item.quantity, 0);
        state.discountedTotal = action.payload.reduce((acc, item) => acc + (item.price * item.quantity * (100 - item.discountPercentage)) / 100, 0);
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;