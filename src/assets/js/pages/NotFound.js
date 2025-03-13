import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="tw-flex tw-items-center tw-justify-center tw-h-screen tw-text-center">
      <div>
        <h1 className="tw-text-[140px] tw-leading-[120%] tw-font-bold tw-text-red-500">404</h1>
        <p className="tw-text-lg tw-text-white tw-my-2">Oops! Page not found.</p>
        <Link to="/" className="tw-text-[#F36FBE] tw-mt-4 tw-inline-block tw-uppercase hover:tw-text-[#F36FBE] hover:tw-no-underline">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;