import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text" style={{color:"#8AAAE5"}}>{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>

            In a blood bank organization, an administrator or admin plays a crucial role in managing various aspects of the operation to ensure the smooth functioning of the facility.
             The specific responsibilities may vary depending on the size and structure of the organization.
             Hiring, training, and supervising staff members, including phlebotomists, laboratory technicians, 
             and administrative staff. Admins are also involved in conducting performance evaluations and addressing any personnel issues.
          Inventory Overseeing the inventory of blood and blood products. Admins work to ensure an adequate supply of blood products,
            manage expiration dates, and implement proper storage and handling procedures.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;