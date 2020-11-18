import React from "react";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebookActions";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";
import { Input, InputBlockWrapper, Label, InputNames } from "../Styles/Styles";
const SearchForm = ({ value, onFindContacts }) => {
  return (
    <InputBlockWrapper>
      <Label>
        <InputNames>Find contacts by name</InputNames>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={(e) => onFindContacts(e.target.value)}
        />
      </Label>
    </InputBlockWrapper>
  );
};

const mapStateToProps = (state) => ({
  value: phonebookSelectors.getFilter(state),
});
const mapDispatchToProps = {
  onFindContacts: phonebookActions.changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
