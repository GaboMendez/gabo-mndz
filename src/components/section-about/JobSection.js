import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { useState } from 'react';
import { FaAngleDoubleRight, FaMapMarkerAlt } from 'react-icons/fa';
import { JobContainer, JobInfo, JobsWrapper, JobTabs, Title } from './styles';

const jobs = [
  {
    company: 'Banco Central',
    country: 'Dominican Republic',
    position: 'Senior Software Engineer',
    date: 'Jul 2022 - Present',
    descriptions: [
      'Developed full-stack applications using React and C# with microservices architecture',
      'Built and maintained cross-platform mobile applications with React Native',
      'Applied agile methodologies for efficient project delivery and team collaboration',
      'Created intuitive user interfaces following UX best practices and design principles',
    ],
  },
  {
    company: 'Banco Popular',
    country: 'Dominican Republic',
    position: 'Software Engineer',
    date: 'May 2022 - Jul 2022',
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
    country: 'Dominican Republic',
    date: 'Aug 2020 - May 2022',
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
    country: 'Dominican Republic',
    date: 'Feb 2020 - Jul 2020',
    descriptions: [
      'Developer and Designer of Software Applications with React Native and Xamarin Forms',
      'Develop user stories, handle issues and communicate with the team using Azure DevOps',
      'Designed, analyzed, documented, and re-engineer multiple systems interfaces',
      'Implemented SOLID principles and design patterns to create maintainable and scalable mobile architectures',
    ],
  },
  {
    company: 'Planeta Azul',
    position: 'Software Engineer',
    country: 'Dominican Republic',
    date: 'Oct 2019 - Feb 2020',
    descriptions: [
      'Architected modular components using factory and repository patterns for better code reusability',
      'Developer and Designer of Software Applications with React and Xamarin Forms',
      'Develop maintainable, and scalable applications implementing the best practices and design patterns',
      'Develop mobile application user interfaces and their functionality.',
    ],
  },
];

const JobSection = () => {
  const isMobile = useMediaQuery('(max-width:1020px)');

  const [tabIndex, setTabIndex] = useState(0);
  const { company, position, date, descriptions, country } = jobs[tabIndex];

  return (
    <>
      <Title alignRight={!isMobile}>WORK EXPERIENCE</Title>
      <JobContainer>
        <JobsWrapper>
          <JobInfo className='wow bounceInRigh animated'>
            <h3>{position}</h3>
            {country && (
              <div className='location-pill'>
                <FaMapMarkerAlt className='location-icon' />
                {country}
              </div>
            )}
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
