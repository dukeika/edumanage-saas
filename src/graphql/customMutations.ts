export const customCreateSchool = /* GraphQL */ `
  mutation CustomCreateSchool($input: CreateSchoolInput!) {
    createSchool(input: $input) {
      id
      name
      domain
      createdAt
      updatedAt
    }
  }
`;

export const customCreateClass = /* GraphQL */ `
  mutation CustomCreateClass($input: CreateClassInput!) {
    createClass(input: $input) {
      id
      name
      schoolID
      termID
      createdAt
      updatedAt
    }
  }
`;

export const customCreateStudent = /* GraphQL */ `
  mutation CustomCreateStudent($input: CreateStudentInput!) {
    createStudent(input: $input) {
      id
      firstName
      lastName
      email
      schoolID
      createdAt
      updatedAt
    }
  }
`;

export const customCreateSubject = /* GraphQL */ `
  mutation CustomCreateSubject($input: CreateSubjectInput!) {
    createSubject(input: $input) {
      id
      name
      schoolID
      classID
      createdAt
      updatedAt
    }
  }
`;

export const customCreateAcademicYear = /* GraphQL */ `
  mutation CustomCreateAcademicYear($input: CreateAcademicYearInput!) {
    createAcademicYear(input: $input) {
      id
      name
      startDate
      endDate
      schoolID
      createdAt
      updatedAt
    }
  }
`;

export const customCreateTerm = /* GraphQL */ `
  mutation CustomCreateTerm($input: CreateTermInput!) {
    createTerm(input: $input) {
      id
      name
      startDate
      endDate
      academicYearID
      schoolID
      createdAt
      updatedAt
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
      schoolID
      createdBy
      createdAt
      updatedAt
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
      comments
      schoolID
      createdAt
      updatedAt
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
      schoolID
      createdAt
      updatedAt
    }
  }
`;

export const customCreateAnnouncement = /* GraphQL */ `
  mutation CustomCreateAnnouncement($input: CreateAnnouncementInput!) {
    createAnnouncement(input: $input) {
      id
      title
      body
      audience
      createdBy
      createdAt
      schoolID
      updatedAt
    }
  }
`;
