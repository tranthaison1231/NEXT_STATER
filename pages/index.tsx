import { useSelector } from 'react-redux';
import {
  ForgotPasswordForm,
  LoginForm,
  RegisterForm,
  ResetPasswordForm,
  ForgotPasswordSuccess,
} from '@/components/Modal';
import { PublicLayout } from '@/components/Layout';
import { useGetLocations, useToggle } from '@/hooks';
import { useAppDispatch } from '@/redux/store';
import {
  login,
  forgotPassword,
  resetPassword,
  register,
  loginGoogle,
} from '@/redux/auth';
import { RootState } from '@/redux/reducers';
import { useRouter } from 'next/router';
import { ACTION } from '@/configs/constants';
import { useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { CoworkingSpaces } from '@/components/List';
import { CoworkingSearch } from '@/components/UIKit';
import { notification } from 'antd';

const Index = () => {
  const { query, push } = useRouter();
  const {
    isLogining,
    isRegistering,
    isForgotPasswording,
    isResetPasswording,
  } = useSelector((state: RootState) => state.auth);
  const { locations, loading } = useGetLocations();

  const [loginVisible, openLogin, closeLogin] = useToggle(false);
  const [registerVisible, openRegister, closeRegister] = useToggle(false);
  const [
    forgotPasswordSuccessVisible,
    openResetPasswordSuccess,
    closeForgotPasswordSuccess,
  ] = useToggle(false);
  const [
    resetPasswordVisible,
    openResetPassword,
    closeResetPassword,
  ] = useToggle(false);
  const [
    forgotPasswordVisible,
    openForgotPassword,
    closeForgotPassword,
  ] = useToggle(false);
  const [email, setEmail] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleLogin = async (values) => {
    await dispatch(login(values)).then(unwrapResult);
    closeLogin();
    push('/home');
  };

  const handleForgotPassword = async (values) => {
    await dispatch(forgotPassword(values)).then(unwrapResult);
    setEmail(values.email);
    closeForgotPassword();
    openResetPasswordSuccess();
  };

  const handleRegister = async (values) => {
    await dispatch(register(values)).then(unwrapResult);
    registerToLogin();
    notification.success({
      message: 'Login Success',
    });
  };

  const handleResetPassword = async (values) => {
    await dispatch(
      resetPassword({
        password: values.password,
        resetPasswordToken: query.token as string,
      }),
    ).then(unwrapResult);
    notification.success({
      message: 'Reset Password Success',
    });
  };

  const loginToRegister = () => {
    closeLogin();
    openRegister();
  };

  const loginToForgotPassword = () => {
    closeLogin();
    openForgotPassword();
  };

  const registerToLogin = () => {
    closeRegister();
    openLogin();
  };

  const forgotPasswordToLogin = () => {
    closeForgotPassword();
    openLogin();
  };

  const forgotPasswordSuccessToLogin = () => {
    closeForgotPasswordSuccess();
    openLogin();
  };

  const onSearch = (value) => {
    push(`/?page=1&q=${value}`);
  };

  const onLoginGoogleSuccess = (payload) => {
    dispatch(
      loginGoogle({
        accessToken: payload.tokenId,
      }),
    );
  };

  useEffect(() => {
    if (query.action === ACTION.RESET_PASSWORD) {
      openResetPassword();
    }
  }, []);

  return (
    <>
      <PublicLayout
        onLogin={openLogin}
        onRegister={openRegister}
        searchVisible={!!query.q}
        onSearch={onSearch}
      >
        <>
          {query.q ? (
            <CoworkingSpaces
              items={locations.results}
              total={locations.total}
              loading={loading}
            />
          ) : (
            <CoworkingSearch onSearch={onSearch} />
          )}
        </>
      </PublicLayout>
      <LoginForm
        visible={loginVisible}
        closeModal={closeLogin}
        handleLogin={handleLogin}
        forgotPasswordNavigate={loginToForgotPassword}
        registerNavigate={loginToRegister}
        onLoginGoogleSuccess={onLoginGoogleSuccess}
        isLoading={isLogining}
      />
      <ForgotPasswordForm
        visible={forgotPasswordVisible}
        closeModal={closeForgotPassword}
        handleForgotPassword={handleForgotPassword}
        isLoading={isForgotPasswording}
        loginNavigate={forgotPasswordToLogin}
      />
      <RegisterForm
        loginNavigate={registerToLogin}
        visible={registerVisible}
        closeModal={closeRegister}
        isLoading={isRegistering}
        handleRegister={handleRegister}
      />
      <ResetPasswordForm
        visible={resetPasswordVisible}
        closeModal={closeResetPassword}
        handleResetPassword={handleResetPassword}
        isLoading={isResetPasswording}
      />
      <ForgotPasswordSuccess
        visible={forgotPasswordSuccessVisible}
        closeModal={closeForgotPasswordSuccess}
        loginNavigate={forgotPasswordSuccessToLogin}
        email={email}
      />
    </>
  );
};

export default Index;
