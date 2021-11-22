import React, { useState } from 'react';
import TableContent from "./tableContent";
import './userList.css'

function ListOfUsers() {
  const listOfItems = [
    { value: "tv" },
    { value: "crackers" },
    { value: "chips" },
    { value: "item " },
    { value: "carrot" },
    { value: "apple" },
    { value: "grapes" },
    { value: "cake" },

    { value: "ham" }
  ];
  const [lists, setLists] = useState(null);
  const [getUsersAge, setUsersAge] = useState(null);

  const getUsersList = () => {
    fetch('/users/age', {
      method: "GET"
    }).then(res => res.json())
      .then(res => setUsersAge(res));
    fetch('/users', {
      method: "GET"
    }).then(res => res.json())
      .then(res => setLists(res))
  }
  console.log("hello")
  React.useEffect(() =>getUsersList() , [])
  return (<div className="">

    {lists && lists.length &&
      <div className='userList'>
        <h3>ALL USERS</h3>
        <h5>Users and their age</h5>
        <table>
          <tbody>
            <tr>
              <th>User</th>
              <th>Age</th>
            </tr>
          </tbody>
          {lists.map((val, index) => {
            return (
              <tbody key={index}>
                <tr key={index}>
                  <td>{val.username}</td>
                  <td>{val.age}</td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    }
    <TableContent lists={lists} getUsersAge={getUsersAge} listOfItems={listOfItems} />
  </div>
  );
}

export default ListOfUsers;

