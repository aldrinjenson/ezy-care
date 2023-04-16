import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="bg-blue-100 h-screen">
      <nav className="bg-blue-500 p-4">
        <ul className="flex justify-end">
          <li className="mx-4">
              <Link href="/login" className="text-white font-bold">Log In</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-center h-4/5">
        <div className="max-w-md p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold mb-4">EzyCare</h1>
          <p className="text-gray-700 mb-8">
            The easy and simple way to manage your clinic and patients.
          </p>
          <Link href="/login" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
              Enter Dashboard
          </Link>
        </div>
        <div className="hidden md:block">
          <img
            src="/LandingBg.jpg"
            alt="Product Image"
            className="w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
