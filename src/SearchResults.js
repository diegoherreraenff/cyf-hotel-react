import Moment from "moment";
import React, { useState } from "react";

const SearchResults = ({ results }) => {
  const [select, setselect] = useState(null);
  console.log(" selec is : " + select);

  //onClick={clickChangeColor} className= {select ? "table-success" : ""}

  return (
    <table class="table table-bordered table-ligth">
      <thead>
        <tr>
          {Object.keys(results[0]).map((element, index) => (
            <th scope="col" key={`th-${index}`}>
              {element}
            </th>
          ))}
          <th scope="col">night</th>
        </tr>
      </thead>

      <tbody>
        {results.map(element => {
          return (
            <tr
              key={element.id}
              className={`tr-${element.id}`}
              onClick={event => {
                console.log(typeof event.target.innerText);

                select ? setselect(null) : setselect(event.target.innerText);
                console.log(select);
              }}
              style={{ backgroundColor: element.id === select ? "red" : null }}
            >
              <th scope="row">{element.id}</th>
              <td>{element.title}</td>
              <td>{element.firstName}</td>
              <td>{element.surname}</td>
              <td>{element.email}</td>
              <td>{element.roomId}</td>
              <td>{element.checkInDate}</td>
              <td>{element.checkOutDate}</td>
              <td>
                {Moment(element.checkOutDate).diff(
                  Moment(element.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
