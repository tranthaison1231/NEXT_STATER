import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi, {
  LoginDto,
  LoginGoogleDto,
  RegisterDto,
  ResetPasswordDto,
} from '@/api/auth';
import { notification } from 'antd';
import { setToken } from '@/utils';
import { Business, UserInfo } from '@/configs/interface';

export const login = createAsyncThunk(
  'Auth/login',
  async (payload: LoginDto, { rejectWithValue }) => {
    try {
      const response = await authApi.login(payload);
      return response;
    } catch (error) {
      notification.error({
        message: error,
      });
      return rejectWithValue(error);
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'Auth/forgotPassword',
  async (payload: LoginDto, { rejectWithValue }) => {
    try {
      const response = await authApi.forgotPassword(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const register = createAsyncThunk(
  'Auth/register',
  async (payload: RegisterDto, { rejectWithValue }) => {
    try {
      const response = await authApi.register(payload);
      return response;
    } catch (error) {
      notification.error({
        message: error,
      });
      return rejectWithValue(error);
    }
  },
);

export const resetPassword = createAsyncThunk(
  'Auth/resetPassword',
  async (payload: ResetPasswordDto, { rejectWithValue }) => {
    try {
      const response = await authApi.resetPassword(payload);
      return response;
    } catch (error) {
      notification.error({
        message: error,
      });
      return rejectWithValue(error);
    }
  },
);

export const getMe = createAsyncThunk(
  'Auth/getMe',
  async (_payload, { rejectWithValue }) => {
    try {
      const response = await authApi.getMe();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getBusinessMe = createAsyncThunk(
  'Auth/getBusinessMe',
  async (_payload, { rejectWithValue }) => {
    try {
      const response = await authApi.getBusinessMe();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const loginGoogle = createAsyncThunk(
  'Auth/loginGoogle',
  async (payload: LoginGoogleDto, { rejectWithValue }) => {
    try {
      const response = await authApi.loginGoogle(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

interface InitialState {
  isLogining: boolean;
  isForgotPasswording: boolean;
  isRegistering: boolean;
  isResetPasswording: boolean;
  isGettingMe: boolean;
  data: UserInfo;
  business: Business;
}

export const { actions, reducer } = createSlice({
  initialState: {
    isLogining: false,
    isForgotPasswording: false,
    isRegistering: false,
    isResetPasswording: false,
    isGettingMe: false,
    data: {},
    business: {},
  } as InitialState,
  name: 'Auth',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLogining = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLogining = false;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      setToken(payload.token);
      state.isLogining = false;
    });
    builder.addCase(forgotPassword.pending, (state) => {
      state.isForgotPasswording = true;
    });
    builder.addCase(forgotPassword.fulfilled, (state) => {
      state.isForgotPasswording = false;
    });
    builder.addCase(forgotPassword.rejected, (state) => {
      state.isForgotPasswording = false;
    });
    builder.addCase(register.pending, (state) => {
      state.isRegistering = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.isRegistering = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.isRegistering = false;
    });
    builder.addCase(resetPassword.pending, (state) => {
      state.isResetPasswording = true;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.isResetPasswording = false;
    });
    builder.addCase(resetPassword.rejected, (state) => {
      state.isResetPasswording = false;
    });
    builder.addCase(getMe.pending, (state) => {
      state.isGettingMe = true;
    });
    builder.addCase(getMe.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isGettingMe = false;
    });
    builder.addCase(getMe.rejected, (state) => {
      state.isGettingMe = false;
    });
    builder.addCase(getBusinessMe.fulfilled, (state, { payload }) => {
      state.business = payload;
    });
  },
});

export default reducer;
