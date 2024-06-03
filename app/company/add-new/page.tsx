import { addCompany } from "@/app/actions/company";

export default function AddNewCompany() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <form
        action={addCompany}
        className="flex flex-col gap-4 bg-gray-200 p-6 sm:p-10 rounded-2xl w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl text-black">
          Register your company
        </h1>
        <label className="flex flex-col">
          Company name
          <input
            name="company_name"
            type="text"
            className="rounded-lg p-2 mt-1"
          />
        </label>
        <label className="flex flex-col">
          Website
          <input name="website" type="text" className="rounded-lg p-2 mt-1" />
        </label>
        <label className="flex flex-col">
          Email
          <input name="email" type="text" className="rounded-lg p-2 mt-1" />
        </label>
        <label className="flex flex-col">
          Password
          <input
            name="password"
            type="password"
            id="myInput"
            className="rounded-lg p-2 mt-1"
          />
        </label>
        <button className="bg-green-500 text-white rounded-lg p-2 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}
