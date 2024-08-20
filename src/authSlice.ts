import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface Cart {
  id: number;
}

interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  cart: Cart | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  refreshToken: localStorage.getItem('refreshToken'),
  cart: null,
  status: 'idle',
};

export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async (_, { dispatch, getState }) => {
  const state = getState() as RootState;
  const token = state.auth.token;

  if (!token) {
    throw new Error('No token found');
  }

  const response = await fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }

  const user = await response.json();
  dispatch(fetchCartByUser());

  return user;
});

export const fetchCartByUser = createAsyncThunk('auth/fetchCartByUser', async (_, { getState }) => {
  const state = getState() as RootState;
  const token = state.auth.token;
  const userId = state.auth.user?.id;

  if (!token || !userId) {
    throw new Error('No token or user ID found');
  }

  const response = await fetch(`https://dummyjson.com/carts/user/${userId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }

  return response.json();
});

export const refreshAuthToken = createAsyncThunk('auth/refreshAuthToken', async (_, { getState }) => {
  const state = getState() as RootState;
  const refreshToken = state.auth.refreshToken;

  if (!refreshToken) {
    throw new Error('No refresh token found');
  }

  const response = await fetch('https://dummyjson.com/auth/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refreshToken,
      expiresInMins: 30,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }

  return response.json();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ token: string, refreshToken: string }>) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
    },
    clearAuth: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.user = null;
      state.cart = null;
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.status = 'failed';
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
      })
      .addCase(fetchCartByUser.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(refreshAuthToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
      });
  },
});

export const { setToken, clearAuth } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCart = (state: RootState) => state.auth.cart;
export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
