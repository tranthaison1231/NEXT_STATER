/* eslint-disable no-useless-escape */
export const validateRegex = {
  phone: /((\+84[0-9]{9})|(\b0[0-9]{9}))(?![0-9])/g,
  password: /^(?=.*[a-z])(?=.*[0-9])(?=.*\d).{6,}$/g,
  number: /^[-]?[0-9]*$/g,
  numberUnsigned: /^[0-9]*$/g,
  floatNumber: /^[-]?\d*\.?\d*$/,
  floatNumberUnsigned: /^\d*\.?\d*$/, // negative sign (-) is allowed
  editBookingId: '#bookings/(.*)/edit',
  fullName: /^[a-z0-9 ]{3,100}$/iu,
  hour: /^(2[0-3]|1[0-9]|[0-9])$/,
  minute: /^[1-5]?[0-9]$/,
  week: /^(5[0-3]|[1-4][0-9]|[1-9])$/,
  percentage: /^(100|[1-9]?[0-9])$/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  month: /^(1[0-2]|[1-9])$/,
  day: /^(3[01]|[12][0-9]|[1-9])$/,
};
