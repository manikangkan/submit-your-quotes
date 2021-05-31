import React from "react";
import { Box, TextField, Grid, Button, Container } from "@material-ui/core";
import { Description, PostAdd } from "@material-ui/icons";
import { connect } from "react-redux";
import actions from "./ActionCreators";

function Create({ createQuote }) {
  const [quote, setQuote] = React.useState({ quote: "", author: "" });

  const handleSubmit = (e) => {
    if (quote.quote !== "" && quote.author !== "") {
      quote.id = Math.floor(Math.random() * 10 + 1);
      createQuote(quote);
      setQuote({ quote: "", author: "" });
      console.log("push");
    } else {
      alert("Empty Field! Kuch toh likh bhai...");
    }
  };
  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ height: "40vh" }}
      >
        <form>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={1}>
              <Description />
            </Grid>
            <Grid item xs={11}>
              <TextField
                multiline
                id="input-with-icon-grid"
                label="Quote"
                fullWidth
                value={quote.quote}
                onChange={(e) => setQuote({ ...quote, quote: e.target.value })}
              />
            </Grid>
            <Grid item xs={1}>
              <PostAdd />
            </Grid>

            <Grid item xs={11}>
              <TextField
                id="input-with-icon-grid"
                label="Author"
                fullWidth
                value={quote.author}
                onChange={(e) => setQuote({ ...quote, author: e.target.value })}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                onClick={handleSubmit}
                type="submit"
                component={Box}
                mt={2}
                variant="contained"
                color="primary"
                disableElevation
                fullWidth
                style={{ backgroundColor: "purple" }}
              >
                Upload Quote
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
const mapDispatchToProps = (dispatch) => {
  return { createQuote: (quote) => dispatch(actions.createQuote(quote)) };
};

export default connect(null, mapDispatchToProps)(Create);
