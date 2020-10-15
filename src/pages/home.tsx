import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

import JobModal from '../components/job-modal'
import Job from '../components/job';

import JobProps from '../interfaces/job';

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(Query);
  const [selectedJob, selectJob] = useState('');

  {
    data && data.jobs && console.log(data.jobs && data.jobs.find((job:any) => job.id == selectedJob))
  }

  if (loading) return <div className="loading">loading</div>;

  if (error) return <div className="error">error</div>;

  if (!data) return <div className="not-found">not found</div>;

  return (
    <HomeContainer>
      {selectedJob && <div>{selectedJob}</div>}
      <JobsSection>
        {
          data.jobs &&
          data.jobs.map((jobData: JobProps) => (
            <Job key={jobData.id} {...jobData} onClick={id => selectJob(id)} />
          ))
        }
      </JobsSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: block;
  max-width: 740px;
  margin: 0 auto;
`;

const JobsSection = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Query = gql`
  {
    jobs {
      id
      title
      slug
      company {
        name
        websiteUrl
        createdAt
      }
      commitment {
        title
      }
      cities {
        name
      }
    }
  }
`;

export default Home;
