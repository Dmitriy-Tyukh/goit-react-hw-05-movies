import { FormStyled, InputStyled, ButtonStyled } from './SearchForm.styled';
import { IconContext } from 'react-icons';
import { SlMagnifier } from 'react-icons/sl';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  return (
    <FormStyled onSubmit={onSubmit} autoComplete="off">
      <InputStyled
        name="search"
        id="search"
        placeholder="Search..."
        type="search"
      />
      <IconContext.Provider value={{ color: 'with', size:'1.25rem'}}>
        <ButtonStyled
          area-label="Search button"
          type="subbmit"
          variant="outlined"
          startIcon={<SlMagnifier />}
        ></ButtonStyled>
      </IconContext.Provider>
    </FormStyled>
  );
};

export default SearchForm;

SearchForm.propTypes = { onSubmit: PropTypes.func.isRequired };