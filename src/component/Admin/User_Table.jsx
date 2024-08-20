import React from "react";
// import { Link } from "react-router-dom";

const UserTable = () => {
  return (
    <div className="card border-0">
      <div className="card-header">
        <h5 className="card-title">List User</h5>
        <h6 className="card-subtitle text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          ducimus, necessitatibus reprehenderit itaque!
        </h6>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserTable;
