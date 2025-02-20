export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'The Makers Market'
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'Artisan shopp and creative classes'

  export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(', ')
  : ['PhonePay', 'Stripe', 'CashOnDelivery']

  export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || 'PhonePay'

  export const signInDefaultValues = {
    email: '',
    password: '',
  }

  export const signUpDefaultValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  export const shippingAddressDefaultValues = {
    fullName: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    country: '',
  }