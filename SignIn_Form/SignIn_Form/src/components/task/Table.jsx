
function Table({tableData}) {
  return (
    <div>
      <table width="100%" cellPadding="10px">
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.username}</td>
              <td>{data.password}</td>
              <td>{data.email}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table
