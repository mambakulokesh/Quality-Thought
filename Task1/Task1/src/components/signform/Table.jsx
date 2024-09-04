
function Table({ userList, setUserList }) {


  function deleteRow(index) {
    userList.splice(index, 1);
    setUserList([...userList]);
  }

  
  return (
    <div>
      <table width="100%" cellPadding="10px">
        <thead>
          <tr>
            <th>NAME</th>
            <th>PASSWORD</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(function (element, index) {
            return (
              <tr key={index}>
                <td>{element.username}</td>
                <td>{element.password}</td>
                <td>{element.Email}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteRow(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table
