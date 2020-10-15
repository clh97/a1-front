import React from 'react';
import styled from 'styled-components';

import JobProps from '../interfaces/job';

const Job = (props: JobProps) => {

  return (
    <JobContainer onClick={() => props.onClick(props.id)}>
      <JobTitle>{props.title}</JobTitle>
    </JobContainer>
  )
}

const JobContainer = styled.article`
  width: calc(50% - 1rem);
  height: 200px;
  margin: .5rem;
  padding: .5rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, .33);
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
`;

export default Job;