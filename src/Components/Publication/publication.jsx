import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button } from "@material-ui/core";
import { FontAlert } from "./styles";

const Publication = (flag) => {
  const state = useSelector((state) => state.Content.Item);
  const dispatch = useDispatch();

  return (
    <div>
      {flag && (
        <SweetAlert
          tittle={"pop"}
          showConfirm={false}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "26rem",
            height: "22rem",
          }}
        >
          <FontAlert>{`State: ${state.status}`}</FontAlert>
          <FontAlert>{`Site: ${state.site_id}`}</FontAlert>
          <FontAlert>{`Initial Quantity: ${state.initial_quantity}`}</FontAlert>
          <FontAlert>{`Base Price: ${state.base_price}`}</FontAlert>
          <FontAlert>{`Warranty: ${state.warranty}`}</FontAlert>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch({ type: "SWITCH_ALERT", payload: false })}
            style={{
              backgroundColor: "#8E46FF",
            }}
          >
            Regresar
          </Button>
        </SweetAlert>
      )}
    </div>
  );
};

export default Publication;
