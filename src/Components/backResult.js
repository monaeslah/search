import React, { Fragment } from "react";

export default ({ searchInput, lists }) => (
  <div className="back_result">
    {searchInput &&
      (lists || [])
        .filter((item) => {
          const str = searchInput.toLowerCase();
          return (
            (item?.artistName || "").toLowerCase().search(str) !== -1 ||
            (item?.trackName || "").toLowerCase().search(str) !== -1 ||
            (item?.collectionCensoredName || "").toLowerCase().search(str) !==
              -1
          );
        })
        .map((item, i) => (
          <Fragment>
            <div
              className="back_result_data  col-lg-12 col-md-12 col-sm-12"
              key={i}
            >
              <div className="col-lg-2 col-md-2 col-sm-2">
                {item?.artworkUrl60 ? (
                  <img
                    className="circle-img"
                    src={
                      item.artworkUrl60
                        ? item.artworkUrl60
                        : require("../Assets/image/unknown_person.jpg")
                    }
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="content col-lg-10 col-md-10 col-sm-10">
                <p className="artist">{item?.artistName}</p>
                {item?.primaryGenreName ? (
                  <p className="genre">Genre {item?.primaryGenreName} </p>
                ) : (
                  ""
                )}
                {item?.releaseDate ? (
                  <p className="release">ReleaseDate on {item?.releaseDate} </p>
                ) : (
                  ""
                )}
                <a href={item?.trackViewUrl}>View iTunes</a>
              </div>
            </div>
          </Fragment>
        ))}
  </div>
);
