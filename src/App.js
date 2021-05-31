import React from "react";
import { connect } from "react-redux";
import Create from "./CreateProject";
import actions from "./ActionCreators";

const bg = "purple";

const navBar = {
  backgroundColor: bg,
  height: "10vh",
  color: "white",
  fontSize: "1.2rem",
  fontFamily: "Poppins",
  letterSpacing: ".1rem",
  margin: "-1rem -1rem 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const container = {
  fontFamily: "Poppins",
  backgroundColor: bg,
  padding: "2rem",
  color: "white",
  borderRadius: "1rem",
  margin: "1rem",
};

const btnPop = {
  padding: ".5rem 1rem",
  borderRadius: "1rem",
  outline: "none",
  border: "none",
  backgroundColor: "white",
  color: bg,
  cursor: "pointer",
  fontWeight: "bold",
  float: "right",
};

const strongHolder = {
  backgroundColor: "white",
  color: "purple",
  display: "inline-block",
  width: "1.5rem",
  height: "1.5rem",
  borderRadius: "50%",
  textAlign: "center",
};

const footer = {
  textAlign: "center",
  color: bg,
  fontFamily: "Poppins",
  fontSize: ".8rem",
};

function App({ quotes, deleteQuote }) {
  // console.log("quotes:", quotes);
  const Something =
    quotes &&
    quotes.map((post) => (
      <div style={container} key={post.id}>
        <button style={btnPop} onClick={() => deleteQuote(post.id)}>
          Pop
        </button>
        <strong style={strongHolder}>{post.id}</strong>
        <p>{post.quote}</p>
        <b>
          <i>~{post.author}</i>
        </b>
      </div>
    ));
  return (
    <>
      <nav style={navBar}>
        - Submit Your Quotes -<br />
      </nav>
      <Create />
      {Something}
      <p style={footer}>
        Copyright 2k21 <b>@manikangkandas</b>
      </p>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteQuote: (id) => dispatch(actions.deleteQuote(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
