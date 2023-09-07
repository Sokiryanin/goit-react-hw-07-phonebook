import { InputFilter } from './Filter.styled';

export const Filter = ({ onChangeFilter, value }) => {
  return (
    <div>
      <InputFilter
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Contacts filter"
      />
    </div>
  );
};
