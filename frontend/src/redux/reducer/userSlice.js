import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";

const initialState = {
  loading: false,
  user: null,
  error: null,
  jwt: localStorage.getItem("jwt") || null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/signup`,
        userData
      );
      const user = response.data;
      console.log(user,"  ", user.jwt);
      if (user.jwt) {
        localStorage.setItem("jwt", user.jwt);
        return user.jwt; // Return only the JWT token
      } else {
        throw new Error("JWT token not found in response");
      }
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/signin`,
        userData
      );
      const user = response.data;

      if (user.jwt) {
        localStorage.setItem("jwt", user.jwt);
        return user.jwt; // Return only the JWT token
      } else {
        throw new Error("JWT token not found in response");
      }
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { getState }) => {
    try {
      const token = getState().user.jwt;
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  try {
    localStorage.removeItem("jwt");
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload; // Update JWT token
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Access denied! Invalid Credential";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload; // Update JWT token
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.jwt = null; // Reset JWT token
        state.user = null;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
