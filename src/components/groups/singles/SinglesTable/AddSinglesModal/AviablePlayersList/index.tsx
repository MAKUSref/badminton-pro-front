import { Checkbox, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import { useGetAllPlayersAvailableForSingleQuery } from '@/redux/api/playerApi';
import { Gender, Id } from '@/redux/types/common';

interface AvailablePlayersListProps {
  gender: Gender;
  setPlayersIdList: Dispatch<SetStateAction<Id[]>>;
  playersIdList: Id[];
}

const AvailablePlayersList = ({
  gender,
  playersIdList,
  setPlayersIdList
}: AvailablePlayersListProps) => {
  const { data: players } = useGetAllPlayersAvailableForSingleQuery({ gender });

  const handleToggle = (id: Id) => () => {
    const currentIndex = playersIdList.indexOf(id);
    const newChecked = [...playersIdList];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setPlayersIdList(newChecked);
  };

  return (
    <List>
      {players?.map((player) => (
        <ListItem
          disablePadding
          key={player._id}
          secondaryAction={
            <Checkbox
              edge="end"
              onChange={handleToggle(player._id)}
              checked={playersIdList.includes(player._id)}
            />
          }>
          <ListItemButton>
            <ListItemText primary={`${player.firstName} ${player.lastName}`} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default AvailablePlayersList;
