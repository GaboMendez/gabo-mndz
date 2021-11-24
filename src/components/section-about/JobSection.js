import React from 'react';
import { JobContainer, JobInfo, JobsWrapper, JobTabs, Title } from './styles';
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
const JobSection = () => {
  return (
    <>
      <Title alignRight>WORK EXPERIENCE</Title>
      <JobContainer>
        <JobsWrapper>
          <JobInfo>
            <h3>Full Stack Web Developer</h3>
            <h4>Tommy</h4>
            <p className='job-date'>December 2015 - Present</p>
            <div className='job-desc'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                viewBox='0 0 448 512'
                className='job-icon'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z'></path>
              </svg>
              <p>
                Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual
                poke leggings offal cold-pressed brunch neutra. Hammock photo
                booth live-edge disrupt.
              </p>
            </div>
            <div className='job-desc'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                viewBox='0 0 448 512'
                className='job-icon'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z'></path>
              </svg>
              <p>
                Post-ironic selvage chambray sartorial freegan meditation.
                Chambray chartreuse kombucha meditation, man bun four dollar
                toast street art cloud bread live-edge heirloom.
              </p>
            </div>
            <div className='job-desc'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                viewBox='0 0 448 512'
                className='job-icon'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z'></path>
              </svg>
              <p>
                Butcher drinking vinegar franzen authentic messenger bag copper
                mug food truck taxidermy.
              </p>
            </div>
          </JobInfo>

          <JobTabs>
            <button className='job-btn active-btn'>Tommy</button>
            <button className='job-btn'>BigDrop</button>
            <button className='job-btn'>cuker</button>
          </JobTabs>
        </JobsWrapper>
      </JobContainer>
    </>
  );
};

export default JobSection;
