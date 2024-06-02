import { getAllCompanies } from "@/app/actions/company";

const Company = async () => {
  const companies = await getAllCompanies();
  console.log("COMPANIES FROM PAGE:", companies);

  return (
    <div className="p-5 m-5 ">
      <h1 className="text-white">Company!</h1>

      <div>
        <h2 className="text-white">Companies:</h2>
        <ul>
          {companies?.map((company) => (
            <li key={company.id}>
              <h3 className="text-white">{company.name}</h3>
              <p className="text-white">{company.www}</p>
              <p className="text-white">{company.email}</p>
            </li>
          ))}
        </ul>
      </div>
      <button>Add game</button>
    </div>
  );
};

export default Company;
