import React from "react";
import {
  StyledSection,
  SectionHeader,
  SectionContent,
  SectionSubTitle,
} from "./pageStyles";

const EducationSkills = () => {
  return (
    <StyledSection>
      <SectionHeader>Education</SectionHeader>
      <SectionSubTitle>
        Mathematics @ Durham University
        <br />
        2021 - 2022
      </SectionSubTitle>
      <SectionContent>
        Modules studied; Analysis, Calculus, Discrete Mathematics, Dynamics,
        Linear Algebra, Probability, Programming and Statistics.
        <br />I also qualified to represent the University Table Tennis team
      </SectionContent>
      <SectionSubTitle>
        A Levels @ St Ivo Academy, St Ives
        <br />
        2019 - 2021
      </SectionSubTitle>
      <SectionContent>
        A* Further Mathematics
        <br />
        A* Mathematics
        <br />A Physical Education
      </SectionContent>
      <SectionSubTitle>
        GCSEs @ Abbey College, Ramsey
        <br />
        2014 - 2019
      </SectionSubTitle>
      <SectionContent>
        11 grades 6-9; including a 9 in Mathematics, A in ICT and an A in
        Statistics.
      </SectionContent>
      <SectionHeader>Skills and Achievements</SectionHeader>
      <SectionContent>
        2021 Full UK Driving License
        <br />
        2020 Duke of Edinburgh - Silver Award
        <br />
        2019 Sports Leadership Qualification - Level 1
      </SectionContent>
    </StyledSection>
  );
};

export default EducationSkills;
