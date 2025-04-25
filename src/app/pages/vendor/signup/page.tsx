import VendorSignupForm from './VendorSignupForm';
//import '../globals.css';

export default function VendorSignupPage() {
  return (
    <div className="min-h-screen flex items-center bg-white justify-center ">
      <div className="w-full max-w-xl p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Vendor Signup</h2>
        <VendorSignupForm />
      </div>
    </div>
  );
}
