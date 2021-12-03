import React from 'react';
import { useState } from 'react';
import { JobContainer, JobInfo, JobsWrapper, JobTabs, Title } from './styles';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

/** Classname lists
 * section jobs
 * jobs-center
 * btn-container
 *
 * job-btn active-btn
 * job-info
 * job-desc
 * job-date
 * job-icon
 */
const jobs = [
  {
    company: 'Xpert Code',
    position: 'Software Developer',
    date: 'August 2020 - Present',
    descriptions: [
      'React, Next, TypeScript, JavaScript / ES6, SPA, Styled Components / CSS / SASS, HTML5',
      'adasdsad',
      'adasdasdsa',
    ],
  },
  {
    company: 'Caribe Media',
    position: 'Mobile Developer',
    date: 'February 2020 - August 2020',
    descriptions: [
      'Xamarin (MVVM, Prism), Kotlin (MVVM, MVP), Android SDK',
      'adasdsad',
      'adasdasdsa',
    ],
  },
  {
    company: 'Planeta Azul',
    position: 'Mobile Developer',
    date: 'October 2019 - February 2020',
    descriptions: [
      'Oracle / SQL Server, Spring Boot-Cloud, Java, C#, Rest API, OOP / Design Patterns',
      'adasdsad',
      'adasdasdsa',
    ],
  },
];

const JobSection = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 780px)',
  });
  const [tabIndex, setTabIndex] = useState(0);
  const { company, position, date, descriptions } = jobs[tabIndex];

  return (
    <>
      <Title alignRight={!isMobile}>WORK EXPERIENCE</Title>
      <JobContainer>
        <JobsWrapper>
          <JobInfo>
            <h3>{position}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{date}</p>
            {descriptions.map((description, idx) => {
              return (
                <div key={idx} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon' />
                  <p>{description}</p>
                </div>
              );
            })}
          </JobInfo>

          <JobTabs>
            {jobs.map((item, idx) => {
              return (
                <button
                  key={idx}
                  className={`job-btn ${idx === tabIndex && 'active-btn'}`}
                  onClick={() => setTabIndex(idx)}
                >
                  {item.company}
                </button>
              );
            })}
          </JobTabs>
        </JobsWrapper>
      </JobContainer>
    </>
  );
};

export default JobSection;
