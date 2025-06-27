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
  $owner: String
) {
  onCreateSchool(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSchoolSubscriptionVariables,
  APITypes.OnCreateSchoolSubscription
>;
export const onUpdateSchool = /* GraphQL */ `subscription OnUpdateSchool(
  $filter: ModelSubscriptionSchoolFilterInput
  $owner: String
) {
  onUpdateSchool(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSchoolSubscriptionVariables,
  APITypes.OnUpdateSchoolSubscription
>;
export const onDeleteSchool = /* GraphQL */ `subscription OnDeleteSchool(
  $filter: ModelSubscriptionSchoolFilterInput
  $owner: String
) {
  onDeleteSchool(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSchoolSubscriptionVariables,
  APITypes.OnDeleteSchoolSubscription
>;
export const onCreateAcademicYear = /* GraphQL */ `subscription OnCreateAcademicYear(
  $filter: ModelSubscriptionAcademicYearFilterInput
) {
  onCreateAcademicYear(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAcademicYearSubscriptionVariables,
  APITypes.OnCreateAcademicYearSubscription
>;
export const onUpdateAcademicYear = /* GraphQL */ `subscription OnUpdateAcademicYear(
  $filter: ModelSubscriptionAcademicYearFilterInput
) {
  onUpdateAcademicYear(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAcademicYearSubscriptionVariables,
  APITypes.OnUpdateAcademicYearSubscription
>;
export const onDeleteAcademicYear = /* GraphQL */ `subscription OnDeleteAcademicYear(
  $filter: ModelSubscriptionAcademicYearFilterInput
) {
  onDeleteAcademicYear(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAcademicYearSubscriptionVariables,
  APITypes.OnDeleteAcademicYearSubscription
>;
export const onCreateTerm = /* GraphQL */ `subscription OnCreateTerm($filter: ModelSubscriptionTermFilterInput) {
  onCreateTerm(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTermSubscriptionVariables,
  APITypes.OnCreateTermSubscription
>;
export const onUpdateTerm = /* GraphQL */ `subscription OnUpdateTerm($filter: ModelSubscriptionTermFilterInput) {
  onUpdateTerm(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTermSubscriptionVariables,
  APITypes.OnUpdateTermSubscription
>;
export const onDeleteTerm = /* GraphQL */ `subscription OnDeleteTerm($filter: ModelSubscriptionTermFilterInput) {
  onDeleteTerm(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTermSubscriptionVariables,
  APITypes.OnDeleteTermSubscription
>;
export const onCreateStudent = /* GraphQL */ `subscription OnCreateStudent(
  $filter: ModelSubscriptionStudentFilterInput
  $id: String
) {
  onCreateStudent(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStudentSubscriptionVariables,
  APITypes.OnCreateStudentSubscription
>;
export const onUpdateStudent = /* GraphQL */ `subscription OnUpdateStudent(
  $filter: ModelSubscriptionStudentFilterInput
  $id: String
) {
  onUpdateStudent(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStudentSubscriptionVariables,
  APITypes.OnUpdateStudentSubscription
>;
export const onDeleteStudent = /* GraphQL */ `subscription OnDeleteStudent(
  $filter: ModelSubscriptionStudentFilterInput
  $id: String
) {
  onDeleteStudent(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStudentSubscriptionVariables,
  APITypes.OnDeleteStudentSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onCreateUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onUpdateUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $id: String
) {
  onDeleteUser(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateSubject = /* GraphQL */ `subscription OnCreateSubject($filter: ModelSubscriptionSubjectFilterInput) {
  onCreateSubject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSubjectSubscriptionVariables,
  APITypes.OnCreateSubjectSubscription
>;
export const onUpdateSubject = /* GraphQL */ `subscription OnUpdateSubject($filter: ModelSubscriptionSubjectFilterInput) {
  onUpdateSubject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSubjectSubscriptionVariables,
  APITypes.OnUpdateSubjectSubscription
>;
export const onDeleteSubject = /* GraphQL */ `subscription OnDeleteSubject($filter: ModelSubscriptionSubjectFilterInput) {
  onDeleteSubject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSubjectSubscriptionVariables,
  APITypes.OnDeleteSubjectSubscription
>;
export const onCreateAssessment = /* GraphQL */ `subscription OnCreateAssessment(
  $filter: ModelSubscriptionAssessmentFilterInput
) {
  onCreateAssessment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAssessmentSubscriptionVariables,
  APITypes.OnCreateAssessmentSubscription
>;
export const onUpdateAssessment = /* GraphQL */ `subscription OnUpdateAssessment(
  $filter: ModelSubscriptionAssessmentFilterInput
) {
  onUpdateAssessment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAssessmentSubscriptionVariables,
  APITypes.OnUpdateAssessmentSubscription
>;
export const onDeleteAssessment = /* GraphQL */ `subscription OnDeleteAssessment(
  $filter: ModelSubscriptionAssessmentFilterInput
) {
  onDeleteAssessment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAssessmentSubscriptionVariables,
  APITypes.OnDeleteAssessmentSubscription
>;
export const onCreateGrade = /* GraphQL */ `subscription OnCreateGrade(
  $filter: ModelSubscriptionGradeFilterInput
  $studentID: String
) {
  onCreateGrade(filter: $filter, studentID: $studentID) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGradeSubscriptionVariables,
  APITypes.OnCreateGradeSubscription
>;
export const onUpdateGrade = /* GraphQL */ `subscription OnUpdateGrade(
  $filter: ModelSubscriptionGradeFilterInput
  $studentID: String
) {
  onUpdateGrade(filter: $filter, studentID: $studentID) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGradeSubscriptionVariables,
  APITypes.OnUpdateGradeSubscription
>;
export const onDeleteGrade = /* GraphQL */ `subscription OnDeleteGrade(
  $filter: ModelSubscriptionGradeFilterInput
  $studentID: String
) {
  onDeleteGrade(filter: $filter, studentID: $studentID) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGradeSubscriptionVariables,
  APITypes.OnDeleteGradeSubscription
>;
export const onCreateAttendance = /* GraphQL */ `subscription OnCreateAttendance(
  $filter: ModelSubscriptionAttendanceFilterInput
  $studentID: String
) {
  onCreateAttendance(filter: $filter, studentID: $studentID) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAttendanceSubscriptionVariables,
  APITypes.OnCreateAttendanceSubscription
>;
export const onUpdateAttendance = /* GraphQL */ `subscription OnUpdateAttendance(
  $filter: ModelSubscriptionAttendanceFilterInput
  $studentID: String
) {
  onUpdateAttendance(filter: $filter, studentID: $studentID) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAttendanceSubscriptionVariables,
  APITypes.OnUpdateAttendanceSubscription
>;
export const onDeleteAttendance = /* GraphQL */ `subscription OnDeleteAttendance(
  $filter: ModelSubscriptionAttendanceFilterInput
  $studentID: String
) {
  onDeleteAttendance(filter: $filter, studentID: $studentID) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAttendanceSubscriptionVariables,
  APITypes.OnDeleteAttendanceSubscription
>;
export const onCreateAnnouncement = /* GraphQL */ `subscription OnCreateAnnouncement(
  $filter: ModelSubscriptionAnnouncementFilterInput
) {
  onCreateAnnouncement(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAnnouncementSubscriptionVariables,
  APITypes.OnCreateAnnouncementSubscription
>;
export const onUpdateAnnouncement = /* GraphQL */ `subscription OnUpdateAnnouncement(
  $filter: ModelSubscriptionAnnouncementFilterInput
) {
  onUpdateAnnouncement(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAnnouncementSubscriptionVariables,
  APITypes.OnUpdateAnnouncementSubscription
>;
export const onDeleteAnnouncement = /* GraphQL */ `subscription OnDeleteAnnouncement(
  $filter: ModelSubscriptionAnnouncementFilterInput
) {
  onDeleteAnnouncement(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAnnouncementSubscriptionVariables,
  APITypes.OnDeleteAnnouncementSubscription
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
` as GeneratedSubscription<
  APITypes.OnDeleteClassSubscriptionVariables,
  APITypes.OnDeleteClassSubscription
>;
