import { Table } from "antd";
import React from "react";
import { useQuery } from "react-query";
import company from "services/requests/company";

const Home = () => {
  // const { values, merge } = useQueryParams();
  // const [companyStatus, setCompanyStatus] = useState("");
  // const [name, setName] = useState((values && values.name) || "");
  // const [page, setPage] = useState((values && values.page) || 1);
  const { data, isLoading } = useQuery(["companyList"], () => company.list());
  console.log(data);
  return (
    <div>
      <Table />
    </div>
  );
};

export default Home;
