import request from '@/utils/request';
import { pick } from 'lodash';
import { Business, UserInfo } from '@/configs/interface';

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  fullName: string;
  email: string;
  password: string;
}

export interface ForgotPasswordDto {
  email: string;
}

export interface ResetPasswordDto {
  password: string;
  resetPasswordToken: string;
}

export interface LoginGoogleDto {
  accessToken: string;
}

const authApi = {
  login: async (payload: LoginDto): Promise<{ token: string }> => {
    return request.post(`/auth/login`, payload);
  },
  loginGoogle: async (payload: LoginGoogleDto) => {
    return request.post(`/auth/loginGoogle`, {
      access_token: payload.accessToken,
    });
  },
  register: async (payload: RegisterDto) => {
    return request.post(
      `/auth/register`,
      pick(payload, 'password', 'email', 'fullName'),
    );
  },
  forgotPassword: async (payload: ForgotPasswordDto) => {
    return request.post(`/auth/forgotPassword`, payload);
  },
  resetPassword: async ({ password, resetPasswordToken }: ResetPasswordDto) => {
    return request.post(`/auth/resetPassword`, {
      password: password,
      resetPasswordToken: resetPasswordToken,
    });
  },
  getMe: async (): Promise<UserInfo> => {
    return request.get('/users/me');
  },
  getBusinessMe: async (): Promise<Business> => {
    return request.get('/businesses/me');
  },
};

export default authApi;
