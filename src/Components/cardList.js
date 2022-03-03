import React, { Fragment } from "react";

export default ({ header, searchInput, keyword, lists, savedListAction }) => (
  <Fragment>
    <p>{`${header}`}</p>
    {searchInput &&
      lists
        .filter((item) => {
          return (
            item?.[keyword]?.toLowerCase()?.search(searchInput?.toLowerCase()) !==
            -1
          );
        })
        .map((item, i) => (
          <div
            key={i}
            className="suggest"
            onClick={() => savedListAction(item[keyword])}
          >
            {`${item[keyword]}`}
          </div>
        ))}
  </Fragment>
);
