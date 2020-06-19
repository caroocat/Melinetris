import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../store/actions/Content";
import { ContainerFilter, FilterName } from "./styles";

const Filter = ({ offSet }) => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.Content.CurrentUrl);
  const state = useSelector((state) => state.Content.Content);

  const { available_filters, available_sorts } = state;
  return (
    <ContainerFilter>
      {available_filters &&
        available_filters.map((filter, key) => {
          return filter.id === "price" || filter.name === "Condición" ? (
            <div key={`${key + filter.id}`}>
              <FilterName>{filter.name}</FilterName>

              {filter.values.map((value, key) => {
                return (
                  <div key={`${key + value.id}`}>
                    <button
                      type="button"
                      className="btn btn-outline-"
                      style={{
                        color: "white",
                        borderColor: "white",
                        backgroundColor: "#6473ff",
                        margin: "0.5vh",
                        minHeight: "fit-content",
                        width: "fit-content",
                        fontWeight: "540",
                      }}
                      onClick={() => {
                        dispatch(getFilter(url, offSet, filter.id, value.id));
                      }}
                    >
                      {value.name}
                    </button>
                  </div>
                );
              })}
            </div>
          ) : null;
        })}
      {available_sorts &&
        available_sorts.map((sort, key) => {
          return (
            <div
              key={`${key + sort.id}`}
              onClick={() => {
                dispatch(getFilter(url, sort.id));
              }}
            >
              <button
                type="button"
                className="btn btn-outline"
                style={{
                  color: "white",
                  borderColor: "white",
                  backgroundColor: "#6473ff",
                  margin: "0.5vh",
                  fontWeight: "540",
                }}
              >
                {sort.name}
              </button>
            </div>
          );
        })}
    </ContainerFilter>
  );
};

export default Filter;
