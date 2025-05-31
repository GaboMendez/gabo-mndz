import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { JobContainer, JobInfo, JobsWrapper, JobTabs, Title } from './styles';

const jobs = [
  {
    company: 'Banco Central',
    position: 'Software Engineer',
    date: 'May 2021 - Jul 2022',
    descriptions: [
      'Developed full-stack applications using React and C# with microservices architecture',
      'Built and maintained cross-platform mobile applications with React Native',
      'Applied agile methodologies for efficient project delivery and team collaboration',
      'Created intuitive user interfaces following UX best practices and design principles'
    ],
  },
  {
    company: 'Banco Popular',
    position: 'Software Engineer',
    date: 'May 2021 - Jul 2022',
    descriptions: [
      'Developed and maintained microservices architecture using Nest and GraphQL APIs',
      'Built and deployed cross-platform mobile applications with React Native',
      'Integrated GraphQL federation for distributed microservices data querying',
      'Implemented DevOps practices using GitLab CI/CD pipelines',
    ],
  },
  {
    company: 'Xpert Code',
    position: 'Software Engineer',
    date: 'Jan 2020 - May 2021',
    descriptions: [
      'Design and develop responsive and high-performance applications with React and Java Spring',
      'Collaborated with the designers to create beautiful and functional UI interfaces',
      'Collaborated with the team to design robust software solutions using SCRUM methodology',
      'CI/CD using Jenkins pipelines and Openshift alongside with Docker',
    ],
  },
  {
    company: 'Caribe Media',
    position: 'Software Engineer',
    date: 'March 2019 - Jan 2020',
    descriptions: [
      'Developer and Designer of Software Applications with React Native and Xamarin Forms',
      'Develop user stories, handle issues and communicate with the team using Azure DevOps',
      'Designed, analyzed, documented, and re-engineer multiple systems interfaces',
    ],
  },
  {
    company: 'Planeta Azul',
    position: 'Software Engineer',
    date: 'October 2018 - March 2019',
    descriptions: [
      'Developer and Designer of Software Applications with React and Xamarin Forms',
      'Develop maintainable, and scalable applications implementing the best practices and design patterns',
      'Develop mobile application user interfaces and their functionality.',
    ],
  },
];

const JobSection = () => {
  const isMobile = useMediaQuery('(max-width:780px)');

  const [tabIndex, setTabIndex] = useState(0);
  const { company, position, date, descriptions } = jobs[tabIndex];

  return (
    <>
      <Title alignRight={!isMobile}>WORK EXPERIENCE</Title>
      <JobContainer>
        <JobsWrapper>
          <JobInfo className='wow bounceInRigh animated'>
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
