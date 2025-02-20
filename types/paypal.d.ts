/**
  declare module '@paypal/react-paypal-js' {
      export interface PayPalButtonsComponentProps {
        createOrder: () => Promise<string>
        onApprove: (data: { orderID: string }) => Promise<void>
      }
    
      export const PayPalButtons: React.FC<PayPalButtonsComponentProps>
      export const PayPalScriptProvider: React.FC<{
        options: {
          clientId: string
        }
        children: React.ReactNode
      }>
      export function usePayPalScriptReducer(): [
        {
          isPending: boolean
          isRejected: boolean
        }
      ]
    }
*/