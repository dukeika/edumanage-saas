/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSchool = /* GraphQL */ `subscription OnCreateSchool(
  $filter: ModelSubscriptionSchoolFilterInput
  $schoolAdmin: String
) {
  onCreateSchool(filter: $filter, schoolAdmin: $schoolAdmin) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSchoolSubscriptionVariables,
  APITypes.OnCreateSchoolSubscription
>;
export const onUpdateSchool = /* GraphQL */ `subscription OnUpdateSchool(
  $filter: ModelSubscriptionSchoolFilterInput
  $schoolAdmin: String
) {
  onUpdateSchool(filter: $filter, schoolAdmin: $schoolAdmin) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSchoolSubscriptionVariables,
  APITypes.OnUpdateSchoolSubscription
>;
export const onDeleteSchool = /* GraphQL */ `subscription OnDeleteSchool(
  $filter: ModelSubscriptionSchoolFilterInput
  $schoolAdmin: String
) {
  onDeleteSchool(filter: $filter, schoolAdmin: $schoolAdmin) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSchoolSubscriptionVariables,
  APITypes.OnDeleteSchoolSubscription
>;
export const onCreateAcademicYear = /* GraphQL */ `subscription OnCreateAcademicYear(
  $filter: ModelSubscriptionAcademicYearFilterInput
  $owner: String
) {
  onCreateAcademicYear(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAcademicYearSubscriptionVariables,
  APITypes.OnCreateAcademicYearSubscription
>;
export const onUpdateAcademicYear = /* GraphQL */ `subscription OnUpdateAcademicYear(
  $filter: ModelSubscriptionAcademicYearFilterInput
  $owner: String
) {
  onUpdateAcademicYear(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAcademicYearSubscriptionVariables,
  APITypes.OnUpdateAcademicYearSubscription
>;
export const onDeleteAcademicYear = /* GraphQL */ `subscription OnDeleteAcademicYear(
  $filter: ModelSubscriptionAcademicYearFilterInput
  $owner: String
) {
  onDeleteAcademicYear(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAcademicYearSubscriptionVariables,
  APITypes.OnDeleteAcademicYearSubscription
>;
export const onCreateTerm = /* GraphQL */ `subscription OnCreateTerm(
  $filter: ModelSubscriptionTermFilterInput
  $owner: String
) {
  onCreateTerm(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTermSubscriptionVariables,
  APITypes.OnCreateTermSubscription
>;
export const onUpdateTerm = /* GraphQL */ `subscription OnUpdateTerm(
  $filter: ModelSubscriptionTermFilterInput
  $owner: String
) {
  onUpdateTerm(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTermSubscriptionVariables,
  APITypes.OnUpdateTermSubscription
>;
export const onDeleteTerm = /* GraphQL */ `subscription OnDeleteTerm(
  $filter: ModelSubscriptionTermFilterInput
  $owner: String
) {
  onDeleteTerm(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTermSubscriptionVariables,
  APITypes.OnDeleteTermSubscription
>;
export const onCreateClass = /* GraphQL */ `subscription OnCreateClass(
  $filter: ModelSubscriptionClassFilterInput
  $owner: String
) {
  onCreateClass(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateClassSubscriptionVariables,
  APITypes.OnCreateClassSubscription
>;
export const onUpdateClass = /* GraphQL */ `subscription OnUpdateClass(
  $filter: ModelSubscriptionClassFilterInput
  $owner: String
) {
  onUpdateClass(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateClassSubscriptionVariables,
  APITypes.OnUpdateClassSubscription
>;
export const onDeleteClass = /* GraphQL */ `subscription OnDeleteClass(
  $filter: ModelSubscriptionClassFilterInput
  $owner: String
) {
  onDeleteClass(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteClassSubscriptionVariables,
  APITypes.OnDeleteClassSubscription
>;
export const onCreateParent = /* GraphQL */ `subscription OnCreateParent(
  $filter: ModelSubscriptionParentFilterInput
  $userID: String
) {
  onCreateParent(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnCreateParentSubscriptionVariables,
  APITypes.OnCreateParentSubscription
>;
export const onUpdateParent = /* GraphQL */ `subscription OnUpdateParent(
  $filter: ModelSubscriptionParentFilterInput
  $userID: String
) {
  onUpdateParent(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateParentSubscriptionVariables,
  APITypes.OnUpdateParentSubscription
>;
export const onDeleteParent = /* GraphQL */ `subscription OnDeleteParent(
  $filter: ModelSubscriptionParentFilterInput
  $userID: String
) {
  onDeleteParent(filter: $filter, userID: $userID) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteParentSubscriptionVariables,
  APITypes.OnDeleteParentSubscription
>;
export const onCreateStudent = /* GraphQL */ `subscription OnCreateStudent(
  $filter: ModelSubscriptionStudentFilterInput
  $owner: String
) {
  onCreateStudent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStudentSubscriptionVariables,
  APITypes.OnCreateStudentSubscription
>;
export const onUpdateStudent = /* GraphQL */ `subscription OnUpdateStudent(
  $filter: ModelSubscriptionStudentFilterInput
  $owner: String
) {
  onUpdateStudent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStudentSubscriptionVariables,
  APITypes.OnUpdateStudentSubscription
>;
export const onDeleteStudent = /* GraphQL */ `subscription OnDeleteStudent(
  $filter: ModelSubscriptionStudentFilterInput
  $owner: String
) {
  onDeleteStudent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStudentSubscriptionVariables,
  APITypes.OnDeleteStudentSubscription
>;
export const onCreateParentStudent = /* GraphQL */ `subscription OnCreateParentStudent(
  $filter: ModelSubscriptionParentStudentFilterInput
) {
  onCreateParentStudent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateParentStudentSubscriptionVariables,
  APITypes.OnCreateParentStudentSubscription
>;
export const onUpdateParentStudent = /* GraphQL */ `subscription OnUpdateParentStudent(
  $filter: ModelSubscriptionParentStudentFilterInput
) {
  onUpdateParentStudent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateParentStudentSubscriptionVariables,
  APITypes.OnUpdateParentStudentSubscription
>;
export const onDeleteParentStudent = /* GraphQL */ `subscription OnDeleteParentStudent(
  $filter: ModelSubscriptionParentStudentFilterInput
) {
  onDeleteParentStudent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteParentStudentSubscriptionVariables,
  APITypes.OnDeleteParentStudentSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateSubject = /* GraphQL */ `subscription OnCreateSubject(
  $filter: ModelSubscriptionSubjectFilterInput
  $owner: String
) {
  onCreateSubject(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSubjectSubscriptionVariables,
  APITypes.OnCreateSubjectSubscription
>;
export const onUpdateSubject = /* GraphQL */ `subscription OnUpdateSubject(
  $filter: ModelSubscriptionSubjectFilterInput
  $owner: String
) {
  onUpdateSubject(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSubjectSubscriptionVariables,
  APITypes.OnUpdateSubjectSubscription
>;
export const onDeleteSubject = /* GraphQL */ `subscription OnDeleteSubject(
  $filter: ModelSubscriptionSubjectFilterInput
  $owner: String
) {
  onDeleteSubject(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSubjectSubscriptionVariables,
  APITypes.OnDeleteSubjectSubscription
>;
export const onCreateAssessment = /* GraphQL */ `subscription OnCreateAssessment(
  $filter: ModelSubscriptionAssessmentFilterInput
  $owner: String
) {
  onCreateAssessment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAssessmentSubscriptionVariables,
  APITypes.OnCreateAssessmentSubscription
>;
export const onUpdateAssessment = /* GraphQL */ `subscription OnUpdateAssessment(
  $filter: ModelSubscriptionAssessmentFilterInput
  $owner: String
) {
  onUpdateAssessment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAssessmentSubscriptionVariables,
  APITypes.OnUpdateAssessmentSubscription
>;
export const onDeleteAssessment = /* GraphQL */ `subscription OnDeleteAssessment(
  $filter: ModelSubscriptionAssessmentFilterInput
  $owner: String
) {
  onDeleteAssessment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAssessmentSubscriptionVariables,
  APITypes.OnDeleteAssessmentSubscription
>;
export const onCreateGrade = /* GraphQL */ `subscription OnCreateGrade(
  $filter: ModelSubscriptionGradeFilterInput
  $owner: String
) {
  onCreateGrade(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGradeSubscriptionVariables,
  APITypes.OnCreateGradeSubscription
>;
export const onUpdateGrade = /* GraphQL */ `subscription OnUpdateGrade(
  $filter: ModelSubscriptionGradeFilterInput
  $owner: String
) {
  onUpdateGrade(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGradeSubscriptionVariables,
  APITypes.OnUpdateGradeSubscription
>;
export const onDeleteGrade = /* GraphQL */ `subscription OnDeleteGrade(
  $filter: ModelSubscriptionGradeFilterInput
  $owner: String
) {
  onDeleteGrade(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGradeSubscriptionVariables,
  APITypes.OnDeleteGradeSubscription
>;
export const onCreateAttendance = /* GraphQL */ `subscription OnCreateAttendance(
  $filter: ModelSubscriptionAttendanceFilterInput
  $owner: String
) {
  onCreateAttendance(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAttendanceSubscriptionVariables,
  APITypes.OnCreateAttendanceSubscription
>;
export const onUpdateAttendance = /* GraphQL */ `subscription OnUpdateAttendance(
  $filter: ModelSubscriptionAttendanceFilterInput
  $owner: String
) {
  onUpdateAttendance(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAttendanceSubscriptionVariables,
  APITypes.OnUpdateAttendanceSubscription
>;
export const onDeleteAttendance = /* GraphQL */ `subscription OnDeleteAttendance(
  $filter: ModelSubscriptionAttendanceFilterInput
  $owner: String
) {
  onDeleteAttendance(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAttendanceSubscriptionVariables,
  APITypes.OnDeleteAttendanceSubscription
>;
export const onCreateAnnouncement = /* GraphQL */ `subscription OnCreateAnnouncement(
  $filter: ModelSubscriptionAnnouncementFilterInput
  $createdBy: String
) {
  onCreateAnnouncement(filter: $filter, createdBy: $createdBy) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAnnouncementSubscriptionVariables,
  APITypes.OnCreateAnnouncementSubscription
>;
export const onUpdateAnnouncement = /* GraphQL */ `subscription OnUpdateAnnouncement(
  $filter: ModelSubscriptionAnnouncementFilterInput
  $createdBy: String
) {
  onUpdateAnnouncement(filter: $filter, createdBy: $createdBy) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAnnouncementSubscriptionVariables,
  APITypes.OnUpdateAnnouncementSubscription
>;
export const onDeleteAnnouncement = /* GraphQL */ `subscription OnDeleteAnnouncement(
  $filter: ModelSubscriptionAnnouncementFilterInput
  $createdBy: String
) {
  onDeleteAnnouncement(filter: $filter, createdBy: $createdBy) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAnnouncementSubscriptionVariables,
  APITypes.OnDeleteAnnouncementSubscription
>;
