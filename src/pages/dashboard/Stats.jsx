import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showStats } from '../../features/allJobs/allJobsSlice';

const Stats = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, []);

  return <div>Stats</div>;
};

export default Stats;
