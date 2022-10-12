import PropTypes from 'prop-types';
import { LabelFilter, FilterBox, InputFilter } from './FilterSearch.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <FilterBox>
      <LabelFilter htmlFor="">Find contacts by name</LabelFilter>
      <InputFilter type="text" value={value} onChange={onChangeFilter} />
    </FilterBox>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
