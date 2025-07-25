/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createSchool = /* GraphQL */ `mutation CreateSchool(
  $input: CreateSchoolInput!
  $condition: ModelSchoolConditionInput
) {
  createSchool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSchoolMutationVariables,
  APITypes.CreateSchoolMutation
>;
export const updateSchool = /* GraphQL */ `mutation UpdateSchool(
  $input: UpdateSchoolInput!
  $condition: ModelSchoolConditionInput
) {
  updateSchool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSchoolMutationVariables,
  APITypes.UpdateSchoolMutation
>;
export const deleteSchool = /* GraphQL */ `mutation DeleteSchool(
  $input: DeleteSchoolInput!
  $condition: ModelSchoolConditionInput
) {
  deleteSchool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSchoolMutationVariables,
  APITypes.DeleteSchoolMutation
>;
export const createAcademicYear = /* GraphQL */ `mutation CreateAcademicYear(
  $input: CreateAcademicYearInput!
  $condition: ModelAcademicYearConditionInput
) {
  createAcademicYear(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAcademicYearMutationVariables,
  APITypes.CreateAcademicYearMutation
>;
export const updateAcademicYear = /* GraphQL */ `mutation UpdateAcademicYear(
  $input: UpdateAcademicYearInput!
  $condition: ModelAcademicYearConditionInput
) {
  updateAcademicYear(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAcademicYearMutationVariables,
  APITypes.UpdateAcademicYearMutation
>;
export const deleteAcademicYear = /* GraphQL */ `mutation DeleteAcademicYear(
  $input: DeleteAcademicYearInput!
  $condition: ModelAcademicYearConditionInput
) {
  deleteAcademicYear(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAcademicYearMutationVariables,
  APITypes.DeleteAcademicYearMutation
>;
export const createTerm = /* GraphQL */ `mutation CreateTerm(
  $input: CreateTermInput!
  $condition: ModelTermConditionInput
) {
  createTerm(input: $input, condition: $condition) {
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
      owner
      __typename
    }
    assessments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTermMutationVariables,
  APITypes.CreateTermMutation
>;
export const updateTerm = /* GraphQL */ `mutation UpdateTerm(
  $input: UpdateTermInput!
  $condition: ModelTermConditionInput
) {
  updateTerm(input: $input, condition: $condition) {
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
      owner
      __typename
    }
    assessments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTermMutationVariables,
  APITypes.UpdateTermMutation
>;
export const deleteTerm = /* GraphQL */ `mutation DeleteTerm(
  $input: DeleteTermInput!
  $condition: ModelTermConditionInput
) {
  deleteTerm(input: $input, condition: $condition) {
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
      owner
      __typename
    }
    assessments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTermMutationVariables,
  APITypes.DeleteTermMutation
>;
export const createClass = /* GraphQL */ `mutation CreateClass(
  $input: CreateClassInput!
  $condition: ModelClassConditionInput
) {
  createClass(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateClassMutationVariables,
  APITypes.CreateClassMutation
>;
export const updateClass = /* GraphQL */ `mutation UpdateClass(
  $input: UpdateClassInput!
  $condition: ModelClassConditionInput
) {
  updateClass(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateClassMutationVariables,
  APITypes.UpdateClassMutation
>;
export const deleteClass = /* GraphQL */ `mutation DeleteClass(
  $input: DeleteClassInput!
  $condition: ModelClassConditionInput
) {
  deleteClass(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteClassMutationVariables,
  APITypes.DeleteClassMutation
>;
export const createStudent = /* GraphQL */ `mutation CreateStudent(
  $input: CreateStudentInput!
  $condition: ModelStudentConditionInput
) {
  createStudent(input: $input, condition: $condition) {
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStudentMutationVariables,
  APITypes.CreateStudentMutation
>;
export const updateStudent = /* GraphQL */ `mutation UpdateStudent(
  $input: UpdateStudentInput!
  $condition: ModelStudentConditionInput
) {
  updateStudent(input: $input, condition: $condition) {
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStudentMutationVariables,
  APITypes.UpdateStudentMutation
>;
export const deleteStudent = /* GraphQL */ `mutation DeleteStudent(
  $input: DeleteStudentInput!
  $condition: ModelStudentConditionInput
) {
  deleteStudent(input: $input, condition: $condition) {
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStudentMutationVariables,
  APITypes.DeleteStudentMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createSubject = /* GraphQL */ `mutation CreateSubject(
  $input: CreateSubjectInput!
  $condition: ModelSubjectConditionInput
) {
  createSubject(input: $input, condition: $condition) {
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSubjectMutationVariables,
  APITypes.CreateSubjectMutation
>;
export const updateSubject = /* GraphQL */ `mutation UpdateSubject(
  $input: UpdateSubjectInput!
  $condition: ModelSubjectConditionInput
) {
  updateSubject(input: $input, condition: $condition) {
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSubjectMutationVariables,
  APITypes.UpdateSubjectMutation
>;
export const deleteSubject = /* GraphQL */ `mutation DeleteSubject(
  $input: DeleteSubjectInput!
  $condition: ModelSubjectConditionInput
) {
  deleteSubject(input: $input, condition: $condition) {
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSubjectMutationVariables,
  APITypes.DeleteSubjectMutation
>;
export const createAssessment = /* GraphQL */ `mutation CreateAssessment(
  $input: CreateAssessmentInput!
  $condition: ModelAssessmentConditionInput
) {
  createAssessment(input: $input, condition: $condition) {
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
      owner
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
      owner
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
` as GeneratedMutation<
  APITypes.CreateAssessmentMutationVariables,
  APITypes.CreateAssessmentMutation
>;
export const updateAssessment = /* GraphQL */ `mutation UpdateAssessment(
  $input: UpdateAssessmentInput!
  $condition: ModelAssessmentConditionInput
) {
  updateAssessment(input: $input, condition: $condition) {
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
      owner
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
      owner
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
` as GeneratedMutation<
  APITypes.UpdateAssessmentMutationVariables,
  APITypes.UpdateAssessmentMutation
>;
export const deleteAssessment = /* GraphQL */ `mutation DeleteAssessment(
  $input: DeleteAssessmentInput!
  $condition: ModelAssessmentConditionInput
) {
  deleteAssessment(input: $input, condition: $condition) {
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
      owner
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
      owner
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
` as GeneratedMutation<
  APITypes.DeleteAssessmentMutationVariables,
  APITypes.DeleteAssessmentMutation
>;
export const createGrade = /* GraphQL */ `mutation CreateGrade(
  $input: CreateGradeInput!
  $condition: ModelGradeConditionInput
) {
  createGrade(input: $input, condition: $condition) {
    id
    studentID
    student {
      id
      name
      classID
      schoolID
      createdAt
      updatedAt
      owner
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
      owner
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGradeMutationVariables,
  APITypes.CreateGradeMutation
>;
export const updateGrade = /* GraphQL */ `mutation UpdateGrade(
  $input: UpdateGradeInput!
  $condition: ModelGradeConditionInput
) {
  updateGrade(input: $input, condition: $condition) {
    id
    studentID
    student {
      id
      name
      classID
      schoolID
      createdAt
      updatedAt
      owner
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
      owner
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGradeMutationVariables,
  APITypes.UpdateGradeMutation
>;
export const deleteGrade = /* GraphQL */ `mutation DeleteGrade(
  $input: DeleteGradeInput!
  $condition: ModelGradeConditionInput
) {
  deleteGrade(input: $input, condition: $condition) {
    id
    studentID
    student {
      id
      name
      classID
      schoolID
      createdAt
      updatedAt
      owner
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
      owner
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGradeMutationVariables,
  APITypes.DeleteGradeMutation
>;
export const createAttendance = /* GraphQL */ `mutation CreateAttendance(
  $input: CreateAttendanceInput!
  $condition: ModelAttendanceConditionInput
) {
  createAttendance(input: $input, condition: $condition) {
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
      owner
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAttendanceMutationVariables,
  APITypes.CreateAttendanceMutation
>;
export const updateAttendance = /* GraphQL */ `mutation UpdateAttendance(
  $input: UpdateAttendanceInput!
  $condition: ModelAttendanceConditionInput
) {
  updateAttendance(input: $input, condition: $condition) {
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
      owner
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAttendanceMutationVariables,
  APITypes.UpdateAttendanceMutation
>;
export const deleteAttendance = /* GraphQL */ `mutation DeleteAttendance(
  $input: DeleteAttendanceInput!
  $condition: ModelAttendanceConditionInput
) {
  deleteAttendance(input: $input, condition: $condition) {
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
      owner
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAttendanceMutationVariables,
  APITypes.DeleteAttendanceMutation
>;
export const createAnnouncement = /* GraphQL */ `mutation CreateAnnouncement(
  $input: CreateAnnouncementInput!
  $condition: ModelAnnouncementConditionInput
) {
  createAnnouncement(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateAnnouncementMutationVariables,
  APITypes.CreateAnnouncementMutation
>;
export const updateAnnouncement = /* GraphQL */ `mutation UpdateAnnouncement(
  $input: UpdateAnnouncementInput!
  $condition: ModelAnnouncementConditionInput
) {
  updateAnnouncement(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateAnnouncementMutationVariables,
  APITypes.UpdateAnnouncementMutation
>;
export const deleteAnnouncement = /* GraphQL */ `mutation DeleteAnnouncement(
  $input: DeleteAnnouncementInput!
  $condition: ModelAnnouncementConditionInput
) {
  deleteAnnouncement(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeleteAnnouncementMutationVariables,
  APITypes.DeleteAnnouncementMutation
>;
