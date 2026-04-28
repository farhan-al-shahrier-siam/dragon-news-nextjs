import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-100 to-green-300 px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-green-700 mb-4">404</h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-6">
          The page youre looking for doesnt exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;