/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getSchool = /* GraphQL */ `query GetSchool($id: ID!) {
  getSchool(id: $id) {
    id
    name
    address
    owner
    admins
    academicYears {
      nextToken
      __typename
    }
    classes {
      nextToken
      __typename
    }
    students {
      nextToken
      __typename
    }
    users {
      nextToken
      __typename
    }
    announcements {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSchoolQueryVariables, APITypes.GetSchoolQuery>;
export const listSchools = /* GraphQL */ `query ListSchools(
  $filter: ModelSchoolFilterInput
  $limit: Int
  $nextToken: String
) {
  listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      address
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSchoolsQueryVariables,
  APITypes.ListSchoolsQuery
>;
export const getAcademicYear = /* GraphQL */ `query GetAcademicYear($id: ID!) {
  getAcademicYear(id: $id) {
    id
    yearLabel
    schoolID
    school {
      id
      name
      address
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    terms {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAcademicYearQueryVariables,
  APITypes.GetAcademicYearQuery
>;
export const listAcademicYears = /* GraphQL */ `query ListAcademicYears(
  $filter: ModelAcademicYearFilterInput
  $limit: Int
  $nextToken: String
) {
  listAcademicYears(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      yearLabel
      schoolID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAcademicYearsQueryVariables,
  APITypes.ListAcademicYearsQuery
>;
export const getTerm = /* GraphQL */ `query GetTerm($id: ID!) {
  getTerm(id: $id) {
    id
    termLabel
    startDate
    endDate
    academicYearID
    academicYear {
      id
      yearLabel
      schoolID
      createdAt
      updatedAt
      __typename
    }
    assessments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTermQueryVariables, APITypes.GetTermQuery>;
export const listTerms = /* GraphQL */ `query ListTerms(
  $filter: ModelTermFilterInput
  $limit: Int
  $nextToken: String
) {
  listTerms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      termLabel
      startDate
      endDate
      academicYearID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTermsQueryVariables, APITypes.ListTermsQuery>;
export const getStudent = /* GraphQL */ `query GetStudent($id: ID!) {
  getStudent(id: $id) {
    id
    name
    classID
    schoolID
    class {
      id
      name
      schoolID
      teacherID
      createdAt
      updatedAt
      owner
      __typename
    }
    school {
      id
      name
      address
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    attendances {
      nextToken
      __typename
    }
    grades {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStudentQueryVariables,
  APITypes.GetStudentQuery
>;
export const listStudents = /* GraphQL */ `query ListStudents(
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      classID
      schoolID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentsQueryVariables,
  APITypes.ListStudentsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    email
    name
    role
    schoolID
    school {
      id
      name
      address
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      name
      role
      schoolID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getSubject = /* GraphQL */ `query GetSubject($id: ID!) {
  getSubject(id: $id) {
    id
    name
    classID
    class {
      id
      name
      schoolID
      teacherID
      createdAt
      updatedAt
      owner
      __typename
    }
    assessments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSubjectQueryVariables,
  APITypes.GetSubjectQuery
>;
export const listSubjects = /* GraphQL */ `query ListSubjects(
  $filter: ModelSubjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      classID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSubjectsQueryVariables,
  APITypes.ListSubjectsQuery
>;
export const getAssessment = /* GraphQL */ `query GetAssessment($id: ID!) {
  getAssessment(id: $id) {
    id
    title
    assessmentDate
    classID
    class {
      id
      name
      schoolID
      teacherID
      createdAt
      updatedAt
      owner
      __typename
    }
    subjectID
    subject {
      id
      name
      classID
      createdAt
      updatedAt
      __typename
    }
    termID
    term {
      id
      termLabel
      startDate
      endDate
      academicYearID
      createdAt
      updatedAt
      __typename
    }
    grades {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAssessmentQueryVariables,
  APITypes.GetAssessmentQuery
>;
export const listAssessments = /* GraphQL */ `query ListAssessments(
  $filter: ModelAssessmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAssessments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      assessmentDate
      classID
      subjectID
      termID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAssessmentsQueryVariables,
  APITypes.ListAssessmentsQuery
>;
export const getGrade = /* GraphQL */ `query GetGrade($id: ID!) {
  getGrade(id: $id) {
    id
    studentID
    student {
      id
      name
      classID
      schoolID
      createdAt
      updatedAt
      __typename
    }
    assessmentID
    assessment {
      id
      title
      assessmentDate
      classID
      subjectID
      termID
      createdAt
      updatedAt
      __typename
    }
    score
    classID
    class {
      id
      name
      schoolID
      teacherID
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetGradeQueryVariables, APITypes.GetGradeQuery>;
export const listGrades = /* GraphQL */ `query ListGrades(
  $filter: ModelGradeFilterInput
  $limit: Int
  $nextToken: String
) {
  listGrades(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      studentID
      assessmentID
      score
      classID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGradesQueryVariables,
  APITypes.ListGradesQuery
>;
export const getAttendance = /* GraphQL */ `query GetAttendance($id: ID!) {
  getAttendance(id: $id) {
    id
    studentID
    classID
    date
    status
    student {
      id
      name
      classID
      schoolID
      createdAt
      updatedAt
      __typename
    }
    class {
      id
      name
      schoolID
      teacherID
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAttendanceQueryVariables,
  APITypes.GetAttendanceQuery
>;
export const listAttendances = /* GraphQL */ `query ListAttendances(
  $filter: ModelAttendanceFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttendances(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      studentID
      classID
      date
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAttendancesQueryVariables,
  APITypes.ListAttendancesQuery
>;
export const getAnnouncement = /* GraphQL */ `query GetAnnouncement($id: ID!) {
  getAnnouncement(id: $id) {
    id
    title
    message
    audience
    targetID
    createdBy
    schoolID
    school {
      id
      name
      address
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    classID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAnnouncementQueryVariables,
  APITypes.GetAnnouncementQuery
>;
export const listAnnouncements = /* GraphQL */ `query ListAnnouncements(
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      message
      audience
      targetID
      createdBy
      schoolID
      classID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAnnouncementsQueryVariables,
  APITypes.ListAnnouncementsQuery
>;
export const getClass = /* GraphQL */ `query GetClass($id: ID!) {
  getClass(id: $id) {
    id
    name
    schoolID
    school {
      id
      name
      address
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    teacherID
    students {
      nextToken
      __typename
    }
    attendances {
      nextToken
      __typename
    }
    subjects {
      nextToken
      __typename
    }
    assessments {
      nextToken
      __typename
    }
    grades {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetClassQueryVariables, APITypes.GetClassQuery>;
export const listClasses = /* GraphQL */ `query ListClasses(
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      schoolID
      teacherID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClassesQueryVariables,
  APITypes.ListClassesQuery
>;
