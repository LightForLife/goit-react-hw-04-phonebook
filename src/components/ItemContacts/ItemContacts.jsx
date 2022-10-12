import PropTypes from 'prop-types';
import { FaUserTimes } from 'react-icons/fa';
import {
  ItemContact,
  NameContact,
  DeleteContactBtn,
  TelContact,
} from './ItemContacts.styled';

export const ItemContacts = ({ id, name, number, onDelete }) => {
  return (
    <ItemContact id={id}>
      <NameContact>
        {name}
        <DeleteContactBtn onClick={() => onDelete(id)}>
          <FaUserTimes size={18} />
        </DeleteContactBtn>
      </NameContact>
      <TelContact>{number}</TelContact>
    </ItemContact>
  );
};

ItemContacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
