import React from "react";
import Header from "../Header/Header";

const Section = ({ users }) => {
  return (
    <div className="section">
      <tbody style={{ width: "500px" }}>
        <tr style={{ textAlign: "center" }} className="table-header">
          <td>
            <strong> First Name </strong>
          </td>
          <td>
            <strong> Last Name </strong>
          </td>
          <td>
            <strong> Age </strong>
          </td>
          <td>
            <strong> ID </strong>
          </td>
        </tr>
        {users.map(item => (
          <tr key={item.id} style={{ textAlign: "center" }}>
            <td>{item.name}</td>
            <td>{item.lastN}</td>
            <td>{item.age}</td>
            <td>{item.id}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default Section;
