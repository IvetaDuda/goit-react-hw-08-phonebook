import { useDispatch, useSelector } from 'react-redux';
import { getFilter, changeFilter } from 'redux/contactsSlice';

import { FilterDiv, Label, Input, Search } from './Filter.styled';
import search from '../../image/search.svg';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const hendleFilter = e => {
    dispatch(changeFilter(e.currentTarget.value.trim()));
  };
  return (
    <FilterDiv>
      <Label name="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={hendleFilter}
      ></Input>
      <Search src={search} alt="search" />
    </FilterDiv>
  );
};
export default Filter;
