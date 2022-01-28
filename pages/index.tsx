import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <form className="flex flex-col space-y-2 p-5">
        <input
          type="text"
          required
          placeholder="Username"
          className="peer rounded-md border border-gray-400 p-1"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Awesome username
        </span>
        <span className="hidden peer-hover:block peer-hover:text-amber-500">
          Hello
        </span>
        <input type="submit" value="Login" className="bg-white" />
      </form>
      <div className="flex flex-col space-y-2 p-5">
        <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
          Hello everyone!
        </p>
      </div>
    </div>
  );
};

export default Home;
