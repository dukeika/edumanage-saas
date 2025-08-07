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
    subdomain
    status
    logoURL
    heroImageURL
    address
    contactEmail
    phone
    website
    description
    calendar {
      label
      start
      end
      message
      __typename
    }
    news {
      title
      message
      date
      __typename
    }
    schoolAdmin
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
    parents {
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
    tempUpdateField
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
      subdomain
      status
      logoURL
      heroImageURL
      address
      contactEmail
      phone
      website
      description
      schoolAdmin
      admins
      tempUpdateField
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
export const schoolsBySubdomain = /* GraphQL */ `query SchoolsBySubdomain(
  $subdomain: String!
  $sortDirection: ModelSortDirection
  $filter: ModelSchoolFilterInput
  $limit: Int
  $nextToken: String
) {
  schoolsBySubdomain(
    subdomain: $subdomain
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      subdomain
      status
      logoURL
      heroImageURL
      address
      contactEmail
      phone
      website
      description
      schoolAdmin
      admins
      tempUpdateField
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SchoolsBySubdomainQueryVariables,
  APITypes.SchoolsBySubdomainQuery
>;
export const getAcademicYear = /* GraphQL */ `query GetAcademicYear($id: ID!) {
  getAcademicYear(id: $id) {
    id
    yearLabel
    schoolID
    school {
      id
      name
      subdomain
      status
      logoURL
      heroImageURL
      address
      contactEmail
      phone
      website
      description
      schoolAdmin
      admins
      tempUpdateField
      createdAt
      updatedAt
      __typename
    }
    terms {
      nextToken
      __typename
    }
    owner
    admins
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
  APITypes.ListAcademicYearsQueryVariables,
  APITypes.ListAcademicYearsQuery
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
      yearLabel
      schoolID
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
  APITypes.AcademicYearsBySchoolIDQueryVariables,
  APITypes.AcademicYearsBySchoolIDQuery
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
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    assessments {
      nextToken
      __typename
    }
    owner
    admins
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
` as GeneratedQuery<APITypes.ListTermsQueryVariables, APITypes.ListTermsQuery>;
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
      termLabel
      startDate
      endDate
      academicYearID
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
  APITypes.TermsByAcademicYearIDQueryVariables,
  APITypes.TermsByAcademicYearIDQuery
>;
export const getClass = /* GraphQL */ `query GetClass($id: ID!) {
  getClass(id: $id) {
    id
    name
    schoolID
    school {
      id
      name
      subdomain
      status
      logoURL
      heroImageURL
      address
      contactEmail
      phone
      website
      description
      schoolAdmin
      admins
      tempUpdateField
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
    announcements {
      nextToken
      __typename
    }
    owner
    admins
    createdAt
    updatedAt
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
  APITypes.ListClassesQueryVariables,
  APITypes.ListClassesQuery
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
      teacherID
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
  APITypes.ClassesBySchoolIDQueryVariables,
  APITypes.ClassesBySchoolIDQuery
>;
export const getParent = /* GraphQL */ `query GetParent($id: ID!) {
  getParent(id: $id) {
    id
    firstName
    lastName
    email
    phone
    alternatePhone
    address
    occupation
    employer
    relationshipType
    userID
    schoolID
    school {
      id
      name
      subdomain
      status
      logoURL
      heroImageURL
      address
      contactEmail
      phone
      website
      description
      schoolAdmin
      admins
      tempUpdateField
      createdAt
      updatedAt
      __typename
    }
    parentStudents {
      nextToken
      __typename
    }
    isEmergencyContact
    emergencyContactPriority
    schoolAdmins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetParentQueryVariables, APITypes.GetParentQuery>;
export const listParents = /* GraphQL */ `query ListParents(
  $filter: ModelParentFilterInput
  $limit: Int
  $nextToken: String
) {
  listParents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      phone
      alternatePhone
      address
      occupation
      employer
      relationshipType
      userID
      schoolID
      isEmergencyContact
      emergencyContactPriority
      schoolAdmins
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListParentsQueryVariables,
  APITypes.ListParentsQuery
>;
export const parentsByEmail = /* GraphQL */ `query ParentsByEmail(
  $email: AWSEmail!
  $sortDirection: ModelSortDirection
  $filter: ModelParentFilterInput
  $limit: Int
  $nextToken: String
) {
  parentsByEmail(
    email: $email
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
      phone
      alternatePhone
      address
      occupation
      employer
      relationshipType
      userID
      schoolID
      isEmergencyContact
      emergencyContactPriority
      schoolAdmins
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ParentsByEmailQueryVariables,
  APITypes.ParentsByEmailQuery
>;
export const parentsBySchoolID = /* GraphQL */ `query ParentsBySchoolID(
  $schoolID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelParentFilterInput
  $limit: Int
  $nextToken: String
) {
  parentsBySchoolID(
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
      phone
      alternatePhone
      address
      occupation
      employer
      relationshipType
      userID
      schoolID
      isEmergencyContact
      emergencyContactPriority
      schoolAdmins
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ParentsBySchoolIDQueryVariables,
  APITypes.ParentsBySchoolIDQuery
>;
export const getStudent = /* GraphQL */ `query GetStudent($id: ID!) {
  getStudent(id: $id) {
    id
    name
    firstName
    lastName
    dateOfBirth
    gender
    studentID
    classID
    schoolID
    class {
      id
      name
      schoolID
      teacherID
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    school {
      id
      name
      subdomain
      status
      logoURL
      heroImageURL
      address
      contactEmail
      phone
      website
      description
      schoolAdmin
      admins
      tempUpdateField
      createdAt
      updatedAt
      __typename
    }
    parentStudents {
      nextToken
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
    medicalInfo
    specialNeeds
    dietaryRestrictions
    userID
    owner
    admins
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
      firstName
      lastName
      dateOfBirth
      gender
      studentID
      classID
      schoolID
      medicalInfo
      specialNeeds
      dietaryRestrictions
      userID
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
  APITypes.ListStudentsQueryVariables,
  APITypes.ListStudentsQuery
>;
export const studentsByStudentID = /* GraphQL */ `query StudentsByStudentID(
  $studentID: String!
  $sortDirection: ModelSortDirection
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  studentsByStudentID(
    studentID: $studentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      firstName
      lastName
      dateOfBirth
      gender
      studentID
      classID
      schoolID
      medicalInfo
      specialNeeds
      dietaryRestrictions
      userID
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
  APITypes.StudentsByStudentIDQueryVariables,
  APITypes.StudentsByStudentIDQuery
>;
export const studentsByClassID = /* GraphQL */ `query StudentsByClassID(
  $classID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  studentsByClassID(
    classID: $classID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      firstName
      lastName
      dateOfBirth
      gender
      studentID
      classID
      schoolID
      medicalInfo
      specialNeeds
      dietaryRestrictions
      userID
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
  APITypes.StudentsByClassIDQueryVariables,
  APITypes.StudentsByClassIDQuery
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
      name
      firstName
      lastName
      dateOfBirth
      gender
      studentID
      classID
      schoolID
      medicalInfo
      specialNeeds
      dietaryRestrictions
      userID
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
  APITypes.StudentsBySchoolIDQueryVariables,
  APITypes.StudentsBySchoolIDQuery
>;
export const getParentStudent = /* GraphQL */ `query GetParentStudent($id: ID!) {
  getParentStudent(id: $id) {
    id
    parentID
    studentID
    parent {
      id
      firstName
      lastName
      email
      phone
      alternatePhone
      address
      occupation
      employer
      relationshipType
      userID
      schoolID
      isEmergencyContact
      emergencyContactPriority
      schoolAdmins
      createdAt
      updatedAt
      __typename
    }
    student {
      id
      name
      firstName
      lastName
      dateOfBirth
      gender
      studentID
      classID
      schoolID
      medicalInfo
      specialNeeds
      dietaryRestrictions
      userID
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    relationship
    isPrimaryContact
    hasPickupRights
    hasAccessToGrades
    hasAccessToAttendance
    legalCustody
    custodyNotes
    courtOrderDocument
    schoolAdmins
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetParentStudentQueryVariables,
  APITypes.GetParentStudentQuery
>;
export const listParentStudents = /* GraphQL */ `query ListParentStudents(
  $filter: ModelParentStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  listParentStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      parentID
      studentID
      relationship
      isPrimaryContact
      hasPickupRights
      hasAccessToGrades
      hasAccessToAttendance
      legalCustody
      custodyNotes
      courtOrderDocument
      schoolAdmins
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListParentStudentsQueryVariables,
  APITypes.ListParentStudentsQuery
>;
export const parentStudentsByParentID = /* GraphQL */ `query ParentStudentsByParentID(
  $parentID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelParentStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  parentStudentsByParentID(
    parentID: $parentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentID
      studentID
      relationship
      isPrimaryContact
      hasPickupRights
      hasAccessToGrades
      hasAccessToAttendance
      legalCustody
      custodyNotes
      courtOrderDocument
      schoolAdmins
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ParentStudentsByParentIDQueryVariables,
  APITypes.ParentStudentsByParentIDQuery
>;
export const parentStudentsByStudentID = /* GraphQL */ `query ParentStudentsByStudentID(
  $studentID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelParentStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  parentStudentsByStudentID(
    studentID: $studentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentID
      studentID
      relationship
      isPrimaryContact
      hasPickupRights
      hasAccessToGrades
      hasAccessToAttendance
      legalCustody
      custodyNotes
      courtOrderDocument
      schoolAdmins
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ParentStudentsByStudentIDQueryVariables,
  APITypes.ParentStudentsByStudentIDQuery
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
      subdomain
      status
      logoURL
      heroImageURL
      address
      contactEmail
      phone
      website
      description
      schoolAdmin
      admins
      tempUpdateField
      createdAt
      updatedAt
      __typename
    }
    preferredLanguage
    notificationPreferences
    owner
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
      preferredLanguage
      notificationPreferences
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const usersByEmail = /* GraphQL */ `query UsersByEmail(
  $email: AWSEmail!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      name
      role
      schoolID
      preferredLanguage
      notificationPreferences
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByEmailQueryVariables,
  APITypes.UsersByEmailQuery
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
      email
      name
      role
      schoolID
      preferredLanguage
      notificationPreferences
      owner
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
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    assessments {
      nextToken
      __typename
    }
    owner
    admins
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
  APITypes.ListSubjectsQueryVariables,
  APITypes.ListSubjectsQuery
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
      classID
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
  APITypes.SubjectsByClassIDQueryVariables,
  APITypes.SubjectsByClassIDQuery
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
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    subjectID
    subject {
      id
      name
      classID
      owner
      admins
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
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    grades {
      nextToken
      __typename
    }
    owner
    admins
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
  APITypes.ListAssessmentsQueryVariables,
  APITypes.ListAssessmentsQuery
>;
export const assessmentsByClassID = /* GraphQL */ `query AssessmentsByClassID(
  $classID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAssessmentFilterInput
  $limit: Int
  $nextToken: String
) {
  assessmentsByClassID(
    classID: $classID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      assessmentDate
      classID
      subjectID
      termID
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
  APITypes.AssessmentsByClassIDQueryVariables,
  APITypes.AssessmentsByClassIDQuery
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
      classID
      subjectID
      termID
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
  APITypes.AssessmentsBySubjectIDQueryVariables,
  APITypes.AssessmentsBySubjectIDQuery
>;
export const assessmentsByTermID = /* GraphQL */ `query AssessmentsByTermID(
  $termID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAssessmentFilterInput
  $limit: Int
  $nextToken: String
) {
  assessmentsByTermID(
    termID: $termID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      assessmentDate
      classID
      subjectID
      termID
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
  APITypes.AssessmentsByTermIDQueryVariables,
  APITypes.AssessmentsByTermIDQuery
>;
export const getGrade = /* GraphQL */ `query GetGrade($id: ID!) {
  getGrade(id: $id) {
    id
    studentID
    student {
      id
      name
      firstName
      lastName
      dateOfBirth
      gender
      studentID
      classID
      schoolID
      medicalInfo
      specialNeeds
      dietaryRestrictions
      userID
      owner
      admins
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
      owner
      admins
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
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    owner
    admins
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
  APITypes.ListGradesQueryVariables,
  APITypes.ListGradesQuery
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
      classID
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
      classID
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
  APITypes.GradesByAssessmentIDQueryVariables,
  APITypes.GradesByAssessmentIDQuery
>;
export const gradesByClassID = /* GraphQL */ `query GradesByClassID(
  $classID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGradeFilterInput
  $limit: Int
  $nextToken: String
) {
  gradesByClassID(
    classID: $classID
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
      classID
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
  APITypes.GradesByClassIDQueryVariables,
  APITypes.GradesByClassIDQuery
>;
export const getAttendance = /* GraphQL */ `query GetAttendance($id: ID!) {
  getAttendance(id: $id) {
    id
    studentID
    classID
    date
    status
    checkInTime
    checkOutTime
    notes
    student {
      id
      name
      firstName
      lastName
      dateOfBirth
      gender
      studentID
      classID
      schoolID
      medicalInfo
      specialNeeds
      dietaryRestrictions
      userID
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    class {
      id
      name
      schoolID
      teacherID
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    owner
    admins
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
      checkInTime
      checkOutTime
      notes
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
  APITypes.ListAttendancesQueryVariables,
  APITypes.ListAttendancesQuery
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
      checkInTime
      checkOutTime
      notes
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
      checkInTime
      checkOutTime
      notes
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
  APITypes.AttendancesByClassIDQueryVariables,
  APITypes.AttendancesByClassIDQuery
>;
export const getAnnouncement = /* GraphQL */ `query GetAnnouncement($id: ID!) {
  getAnnouncement(id: $id) {
    id
    title
    message
    audience
    targetID
    priority
    createdBy
    schoolID
    school {
      id
      name
      subdomain
      status
      logoURL
      heroImageURL
      address
      contactEmail
      phone
      website
      description
      schoolAdmin
      admins
      tempUpdateField
      createdAt
      updatedAt
      __typename
    }
    classID
    class {
      id
      name
      schoolID
      teacherID
      owner
      admins
      createdAt
      updatedAt
      __typename
    }
    viewCount
    acknowledgedBy
    publishDate
    expiryDate
    admins
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
      priority
      createdBy
      schoolID
      classID
      viewCount
      acknowledgedBy
      publishDate
      expiryDate
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
  APITypes.ListAnnouncementsQueryVariables,
  APITypes.ListAnnouncementsQuery
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
      message
      audience
      targetID
      priority
      createdBy
      schoolID
      classID
      viewCount
      acknowledgedBy
      publishDate
      expiryDate
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
  APITypes.AnnouncementsBySchoolIDQueryVariables,
  APITypes.AnnouncementsBySchoolIDQuery
>;
export const announcementsByClassID = /* GraphQL */ `query AnnouncementsByClassID(
  $classID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  announcementsByClassID(
    classID: $classID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      message
      audience
      targetID
      priority
      createdBy
      schoolID
      classID
      viewCount
      acknowledgedBy
      publishDate
      expiryDate
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
  APITypes.AnnouncementsByClassIDQueryVariables,
  APITypes.AnnouncementsByClassIDQuery
>;
