import React from "react";
import RenderBody from "../RenderBody";

function RenderTable({ headings, users }) {
  return (
    <div className="render-table mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th className="col" key={name} style={{ width }} >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <RenderBody users={users} />
      </table>
    </div>
  );
}

export default RenderTable;
