/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSchoolInput = {
  id?: string | null,
  name: string,
  domain?: string | null,
};

export type School = {
  __typename: "School",
  id: string,
  name: string,
  domain?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type CreateClassInput = {
  id?: string | null,
  name: string,
  schoolID: string,
  termID: string,
};

export type Class = {
  __typename: "Class",
  id: string,
  name: string,
  schoolID: string,
  termID: string,
  createdAt: string,
  updatedAt: string,
};

export type CreateStudentInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  schoolID: string,
};

export type Student = {
  __typename: "Student",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  schoolID: string,
  createdAt: string,
  updatedAt: string,
};

export type CreateSubjectInput = {
  id?: string | null,
  name: string,
  schoolID: string,
  classID: string,
};

export type Subject = {
  __typename: "Subject",
  id: string,
  name: string,
  schoolID: string,
  classID: string,
  createdAt: string,
  updatedAt: string,
};

export type CreateAcademicYearInput = {
  id?: string | null,
  name: string,
  startDate: string,
  endDate?: string | null,
  schoolID: string,
};

export type AcademicYear = {
  __typename: "AcademicYear",
  id: string,
  name: string,
  startDate: string,
  endDate?: string | null,
  schoolID: string,
  createdAt: string,
  updatedAt: string,
};

export type CreateTermInput = {
  id?: string | null,
  name: string,
  startDate: string,
  endDate?: string | null,
  schoolID: string,
  academicYearID: string,
};

export type Term = {
  __typename: "Term",
  id: string,
  name: string,
  startDate: string,
  endDate?: string | null,
  schoolID: string,
  academicYearID: string,
  createdAt: string,
  updatedAt: string,
};

export type CreateAssessmentInput = {
  id?: string | null,
  title: string,
  assessmentDate: string,
  schoolID: string,
  subjectID: string,
  termID: string,
  classID: string,
  createdBy: string,
};

export type Assessment = {
  __typename: "Assessment",
  id: string,
  title: string,
  assessmentDate: string,
  schoolID: string,
  subjectID: string,
  termID: string,
  classID: string,
  createdBy: string,
  createdAt: string,
  updatedAt: string,
};

export type CreateGradeInput = {
  id?: string | null,
  studentID: string,
  assessmentID: string,
  score: number,
  comments?: string | null,
  schoolID: string,
};

export type Grade = {
  __typename: "Grade",
  id: string,
  studentID: string,
  assessmentID: string,
  score: number,
  comments?: string | null,
  schoolID: string,
  createdAt: string,
  updatedAt: string,
};

export type CreateAttendanceInput = {
  id?: string | null,
  studentID: string,
  classID: string,
  date: string,
  status: string,
  schoolID: string,
};

export type Attendance = {
  __typename: "Attendance",
  id: string,
  studentID: string,
  classID: string,
  date: string,
  status: string,
  schoolID: string,
  createdAt: string,
  updatedAt: string,
};

export type CreateAnnouncementInput = {
  id?: string | null,
  title: string,
  body: string,
  audience: AudienceType,
  createdBy: string,
  createdAt?: string | null,
  schoolID: string,
};

export enum AudienceType {
  CLASS = "CLASS",
  SCHOOL = "SCHOOL",
}


export type Announcement = {
  __typename: "Announcement",
  id: string,
  title: string,
  body: string,
  audience: AudienceType,
  createdBy: string,
  createdAt: string,
  schoolID: string,
  updatedAt: string,
};

