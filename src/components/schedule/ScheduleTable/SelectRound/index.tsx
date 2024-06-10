import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { ButtonBase, Stack, Typography, Menu, MenuItem } from '@mui/material';
import { useState, MouseEvent, SetStateAction, Dispatch } from 'react';

import { dateToString } from '@/utility/dates';

interface SelectRoundProps {
  roundsCount: number;
  date: string;
  setRound: Dispatch<SetStateAction<number>>;
  round: number;
}

const SelectRound = ({ date, roundsCount, setRound, round }: SelectRoundProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (index: number) => {
    setRound(index);
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonBase onClick={handleClick} sx={{ width: 'fit-content' }}>
        <Stack alignItems="start">
          <Stack direction="row" gap={4} alignItems="center">
            <Typography variant="h5">Dzień {round + 1}</Typography>

            <KeyboardArrowDownRoundedIcon fontSize="large" />
          </Stack>
          <Typography variant="subtitle1">{dateToString(date)}</Typography>
        </Stack>
      </ButtonBase>

      <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose(0)}>
        {Array.from(Array(roundsCount).keys()).map((_round, index) => (
          <MenuItem key={index} onClick={() => handleClose(index)}>
            Dzień {index + 1}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SelectRound;
