import { MdOutlineRemoveCircleOutline } from 'react-icons/md';

import { Btn, List, ListItem } from './Contacts.styled';
import { remove } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <Btn onClick={() => dispatch(remove(id))}>
            <MdOutlineRemoveCircleOutline size="24" />
          </Btn>
          {name}: {number}
        </ListItem>
      ))}
    </List>
  );
};
