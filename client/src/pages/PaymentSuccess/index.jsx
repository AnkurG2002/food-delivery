import { Alert } from "../../components/elements/Alert";
const PaymentSuccess = () => {
  return (
    <div className="h-[50vh] max-w-lg mx-auto p-4">
      <Alert variant="success">Your payment was successful</Alert>
    </div>
  );
};

export default PaymentSuccess;
