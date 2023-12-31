import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Bikes', 'Bicycles', 'Rides'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  // useEffect(() => {
  //   const sections = [intro, projectOne];

  //   const sectionObserver = new IntersectionObserver(
  //     (entries, observer) => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           const section = entry.target;
  //           observer.unobserve(section);
  //           if (visibleSections.includes(section)) return;
  //           setVisibleSections(prevSections => [...prevSections, section]);
  //         }
  //       });
  //     },
  //     { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  //   );

  //   const indicatorObserver = new IntersectionObserver(
  //     ([entry]) => {
  //       setScrollIndicatorHidden(!entry.isIntersecting);
  //     },
  //     { rootMargin: '-100% 0px 0px 0px' }
  //   );

  //   sections.forEach(section => {
  //     sectionObserver.observe(section.current);
  //   });

  //   indicatorObserver.observe(intro.current);

  //   return () => {
  //     sectionObserver.disconnect();
  //     indicatorObserver.disconnect();
  //   };
  // }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Official Future Bikes Reseller"
        description="Future Bikes - cool bikes"
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      {/* <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="ASTRO : making space cool (again)"
        description="Modern interactive platform, that enables the user to see realtime space launch information and data."
        buttonText="View project"
        buttonLink="/projects/astro"
        model={{
          type: 'computer',
          alt: 'Modern rocket launch visualiser',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      /> */}
      {/* <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="PLANETHOPPER : fun and challanging mobile car game"
        description="Hop in your car and try reaching the next planet while avoiding dynamicly spawned obstacles."
        buttonText="View website"
        buttonLink="/projects/planethopper"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      /> */}
      {/* <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="W.I.P. : open to ideas.."
        description="W.I.P... Open to ideas"
        buttonText="View project"
        buttonLink="/projects/wip"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      /> */}
      {/* <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      /> */}
      <Footer />
    </div>
  );
};