export type ModelSchoolConditionInput = {
  name?: ModelStringInput | null,
  domain?: ModelStringInput | null,
  and?: Array< ModelSchoolConditionInput | null > | null,
  or?: Array< ModelSchoolConditionInput | null > | null,
  not?: ModelSchoolConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateSchoolInput = {
  id: string,
  name?: string | null,
  domain?: string | null,
};

export type DeleteSchoolInput = {
  id: string,
};

export type ModelAcademicYearConditionInput = {
  name?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  and?: Array< ModelAcademicYearConditionInput | null > | null,
  or?: Array< ModelAcademicYearConditionInput | null > | null,
  not?: ModelAcademicYearConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAcademicYearInput = {
  id: string,
  name?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  schoolID?: string | null,
};

export type DeleteAcademicYearInput = {
  id: string,
};

export type ModelTermConditionInput = {
  name?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  academicYearID?: ModelIDInput | null,
  and?: Array< ModelTermConditionInput | null > | null,
  or?: Array< ModelTermConditionInput | null > | null,
  not?: ModelTermConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTermInput = {
  id: string,
  name?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  schoolID?: string | null,
  academicYearID?: string | null,
};

export type DeleteTermInput = {
  id: string,
};

export type ModelClassConditionInput = {
  name?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  termID?: ModelIDInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateClassInput = {
  id: string,
  name?: string | null,
  schoolID?: string | null,
  termID?: string | null,
};

export type DeleteClassInput = {
  id: string,
};

export type ModelStudentConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateStudentInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  schoolID?: string | null,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  userRole: string,
  schoolID: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  userRole?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  userRole: string,
  schoolID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  userRole?: string | null,
  schoolID?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelSubjectConditionInput = {
  name?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelSubjectConditionInput | null > | null,
  or?: Array< ModelSubjectConditionInput | null > | null,
  not?: ModelSubjectConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateSubjectInput = {
  id: string,
  name?: string | null,
  schoolID?: string | null,
  classID?: string | null,
};

export type DeleteSubjectInput = {
  id: string,
};

export type ModelAssessmentConditionInput = {
  title?: ModelStringInput | null,
  assessmentDate?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  subjectID?: ModelIDInput | null,
  termID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  createdBy?: ModelIDInput | null,
  and?: Array< ModelAssessmentConditionInput | null > | null,
  or?: Array< ModelAssessmentConditionInput | null > | null,
  not?: ModelAssessmentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAssessmentInput = {
  id: string,
  title?: string | null,
  assessmentDate?: string | null,
  schoolID?: string | null,
  subjectID?: string | null,
  termID?: string | null,
  classID?: string | null,
  createdBy?: string | null,
};

export type DeleteAssessmentInput = {
  id: string,
};

export type ModelGradeConditionInput = {
  studentID?: ModelIDInput | null,
  assessmentID?: ModelIDInput | null,
  score?: ModelFloatInput | null,
  comments?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  and?: Array< ModelGradeConditionInput | null > | null,
  or?: Array< ModelGradeConditionInput | null > | null,
  not?: ModelGradeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateGradeInput = {
  id: string,
  studentID?: string | null,
  assessmentID?: string | null,
  score?: number | null,
  comments?: string | null,
  schoolID?: string | null,
};

export type DeleteGradeInput = {
  id: string,
};

export type ModelAttendanceConditionInput = {
  studentID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  status?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  and?: Array< ModelAttendanceConditionInput | null > | null,
  or?: Array< ModelAttendanceConditionInput | null > | null,
  not?: ModelAttendanceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAttendanceInput = {
  id: string,
  studentID?: string | null,
  classID?: string | null,
  date?: string | null,
  status?: string | null,
  schoolID?: string | null,
};

export type DeleteAttendanceInput = {
  id: string,
};

export type ModelAnnouncementConditionInput = {
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  audience?: ModelAudienceTypeInput | null,
  createdBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  and?: Array< ModelAnnouncementConditionInput | null > | null,
  or?: Array< ModelAnnouncementConditionInput | null > | null,
  not?: ModelAnnouncementConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelAudienceTypeInput = {
  eq?: AudienceType | null,
  ne?: AudienceType | null,
};

export type UpdateAnnouncementInput = {
  id: string,
  title?: string | null,
  body?: string | null,
  audience?: AudienceType | null,
  createdBy?: string | null,
  createdAt?: string | null,
  schoolID?: string | null,
};

export type DeleteAnnouncementInput = {
  id: string,
};

export type ModelSchoolFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  domain?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSchoolFilterInput | null > | null,
  or?: Array< ModelSchoolFilterInput | null > | null,
  not?: ModelSchoolFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSchoolConnection = {
  __typename: "ModelSchoolConnection",
  items:  Array<School | null >,
  nextToken?: string | null,
};

export type ModelAcademicYearFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAcademicYearFilterInput | null > | null,
  or?: Array< ModelAcademicYearFilterInput | null > | null,
  not?: ModelAcademicYearFilterInput | null,
};

export type ModelAcademicYearConnection = {
  __typename: "ModelAcademicYearConnection",
  items:  Array<AcademicYear | null >,
  nextToken?: string | null,
};

export type ModelTermFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  academicYearID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTermFilterInput | null > | null,
  or?: Array< ModelTermFilterInput | null > | null,
  not?: ModelTermFilterInput | null,
};

export type ModelTermConnection = {
  __typename: "ModelTermConnection",
  items:  Array<Term | null >,
  nextToken?: string | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  termID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items:  Array<Class | null >,
  nextToken?: string | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  userRole?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubjectFilterInput | null > | null,
  or?: Array< ModelSubjectFilterInput | null > | null,
  not?: ModelSubjectFilterInput | null,
};

export type ModelSubjectConnection = {
  __typename: "ModelSubjectConnection",
  items:  Array<Subject | null >,
  nextToken?: string | null,
};

export type ModelAssessmentFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  assessmentDate?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  subjectID?: ModelIDInput | null,
  termID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  createdBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAssessmentFilterInput | null > | null,
  or?: Array< ModelAssessmentFilterInput | null > | null,
  not?: ModelAssessmentFilterInput | null,
};

export type ModelAssessmentConnection = {
  __typename: "ModelAssessmentConnection",
  items:  Array<Assessment | null >,
  nextToken?: string | null,
};

export type ModelGradeFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  assessmentID?: ModelIDInput | null,
  score?: ModelFloatInput | null,
  comments?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGradeFilterInput | null > | null,
  or?: Array< ModelGradeFilterInput | null > | null,
  not?: ModelGradeFilterInput | null,
};

export type ModelGradeConnection = {
  __typename: "ModelGradeConnection",
  items:  Array<Grade | null >,
  nextToken?: string | null,
};

export type ModelAttendanceFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  status?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAttendanceFilterInput | null > | null,
  or?: Array< ModelAttendanceFilterInput | null > | null,
  not?: ModelAttendanceFilterInput | null,
};

export type ModelAttendanceConnection = {
  __typename: "ModelAttendanceConnection",
  items:  Array<Attendance | null >,
  nextToken?: string | null,
};

export type ModelAnnouncementFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  audience?: ModelAudienceTypeInput | null,
  createdBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAnnouncementFilterInput | null > | null,
  or?: Array< ModelAnnouncementFilterInput | null > | null,
  not?: ModelAnnouncementFilterInput | null,
};

export type ModelAnnouncementConnection = {
  __typename: "ModelAnnouncementConnection",
  items:  Array<Announcement | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionSchoolFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  domain?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSchoolFilterInput | null > | null,
  or?: Array< ModelSubscriptionSchoolFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAcademicYearFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAcademicYearFilterInput | null > | null,
  or?: Array< ModelSubscriptionAcademicYearFilterInput | null > | null,
};

export type ModelSubscriptionTermFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  academicYearID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTermFilterInput | null > | null,
  or?: Array< ModelSubscriptionTermFilterInput | null > | null,
};

export type ModelSubscriptionClassFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  termID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClassFilterInput | null > | null,
  or?: Array< ModelSubscriptionClassFilterInput | null > | null,
};

export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  userRole?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionSubjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  classID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubjectFilterInput | null > | null,
};

export type ModelSubscriptionAssessmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  assessmentDate?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  subjectID?: ModelSubscriptionIDInput | null,
  termID?: ModelSubscriptionIDInput | null,
  classID?: ModelSubscriptionIDInput | null,
  createdBy?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAssessmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAssessmentFilterInput | null > | null,
};

export type ModelSubscriptionGradeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  assessmentID?: ModelSubscriptionIDInput | null,
  score?: ModelSubscriptionFloatInput | null,
  comments?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGradeFilterInput | null > | null,
  or?: Array< ModelSubscriptionGradeFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionAttendanceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  classID?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAttendanceFilterInput | null > | null,
  or?: Array< ModelSubscriptionAttendanceFilterInput | null > | null,
};

export type ModelSubscriptionAnnouncementFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  body?: ModelSubscriptionStringInput | null,
  audience?: ModelSubscriptionStringInput | null,
  createdBy?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAnnouncementFilterInput | null > | null,
  or?: Array< ModelSubscriptionAnnouncementFilterInput | null > | null,
};

export type CustomCreateSchoolMutationVariables = {
  input: CreateSchoolInput,
};

export type CustomCreateSchoolMutation = {
  createSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    domain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CustomCreateClassMutationVariables = {
  input: CreateClassInput,
};

export type CustomCreateClassMutation = {
  createClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    schoolID: string,
    termID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CustomCreateStudentMutationVariables = {
  input: CreateStudentInput,
};

export type CustomCreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CustomCreateSubjectMutationVariables = {
  input: CreateSubjectInput,
};

export type CustomCreateSubjectMutation = {
  createSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    schoolID: string,
    classID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CustomCreateAcademicYearMutationVariables = {
  input: CreateAcademicYearInput,
};

export type CustomCreateAcademicYearMutation = {
  createAcademicYear?:  {
    __typename: "AcademicYear",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CustomCreateTermMutationVariables = {
  input: CreateTermInput,
};

export type CustomCreateTermMutation = {
  createTerm?:  {
    __typename: "Term",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    academicYearID: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CustomCreateAssessmentMutationVariables = {
  input: CreateAssessmentInput,
};

export type CustomCreateAssessmentMutation = {
  createAssessment?:  {
    __typename: "Assessment",
    id: string,
    title: string,
    assessmentDate: string,
    classID: string,
    subjectID: string,
    termID: string,
    schoolID: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CustomCreateGradeMutationVariables = {
  input: CreateGradeInput,
};

export type CustomCreateGradeMutation = {
  createGrade?:  {
    __typename: "Grade",
    id: string,
    studentID: string,
    assessmentID: string,
    score: number,
    comments?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CustomCreateAttendanceMutationVariables = {
  input: CreateAttendanceInput,
};

export type CustomCreateAttendanceMutation = {
  createAttendance?:  {
    __typename: "Attendance",
    id: string,
    studentID: string,
    classID: string,
    date: string,
    status: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CustomCreateAnnouncementMutationVariables = {
  input: CreateAnnouncementInput,
};

export type CustomCreateAnnouncementMutation = {
  createAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    body: string,
    audience: AudienceType,
    createdBy: string,
    createdAt: string,
    schoolID: string,
    updatedAt: string,
  } | null,
};

export type CreateSchoolMutationVariables = {
  input: CreateSchoolInput,
  condition?: ModelSchoolConditionInput | null,
};

export type CreateSchoolMutation = {
  createSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    domain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSchoolMutationVariables = {
  input: UpdateSchoolInput,
  condition?: ModelSchoolConditionInput | null,
};

export type UpdateSchoolMutation = {
  updateSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    domain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSchoolMutationVariables = {
  input: DeleteSchoolInput,
  condition?: ModelSchoolConditionInput | null,
};

export type DeleteSchoolMutation = {
  deleteSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    domain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAcademicYearMutationVariables = {
  input: CreateAcademicYearInput,
  condition?: ModelAcademicYearConditionInput | null,
};

export type CreateAcademicYearMutation = {
  createAcademicYear?:  {
    __typename: "AcademicYear",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAcademicYearMutationVariables = {
  input: UpdateAcademicYearInput,
  condition?: ModelAcademicYearConditionInput | null,
};

export type UpdateAcademicYearMutation = {
  updateAcademicYear?:  {
    __typename: "AcademicYear",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAcademicYearMutationVariables = {
  input: DeleteAcademicYearInput,
  condition?: ModelAcademicYearConditionInput | null,
};

export type DeleteAcademicYearMutation = {
  deleteAcademicYear?:  {
    __typename: "AcademicYear",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTermMutationVariables = {
  input: CreateTermInput,
  condition?: ModelTermConditionInput | null,
};

export type CreateTermMutation = {
  createTerm?:  {
    __typename: "Term",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    academicYearID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTermMutationVariables = {
  input: UpdateTermInput,
  condition?: ModelTermConditionInput | null,
};

export type UpdateTermMutation = {
  updateTerm?:  {
    __typename: "Term",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    academicYearID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTermMutationVariables = {
  input: DeleteTermInput,
  condition?: ModelTermConditionInput | null,
};

export type DeleteTermMutation = {
  deleteTerm?:  {
    __typename: "Term",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    academicYearID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClassMutationVariables = {
  input: CreateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type CreateClassMutation = {
  createClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    schoolID: string,
    termID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClassMutationVariables = {
  input: UpdateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type UpdateClassMutation = {
  updateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    schoolID: string,
    termID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClassMutationVariables = {
  input: DeleteClassInput,
  condition?: ModelClassConditionInput | null,
};

export type DeleteClassMutation = {
  deleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    schoolID: string,
    termID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    userRole: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    userRole: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    userRole: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubjectMutationVariables = {
  input: CreateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type CreateSubjectMutation = {
  createSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    schoolID: string,
    classID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubjectMutationVariables = {
  input: UpdateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type UpdateSubjectMutation = {
  updateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    schoolID: string,
    classID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubjectMutationVariables = {
  input: DeleteSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type DeleteSubjectMutation = {
  deleteSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    schoolID: string,
    classID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAssessmentMutationVariables = {
  input: CreateAssessmentInput,
  condition?: ModelAssessmentConditionInput | null,
};

export type CreateAssessmentMutation = {
  createAssessment?:  {
    __typename: "Assessment",
    id: string,
    title: string,
    assessmentDate: string,
    schoolID: string,
    subjectID: string,
    termID: string,
    classID: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAssessmentMutationVariables = {
  input: UpdateAssessmentInput,
  condition?: ModelAssessmentConditionInput | null,
};

export type UpdateAssessmentMutation = {
  updateAssessment?:  {
    __typename: "Assessment",
    id: string,
    title: string,
    assessmentDate: string,
    schoolID: string,
    subjectID: string,
    termID: string,
    classID: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAssessmentMutationVariables = {
  input: DeleteAssessmentInput,
  condition?: ModelAssessmentConditionInput | null,
};

export type DeleteAssessmentMutation = {
  deleteAssessment?:  {
    __typename: "Assessment",
    id: string,
    title: string,
    assessmentDate: string,
    schoolID: string,
    subjectID: string,
    termID: string,
    classID: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGradeMutationVariables = {
  input: CreateGradeInput,
  condition?: ModelGradeConditionInput | null,
};

export type CreateGradeMutation = {
  createGrade?:  {
    __typename: "Grade",
    id: string,
    studentID: string,
    assessmentID: string,
    score: number,
    comments?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGradeMutationVariables = {
  input: UpdateGradeInput,
  condition?: ModelGradeConditionInput | null,
};

export type UpdateGradeMutation = {
  updateGrade?:  {
    __typename: "Grade",
    id: string,
    studentID: string,
    assessmentID: string,
    score: number,
    comments?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGradeMutationVariables = {
  input: DeleteGradeInput,
  condition?: ModelGradeConditionInput | null,
};

export type DeleteGradeMutation = {
  deleteGrade?:  {
    __typename: "Grade",
    id: string,
    studentID: string,
    assessmentID: string,
    score: number,
    comments?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAttendanceMutationVariables = {
  input: CreateAttendanceInput,
  condition?: ModelAttendanceConditionInput | null,
};

export type CreateAttendanceMutation = {
  createAttendance?:  {
    __typename: "Attendance",
    id: string,
    studentID: string,
    classID: string,
    date: string,
    status: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAttendanceMutationVariables = {
  input: UpdateAttendanceInput,
  condition?: ModelAttendanceConditionInput | null,
};

export type UpdateAttendanceMutation = {
  updateAttendance?:  {
    __typename: "Attendance",
    id: string,
    studentID: string,
    classID: string,
    date: string,
    status: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAttendanceMutationVariables = {
  input: DeleteAttendanceInput,
  condition?: ModelAttendanceConditionInput | null,
};

export type DeleteAttendanceMutation = {
  deleteAttendance?:  {
    __typename: "Attendance",
    id: string,
    studentID: string,
    classID: string,
    date: string,
    status: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAnnouncementMutationVariables = {
  input: CreateAnnouncementInput,
  condition?: ModelAnnouncementConditionInput | null,
};

export type CreateAnnouncementMutation = {
  createAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    body: string,
    audience: AudienceType,
    createdBy: string,
    createdAt: string,
    schoolID: string,
    updatedAt: string,
  } | null,
};

export type UpdateAnnouncementMutationVariables = {
  input: UpdateAnnouncementInput,
  condition?: ModelAnnouncementConditionInput | null,
};

export type UpdateAnnouncementMutation = {
  updateAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    body: string,
    audience: AudienceType,
    createdBy: string,
    createdAt: string,
    schoolID: string,
    updatedAt: string,
  } | null,
};

export type DeleteAnnouncementMutationVariables = {
  input: DeleteAnnouncementInput,
  condition?: ModelAnnouncementConditionInput | null,
};

export type DeleteAnnouncementMutation = {
  deleteAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    body: string,
    audience: AudienceType,
    createdBy: string,
    createdAt: string,
    schoolID: string,
    updatedAt: string,
  } | null,
};

export type GetSchoolQueryVariables = {
  id: string,
};

export type GetSchoolQuery = {
  getSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    domain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSchoolsQueryVariables = {
  id?: string | null,
  filter?: ModelSchoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSchoolsQuery = {
  listSchools?:  {
    __typename: "ModelSchoolConnection",
    items:  Array< {
      __typename: "School",
      id: string,
      name: string,
      domain?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAcademicYearQueryVariables = {
  id: string,
};

export type GetAcademicYearQuery = {
  getAcademicYear?:  {
    __typename: "AcademicYear",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAcademicYearsQueryVariables = {
  id?: string | null,
  filter?: ModelAcademicYearFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAcademicYearsQuery = {
  listAcademicYears?:  {
    __typename: "ModelAcademicYearConnection",
    items:  Array< {
      __typename: "AcademicYear",
      id: string,
      name: string,
      startDate: string,
      endDate?: string | null,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTermQueryVariables = {
  id: string,
};

export type GetTermQuery = {
  getTerm?:  {
    __typename: "Term",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    academicYearID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTermsQueryVariables = {
  id?: string | null,
  filter?: ModelTermFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTermsQuery = {
  listTerms?:  {
    __typename: "ModelTermConnection",
    items:  Array< {
      __typename: "Term",
      id: string,
      name: string,
      startDate: string,
      endDate?: string | null,
      schoolID: string,
      academicYearID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClassQueryVariables = {
  id: string,
};

export type GetClassQuery = {
  getClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    schoolID: string,
    termID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClassesQueryVariables = {
  id?: string | null,
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListClassesQuery = {
  listClasses?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      termID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentsQueryVariables = {
  id?: string | null,
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    userRole: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      userRole: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubjectQueryVariables = {
  id: string,
};

export type GetSubjectQuery = {
  getSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    schoolID: string,
    classID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubjectsQueryVariables = {
  id?: string | null,
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSubjectsQuery = {
  listSubjects?:  {
    __typename: "ModelSubjectConnection",
    items:  Array< {
      __typename: "Subject",
      id: string,
      name: string,
      schoolID: string,
      classID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAssessmentQueryVariables = {
  id: string,
};

export type GetAssessmentQuery = {
  getAssessment?:  {
    __typename: "Assessment",
    id: string,
    title: string,
    assessmentDate: string,
    schoolID: string,
    subjectID: string,
    termID: string,
    classID: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAssessmentsQueryVariables = {
  id?: string | null,
  filter?: ModelAssessmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAssessmentsQuery = {
  listAssessments?:  {
    __typename: "ModelAssessmentConnection",
    items:  Array< {
      __typename: "Assessment",
      id: string,
      title: string,
      assessmentDate: string,
      schoolID: string,
      subjectID: string,
      termID: string,
      classID: string,
      createdBy: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGradeQueryVariables = {
  id: string,
};

export type GetGradeQuery = {
  getGrade?:  {
    __typename: "Grade",
    id: string,
    studentID: string,
    assessmentID: string,
    score: number,
    comments?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGradesQueryVariables = {
  id?: string | null,
  filter?: ModelGradeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGradesQuery = {
  listGrades?:  {
    __typename: "ModelGradeConnection",
    items:  Array< {
      __typename: "Grade",
      id: string,
      studentID: string,
      assessmentID: string,
      score: number,
      comments?: string | null,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAttendanceQueryVariables = {
  id: string,
};

export type GetAttendanceQuery = {
  getAttendance?:  {
    __typename: "Attendance",
    id: string,
    studentID: string,
    classID: string,
    date: string,
    status: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAttendancesQueryVariables = {
  id?: string | null,
  filter?: ModelAttendanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAttendancesQuery = {
  listAttendances?:  {
    __typename: "ModelAttendanceConnection",
    items:  Array< {
      __typename: "Attendance",
      id: string,
      studentID: string,
      classID: string,
      date: string,
      status: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAnnouncementQueryVariables = {
  id: string,
};

export type GetAnnouncementQuery = {
  getAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    body: string,
    audience: AudienceType,
    createdBy: string,
    createdAt: string,
    schoolID: string,
    updatedAt: string,
  } | null,
};

export type ListAnnouncementsQueryVariables = {
  id?: string | null,
  filter?: ModelAnnouncementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAnnouncementsQuery = {
  listAnnouncements?:  {
    __typename: "ModelAnnouncementConnection",
    items:  Array< {
      __typename: "Announcement",
      id: string,
      title: string,
      body: string,
      audience: AudienceType,
      createdBy: string,
      createdAt: string,
      schoolID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AcademicYearsBySchoolIDQueryVariables = {
  schoolID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAcademicYearFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AcademicYearsBySchoolIDQuery = {
  academicYearsBySchoolID?:  {
    __typename: "ModelAcademicYearConnection",
    items:  Array< {
      __typename: "AcademicYear",
      id: string,
      name: string,
      startDate: string,
      endDate?: string | null,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TermsBySchoolIDQueryVariables = {
  schoolID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTermFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TermsBySchoolIDQuery = {
  termsBySchoolID?:  {
    __typename: "ModelTermConnection",
    items:  Array< {
      __typename: "Term",
      id: string,
      name: string,
      startDate: string,
      endDate?: string | null,
      schoolID: string,
      academicYearID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TermsByAcademicYearIDQueryVariables = {
  academicYearID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTermFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TermsByAcademicYearIDQuery = {
  termsByAcademicYearID?:  {
    __typename: "ModelTermConnection",
    items:  Array< {
      __typename: "Term",
      id: string,
      name: string,
      startDate: string,
      endDate?: string | null,
      schoolID: string,
      academicYearID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ClassesBySchoolIDQueryVariables = {
  schoolID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ClassesBySchoolIDQuery = {
  classesBySchoolID?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      termID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ClassesByTermIDQueryVariables = {
  termID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ClassesByTermIDQuery = {
  classesByTermID?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      termID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudentsBySchoolIDQueryVariables = {
  schoolID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudentsBySchoolIDQuery = {
  studentsBySchoolID?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersBySchoolIDQueryVariables = {
  schoolID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersBySchoolIDQuery = {
  usersBySchoolID?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      userRole: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubjectsBySchoolIDQueryVariables = {
  schoolID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubjectsBySchoolIDQuery = {
  subjectsBySchoolID?:  {
    __typename: "ModelSubjectConnection",
    items:  Array< {
      __typename: "Subject",
      id: string,
      name: string,
      schoolID: string,
      classID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubjectsByClassIDQueryVariables = {
  classID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubjectsByClassIDQuery = {
  subjectsByClassID?:  {
    __typename: "ModelSubjectConnection",
    items:  Array< {
      __typename: "Subject",
      id: string,
      name: string,
      schoolID: string,
      classID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AssessmentsBySchoolIDQueryVariables = {
  schoolID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAssessmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AssessmentsBySchoolIDQuery = {
  assessmentsBySchoolID?:  {
    __typename: "ModelAssessmentConnection",
    items:  Array< {
      __typename: "Assessment",
      id: string,
      title: string,
      assessmentDate: string,
      schoolID: string,
      subjectID: string,
      termID: string,
      classID: string,
      createdBy: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AssessmentsBySubjectIDQueryVariables = {
  subjectID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAssessmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AssessmentsBySubjectIDQuery = {
  assessmentsBySubjectID?:  {
    __typename: "ModelAssessmentConnection",
    items:  Array< {
      __typename: "Assessment",
      id: string,
      title: string,
      assessmentDate: string,
      schoolID: string,
      subjectID: string,
      termID: string,
      classID: string,
      createdBy: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GradesByStudentIDQueryVariables = {
  studentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGradeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GradesByStudentIDQuery = {
  gradesByStudentID?:  {
    __typename: "ModelGradeConnection",
    items:  Array< {
      __typename: "Grade",
      id: string,
      studentID: string,
      assessmentID: string,
      score: number,
      comments?: string | null,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GradesByAssessmentIDQueryVariables = {
  assessmentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGradeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GradesByAssessmentIDQuery = {
  gradesByAssessmentID?:  {
    __typename: "ModelGradeConnection",
    items:  Array< {
      __typename: "Grade",
      id: string,
      studentID: string,
      assessmentID: string,
      score: number,
      comments?: string | null,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GradesBySchoolIDQueryVariables = {
  schoolID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGradeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GradesBySchoolIDQuery = {
  gradesBySchoolID?:  {
    __typename: "ModelGradeConnection",
    items:  Array< {
      __typename: "Grade",
      id: string,
      studentID: string,
      assessmentID: string,
      score: number,
      comments?: string | null,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AttendancesByStudentIDQueryVariables = {
  studentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAttendanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AttendancesByStudentIDQuery = {
  attendancesByStudentID?:  {
    __typename: "ModelAttendanceConnection",
    items:  Array< {
      __typename: "Attendance",
      id: string,
      studentID: string,
      classID: string,
      date: string,
      status: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AttendancesByClassIDQueryVariables = {
  classID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAttendanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AttendancesByClassIDQuery = {
  attendancesByClassID?:  {
    __typename: "ModelAttendanceConnection",
    items:  Array< {
      __typename: "Attendance",
      id: string,
      studentID: string,
      classID: string,
      date: string,
      status: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AttendancesBySchoolIDQueryVariables = {
  schoolID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAttendanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AttendancesBySchoolIDQuery = {
  attendancesBySchoolID?:  {
    __typename: "ModelAttendanceConnection",
    items:  Array< {
      __typename: "Attendance",
      id: string,
      studentID: string,
      classID: string,
      date: string,
      status: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AnnouncementsBySchoolIDQueryVariables = {
  schoolID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAnnouncementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AnnouncementsBySchoolIDQuery = {
  announcementsBySchoolID?:  {
    __typename: "ModelAnnouncementConnection",
    items:  Array< {
      __typename: "Announcement",
      id: string,
      title: string,
      body: string,
      audience: AudienceType,
      createdBy: string,
      createdAt: string,
      schoolID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
};

export type OnCreateSchoolSubscription = {
  onCreateSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    domain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
};

export type OnUpdateSchoolSubscription = {
  onUpdateSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    domain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
};

export type OnDeleteSchoolSubscription = {
  onDeleteSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    domain?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAcademicYearSubscriptionVariables = {
  filter?: ModelSubscriptionAcademicYearFilterInput | null,
};

export type OnCreateAcademicYearSubscription = {
  onCreateAcademicYear?:  {
    __typename: "AcademicYear",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAcademicYearSubscriptionVariables = {
  filter?: ModelSubscriptionAcademicYearFilterInput | null,
};

export type OnUpdateAcademicYearSubscription = {
  onUpdateAcademicYear?:  {
    __typename: "AcademicYear",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAcademicYearSubscriptionVariables = {
  filter?: ModelSubscriptionAcademicYearFilterInput | null,
};

export type OnDeleteAcademicYearSubscription = {
  onDeleteAcademicYear?:  {
    __typename: "AcademicYear",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTermSubscriptionVariables = {
  filter?: ModelSubscriptionTermFilterInput | null,
};

export type OnCreateTermSubscription = {
  onCreateTerm?:  {
    __typename: "Term",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    academicYearID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTermSubscriptionVariables = {
  filter?: ModelSubscriptionTermFilterInput | null,
};

export type OnUpdateTermSubscription = {
  onUpdateTerm?:  {
    __typename: "Term",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    academicYearID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTermSubscriptionVariables = {
  filter?: ModelSubscriptionTermFilterInput | null,
};

export type OnDeleteTermSubscription = {
  onDeleteTerm?:  {
    __typename: "Term",
    id: string,
    name: string,
    startDate: string,
    endDate?: string | null,
    schoolID: string,
    academicYearID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnCreateClassSubscription = {
  onCreateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    schoolID: string,
    termID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    schoolID: string,
    termID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    schoolID: string,
    termID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    userRole: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    userRole: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    userRole: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
};

export type OnCreateSubjectSubscription = {
  onCreateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    schoolID: string,
    classID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
};

export type OnUpdateSubjectSubscription = {
  onUpdateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    schoolID: string,
    classID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
};

export type OnDeleteSubjectSubscription = {
  onDeleteSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    schoolID: string,
    classID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAssessmentSubscriptionVariables = {
  filter?: ModelSubscriptionAssessmentFilterInput | null,
};

export type OnCreateAssessmentSubscription = {
  onCreateAssessment?:  {
    __typename: "Assessment",
    id: string,
    title: string,
    assessmentDate: string,
    schoolID: string,
    subjectID: string,
    termID: string,
    classID: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssessmentSubscriptionVariables = {
  filter?: ModelSubscriptionAssessmentFilterInput | null,
};

export type OnUpdateAssessmentSubscription = {
  onUpdateAssessment?:  {
    __typename: "Assessment",
    id: string,
    title: string,
    assessmentDate: string,
    schoolID: string,
    subjectID: string,
    termID: string,
    classID: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssessmentSubscriptionVariables = {
  filter?: ModelSubscriptionAssessmentFilterInput | null,
};

export type OnDeleteAssessmentSubscription = {
  onDeleteAssessment?:  {
    __typename: "Assessment",
    id: string,
    title: string,
    assessmentDate: string,
    schoolID: string,
    subjectID: string,
    termID: string,
    classID: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGradeSubscriptionVariables = {
  filter?: ModelSubscriptionGradeFilterInput | null,
};

export type OnCreateGradeSubscription = {
  onCreateGrade?:  {
    __typename: "Grade",
    id: string,
    studentID: string,
    assessmentID: string,
    score: number,
    comments?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGradeSubscriptionVariables = {
  filter?: ModelSubscriptionGradeFilterInput | null,
};

export type OnUpdateGradeSubscription = {
  onUpdateGrade?:  {
    __typename: "Grade",
    id: string,
    studentID: string,
    assessmentID: string,
    score: number,
    comments?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGradeSubscriptionVariables = {
  filter?: ModelSubscriptionGradeFilterInput | null,
};

export type OnDeleteGradeSubscription = {
  onDeleteGrade?:  {
    __typename: "Grade",
    id: string,
    studentID: string,
    assessmentID: string,
    score: number,
    comments?: string | null,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAttendanceSubscriptionVariables = {
  filter?: ModelSubscriptionAttendanceFilterInput | null,
};

export type OnCreateAttendanceSubscription = {
  onCreateAttendance?:  {
    __typename: "Attendance",
    id: string,
    studentID: string,
    classID: string,
    date: string,
    status: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAttendanceSubscriptionVariables = {
  filter?: ModelSubscriptionAttendanceFilterInput | null,
};

export type OnUpdateAttendanceSubscription = {
  onUpdateAttendance?:  {
    __typename: "Attendance",
    id: string,
    studentID: string,
    classID: string,
    date: string,
    status: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAttendanceSubscriptionVariables = {
  filter?: ModelSubscriptionAttendanceFilterInput | null,
};

export type OnDeleteAttendanceSubscription = {
  onDeleteAttendance?:  {
    __typename: "Attendance",
    id: string,
    studentID: string,
    classID: string,
    date: string,
    status: string,
    schoolID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAnnouncementSubscriptionVariables = {
  filter?: ModelSubscriptionAnnouncementFilterInput | null,
};

export type OnCreateAnnouncementSubscription = {
  onCreateAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    body: string,
    audience: AudienceType,
    createdBy: string,
    createdAt: string,
    schoolID: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAnnouncementSubscriptionVariables = {
  filter?: ModelSubscriptionAnnouncementFilterInput | null,
};

export type OnUpdateAnnouncementSubscription = {
  onUpdateAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    body: string,
    audience: AudienceType,
    createdBy: string,
    createdAt: string,
    schoolID: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAnnouncementSubscriptionVariables = {
  filter?: ModelSubscriptionAnnouncementFilterInput | null,
};

export type OnDeleteAnnouncementSubscription = {
  onDeleteAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    body: string,
    audience: AudienceType,
    createdBy: string,
    createdAt: string,
    schoolID: string,
    updatedAt: string,
  } | null,
};
