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
    domain
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSchoolQueryVariables, APITypes.GetSchoolQuery>;
export const listSchools = /* GraphQL */ `query ListSchools(
  $id: ID
  $filter: ModelSchoolFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSchools(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      domain
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
    name
    startDate
    endDate
    schoolID
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
  $id: ID
  $filter: ModelAcademicYearFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAcademicYears(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      startDate
      endDate
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
    name
    startDate
    endDate
    schoolID
    academicYearID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTermQueryVariables, APITypes.GetTermQuery>;
export const listTerms = /* GraphQL */ `query ListTerms(
  $id: ID
  $filter: ModelTermFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTerms(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      startDate
      endDate
      schoolID
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
export const getClass = /* GraphQL */ `query GetClass($id: ID!) {
  getClass(id: $id) {
    id
    name
    schoolID
    termID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetClassQueryVariables, APITypes.GetClassQuery>;
export const listClasses = /* GraphQL */ `query ListClasses(
  $id: ID
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listClasses(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      schoolID
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
  APITypes.ListClassesQueryVariables,
  APITypes.ListClassesQuery
>;
export const getStudent = /* GraphQL */ `query GetStudent($id: ID!) {
  getStudent(id: $id) {
    id
    firstName
    lastName
    email
    schoolID
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
  $id: ID
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listStudents(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      firstName
      lastName
      email
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
    name
    email
    userRole
    schoolID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $id: ID
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      email
      userRole
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
    schoolID
    classID
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
  $id: ID
  $filter: ModelSubjectFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSubjects(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
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
  APITypes.ListSubjectsQueryVariables,
  APITypes.ListSubjectsQuery
>;
export const getAssessment = /* GraphQL */ `query GetAssessment($id: ID!) {
  getAssessment(id: $id) {
    id
    title
    assessmentDate
    schoolID
    subjectID
    termID
    classID
    createdBy
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
  $id: ID
  $filter: ModelAssessmentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAssessments(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      title
      assessmentDate
      schoolID
      subjectID
      termID
      classID
      createdBy
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
    assessmentID
    score
    comments
    schoolID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetGradeQueryVariables, APITypes.GetGradeQuery>;
export const listGrades = /* GraphQL */ `query ListGrades(
  $id: ID
  $filter: ModelGradeFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listGrades(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      studentID
      assessmentID
      score
      comments
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
    schoolID
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
  $id: ID
  $filter: ModelAttendanceFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAttendances(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      studentID
      classID
      date
      status
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
  APITypes.ListAttendancesQueryVariables,
  APITypes.ListAttendancesQuery
>;
export const getAnnouncement = /* GraphQL */ `query GetAnnouncement($id: ID!) {
  getAnnouncement(id: $id) {
    id
    title
    body
    audience
    createdBy
    createdAt
    schoolID
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAnnouncementQueryVariables,
  APITypes.GetAnnouncementQuery
>;
export const listAnnouncements = /* GraphQL */ `query ListAnnouncements(
  $id: ID
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAnnouncements(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      title
      body
      audience
      createdBy
      createdAt
      schoolID
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
export const academicYearsBySchoolID = /* GraphQL */ `query AcademicYearsBySchoolID(
  $schoolID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAcademicYearFilterInput
  $limit: Int
  $nextToken: String
) {
  academicYearsBySchoolID(
    schoolID: $schoolID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      startDate
      endDate
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
  APITypes.AcademicYearsBySchoolIDQueryVariables,
  APITypes.AcademicYearsBySchoolIDQuery
>;
export const termsBySchoolID = /* GraphQL */ `query TermsBySchoolID(
  $schoolID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTermFilterInput
  $limit: Int
  $nextToken: String
) {
  termsBySchoolID(
    schoolID: $schoolID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      startDate
      endDate
      schoolID
      academicYearID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TermsBySchoolIDQueryVariables,
  APITypes.TermsBySchoolIDQuery
>;
export const termsByAcademicYearID = /* GraphQL */ `query TermsByAcademicYearID(
  $academicYearID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTermFilterInput
  $limit: Int
  $nextToken: String
) {
  termsByAcademicYearID(
    academicYearID: $academicYearID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      startDate
      endDate
      schoolID
      academicYearID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TermsByAcademicYearIDQueryVariables,
  APITypes.TermsByAcademicYearIDQuery
>;
export const classesBySchoolID = /* GraphQL */ `query ClassesBySchoolID(
  $schoolID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  classesBySchoolID(
    schoolID: $schoolID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      schoolID
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
  APITypes.ClassesBySchoolIDQueryVariables,
  APITypes.ClassesBySchoolIDQuery
>;
export const classesByTermID = /* GraphQL */ `query ClassesByTermID(
  $termID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  classesByTermID(
    termID: $termID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      schoolID
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
  APITypes.ClassesByTermIDQueryVariables,
  APITypes.ClassesByTermIDQuery
>;
export const studentsBySchoolID = /* GraphQL */ `query StudentsBySchoolID(
  $schoolID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  studentsBySchoolID(
    schoolID: $schoolID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      firstName
      lastName
      email
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
  APITypes.StudentsBySchoolIDQueryVariables,
  APITypes.StudentsBySchoolIDQuery
>;
export const usersBySchoolID = /* GraphQL */ `query UsersBySchoolID(
  $schoolID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersBySchoolID(
    schoolID: $schoolID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      email
      userRole
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
  APITypes.UsersBySchoolIDQueryVariables,
  APITypes.UsersBySchoolIDQuery
>;
export const subjectsBySchoolID = /* GraphQL */ `query SubjectsBySchoolID(
  $schoolID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSubjectFilterInput
  $limit: Int
  $nextToken: String
) {
  subjectsBySchoolID(
    schoolID: $schoolID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
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
  APITypes.SubjectsBySchoolIDQueryVariables,
  APITypes.SubjectsBySchoolIDQuery
>;
export const subjectsByClassID = /* GraphQL */ `query SubjectsByClassID(
  $classID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSubjectFilterInput
  $limit: Int
  $nextToken: String
) {
  subjectsByClassID(
    classID: $classID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
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
  APITypes.SubjectsByClassIDQueryVariables,
  APITypes.SubjectsByClassIDQuery
>;
export const assessmentsBySchoolID = /* GraphQL */ `query AssessmentsBySchoolID(
  $schoolID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAssessmentFilterInput
  $limit: Int
  $nextToken: String
) {
  assessmentsBySchoolID(
    schoolID: $schoolID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      assessmentDate
      schoolID
      subjectID
      termID
      classID
      createdBy
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AssessmentsBySchoolIDQueryVariables,
  APITypes.AssessmentsBySchoolIDQuery
>;
export const assessmentsBySubjectID = /* GraphQL */ `query AssessmentsBySubjectID(
  $subjectID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAssessmentFilterInput
  $limit: Int
  $nextToken: String
) {
  assessmentsBySubjectID(
    subjectID: $subjectID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      assessmentDate
      schoolID
      subjectID
      termID
      classID
      createdBy
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AssessmentsBySubjectIDQueryVariables,
  APITypes.AssessmentsBySubjectIDQuery
>;
export const gradesByStudentID = /* GraphQL */ `query GradesByStudentID(
  $studentID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGradeFilterInput
  $limit: Int
  $nextToken: String
) {
  gradesByStudentID(
    studentID: $studentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentID
      assessmentID
      score
      comments
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
  APITypes.GradesByStudentIDQueryVariables,
  APITypes.GradesByStudentIDQuery
>;
export const gradesByAssessmentID = /* GraphQL */ `query GradesByAssessmentID(
  $assessmentID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGradeFilterInput
  $limit: Int
  $nextToken: String
) {
  gradesByAssessmentID(
    assessmentID: $assessmentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentID
      assessmentID
      score
      comments
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
  APITypes.GradesByAssessmentIDQueryVariables,
  APITypes.GradesByAssessmentIDQuery
>;
export const gradesBySchoolID = /* GraphQL */ `query GradesBySchoolID(
  $schoolID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGradeFilterInput
  $limit: Int
  $nextToken: String
) {
  gradesBySchoolID(
    schoolID: $schoolID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentID
      assessmentID
      score
      comments
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
  APITypes.GradesBySchoolIDQueryVariables,
  APITypes.GradesBySchoolIDQuery
>;
export const attendancesByStudentID = /* GraphQL */ `query AttendancesByStudentID(
  $studentID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAttendanceFilterInput
  $limit: Int
  $nextToken: String
) {
  attendancesByStudentID(
    studentID: $studentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentID
      classID
      date
      status
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
  APITypes.AttendancesByStudentIDQueryVariables,
  APITypes.AttendancesByStudentIDQuery
>;
export const attendancesByClassID = /* GraphQL */ `query AttendancesByClassID(
  $classID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAttendanceFilterInput
  $limit: Int
  $nextToken: String
) {
  attendancesByClassID(
    classID: $classID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentID
      classID
      date
      status
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
  APITypes.AttendancesByClassIDQueryVariables,
  APITypes.AttendancesByClassIDQuery
>;
export const attendancesBySchoolID = /* GraphQL */ `query AttendancesBySchoolID(
  $schoolID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAttendanceFilterInput
  $limit: Int
  $nextToken: String
) {
  attendancesBySchoolID(
    schoolID: $schoolID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentID
      classID
      date
      status
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
  APITypes.AttendancesBySchoolIDQueryVariables,
  APITypes.AttendancesBySchoolIDQuery
>;
export const announcementsBySchoolID = /* GraphQL */ `query AnnouncementsBySchoolID(
  $schoolID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  announcementsBySchoolID(
    schoolID: $schoolID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      body
      audience
      createdBy
      createdAt
      schoolID
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AnnouncementsBySchoolIDQueryVariables,
  APITypes.AnnouncementsBySchoolIDQuery
>;
