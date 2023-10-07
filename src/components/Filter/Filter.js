import { useDispatch } from 'react-redux';
import { InputFilter } from './Filter.styled';
import { changeFilterValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const value = evt.currentTarget.value;
    dispatch(changeFilterValue(value));
  };
  return (
    <div>
      <InputFilter
        type="text"
        name="filter"
        placeholder="Contacts filter"
        onChange={handleChange}
      />
    </div>
  );
};
