const deleteQuote = (id) => {
  return { type: "DELETE_POST", id: id };
};
const createQuote = (cp) => {
  return { type: "CREATE_POST", cp: cp };
};
const actions = { deleteQuote, createQuote };
export default actions;
