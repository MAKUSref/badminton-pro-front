import { Grid } from '@mui/material';

import GroupPage from '../GroupPage';
import SinglesTable from '@/components/groups/SinglesTable';
import { useGetAllGroupsQuery } from '@/redux/api/groupApi';

const SinglesPage = () => {
  const { data: groups, isLoading } = useGetAllGroupsQuery({ type: 'SINGLE' });

  if (isLoading) {
    <></>;
  }

  return (
    <GroupPage groupType={'SINGLE'} isEmpty={groups?.length === 0}>
      {groups?.map((group, i) => (
        <Grid item key={i} xs={6} md={4}>
          <SinglesTable key={group._id} group={group} />
        </Grid>
      ))}
    </GroupPage>
  );
};

export default SinglesPage;
