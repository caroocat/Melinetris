import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Publication from "../Publication/publication";
import Filter from "../Filter/Filter";
import { getItem, changeContent } from "../../store/actions/Content";
import {
  ContainerFather,
  ContainerCard,
  Card,
  ContainerPagination,
  DivFlex,
  ResultTitle,
  ContentCard,
  WelcomeTitle,
} from "./styles";

const Publications = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Content.Content);
  const Search = useSelector((state) => state.Content.Search);
  const CurrentFilter = useSelector((state) => state.Content.CurrentFilter);
  const url = useSelector((state) => state.Content.CurrentUrl);
  const Alert = useSelector((state) => state.Content.Alert);
  const [offSet, setOffSet] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const { paging, results } = state;

  useEffect(() => {}, [offSet, currentPage, Search, Alert, url]);

  const generatePagination = () => {
    let pagi = Array.from(
      Array(Math.ceil(paging.primary_results / paging.limit)).keys()
    );
    return pagi.map((num, key) => {
      return (
        <li
          key={key}
          onClick={() => {
            let newPage = num + 1;
            let newOffset = newPage !== 1 ? (newPage - 1) * 51 : 0;
            setCurrentPage(newPage);
            setOffSet(newOffset);
            dispatch(changeContent(url, CurrentFilter, newOffset));
          }}
          className="page-item"
        >
          <a
            className="page-link"
            style={{
              color: "white",
              backgroundColor: "#8e46ff",
              borderColor: "#ffffff",
            }}
          >
            {num + 1}
          </a>
        </li>
      );
    });
  };
  return (
    <ContainerFather>
      {!results ? (
        <WelcomeTitle>
          <h1>¡Bienvenido! comience su búsqueda</h1>
        </WelcomeTitle>
      ) : (
        <>
          {Alert && <Publication flag={Alert} />}

          <DivFlex>
            <Filter offSet={offSet} />

            <ContainerCard>
              {results &&
                results.map((result, key) => {
                  return (
                    <Card
                      key={`${key + result.id}`}
                      onClick={() => {
                        dispatch(getItem(result.id));
                        dispatch({ type: "SWITCH_ALERT", payload: true });
                      }}
                    >
                      <div>
                        <ResultTitle>{result.title}</ResultTitle>
                        <img src={result.thumbnail} />
                        <ContentCard> {`$ ${result.price}`}</ContentCard>
                        <ContentCard>
                          {`Quantity: ${result.available_quantity}`}
                        </ContentCard>
                        <ContentCard>{`Sold quantity: ${result.sold_quantity}`}</ContentCard>
                        <ContentCard>{result.listing_type_id}</ContentCard>
                        <ContentCard>{`Condition: ${result.condition}`}</ContentCard>
                      </div>
                    </Card>
                  );
                })}
            </ContainerCard>
          </DivFlex>

          <ContainerPagination>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  {currentPage !== 1 && (
                    <a
                      className="page-link"
                      aria-label="Previous"
                      style={{
                        color: "white",
                        backgroundColor: "#8E46FF",
                        borderColor: "#ffffff",
                      }}
                      onClick={() => {
                        let newOffset = offSet - 51;
                        let newPage = currentPage - 1;
                        setOffSet(newOffset);
                        setCurrentPage(newPage);
                        dispatch(changeContent(url, CurrentFilter, newOffset));
                      }}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  )}
                </li>
                {state && generatePagination()}
                {state &&
                  currentPage !==
                    Math.ceil(
                      state.paging.primary_results / state.paging.limit
                    ) && (
                    <li className="page-item">
                      <a
                        className="page-link"
                        aria-label="Next"
                        style={{
                          color: "white",
                          backgroundColor: "#8E46FF",
                          borderColor: "#ffffff",
                        }}
                        onClick={() => {
                          let newOffset = offSet + 51;
                          let newPage = currentPage + 1;
                          setOffSet(newOffset);
                          setCurrentPage(newPage);

                          dispatch(
                            changeContent(url, CurrentFilter, newOffset)
                          );
                        }}
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  )}
              </ul>
            </nav>
          </ContainerPagination>
        </>
      )}
    </ContainerFather>
  );
};

export default Publications;
