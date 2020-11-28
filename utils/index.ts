import moment from 'moment';

const STORAGE_KEY = 'session-token';

export function getToken(): string {
  return localStorage.getItem(STORAGE_KEY);
}

export function setToken(token: string): void {
  localStorage.setItem(STORAGE_KEY, token);
}

export function deleteToken(): void {
  localStorage.removeItem(STORAGE_KEY);
}

const STEP_GUTTER = 4;

export const gutters = {
  custom: (size: number) => STEP_GUTTER * size,
  xxxs: STEP_GUTTER,
  xxs: STEP_GUTTER * 2,
  xs: STEP_GUTTER * 3,
  sm: STEP_GUTTER * 4,
  md: STEP_GUTTER * 5,
  lg: STEP_GUTTER * 6,
  xl: STEP_GUTTER * 7,
  xxl: STEP_GUTTER * 8,
  xxxl: STEP_GUTTER * 9,
};

export const formatDate = (date: string, formatType: string = 'DD/MM/yyyy') =>
  moment(date).format(formatType);
