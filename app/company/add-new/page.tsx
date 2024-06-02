import { addCompany } from "@/app/actions/company";

export default function AddNewCompany() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <form
        action={addCompany}
        className="flex flex-col gap-4 bg-gray-200 p-10 rounded-2xl w-1/2"
      >
        <h1 className="text-4xl text-black">Register your company</h1>
        <label>
          Company name
          <input name="company_name" type="text" className="rounded-lg p-2" />
        </label>
        <label>
          Website
          <input name="website" type="text" className="rounded-lg p-2" />
        </label>
        <label>
          Email
          <input name="email" type="text" className="rounded-lg p-2" />
        </label>
        <label>
          Password:
          <input name="password" type="password" id="myInput" />
        </label>
        <button className="bg-green-500 rounded-lg p-2">Submit</button>
      </form>
    </div>
  );
}
