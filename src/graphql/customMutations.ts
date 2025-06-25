// src/graphql/customMutations.ts

export const customCreateSchool = /* GraphQL */ `
  mutation CustomCreateSchool($input: CreateSchoolInput!) {
    createSchool(input: $input) {
      id
      name
      address
      owner
    }
  }
`;

export const customCreateClass = /* GraphQL */ `
  mutation CustomCreateClass($input: CreateClassInput!) {
    createClass(input: $input) {
      id
      name
      schoolID
      teacherID
    }
  }
`;

export const customCreateStudent = /* GraphQL */ `
  mutation CustomCreateStudent($input: CreateStudentInput!) {
    createStudent(input: $input) {
      id
      name
      classID
      schoolID
    }
  }
`;

export const customCreateSubject = /* GraphQL */ `
  mutation CustomCreateSubject($input: CreateSubjectInput!) {
    createSubject(input: $input) {
      id
      name
      classID
    }
  }
`;

export const customCreateAcademicYear = /* GraphQL */ `
  mutation CustomCreateAcademicYear($input: CreateAcademicYearInput!) {
    createAcademicYear(input: $input) {
      id
      yearLabel
      schoolID
    }
  }
`;

export const customCreateTerm = /* GraphQL */ `
  mutation CustomCreateTerm($input: CreateTermInput!) {
    createTerm(input: $input) {
      id
      termLabel
      academicYearID
    }
  }
`;

export const customCreateAssessment = /* GraphQL */ `
  mutation CustomCreateAssessment($input: CreateAssessmentInput!) {
    createAssessment(input: $input) {
      id
      title
      assessmentDate
      classID
      subjectID
      termID
    }
  }
`;

export const customCreateGrade = /* GraphQL */ `
  mutation CustomCreateGrade($input: CreateGradeInput!) {
    createGrade(input: $input) {
      id
      studentID
      assessmentID
      score
      classID
    }
  }
`;

export const customCreateAttendance = /* GraphQL */ `
  mutation CustomCreateAttendance($input: CreateAttendanceInput!) {
    createAttendance(input: $input) {
      id
      studentID
      classID
      date
      status
    }
  }
`;

export const customCreateAnnouncement = /* GraphQL */ `
  mutation CustomCreateAnnouncement($input: CreateAnnouncementInput!) {
    createAnnouncement(input: $input) {
      id
      title
      message
      schoolID
      createdBy
    }
  }
`;
