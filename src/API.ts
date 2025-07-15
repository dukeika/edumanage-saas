/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSchoolInput = {
  id?: string | null,
  name: string,
  address?: string | null,
  subdomain: string,
  schoolAdmin: string,
  admins: Array< string >,
  logoURL?: string | null,
  heroImageURL?: string | null,
  description?: string | null,
  contactEmail?: string | null,
  phone?: string | null,
  website?: string | null,
  news?: string | null,
  calendarInfo?: string | null,
};

export type ModelSchoolConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  subdomain?: ModelStringInput | null,
  schoolAdmin?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  logoURL?: ModelStringInput | null,
  heroImageURL?: ModelStringInput | null,
  description?: ModelStringInput | null,
  contactEmail?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  website?: ModelStringInput | null,
  news?: ModelStringInput | null,
  calendarInfo?: ModelStringInput | null,
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

export type School = {
  __typename: "School",
  id: string,
  name: string,
  address?: string | null,
  subdomain: string,
  schoolAdmin: string,
  admins: Array< string >,
  logoURL?: string | null,
  heroImageURL?: string | null,
  description?: string | null,
  contactEmail?: string | null,
  phone?: string | null,
  website?: string | null,
  news?: string | null,
  calendarInfo?: string | null,
  academicYears?: ModelAcademicYearConnection | null,
  classes?: ModelClassConnection | null,
  students?: ModelStudentConnection | null,
  users?: ModelUserConnection | null,
  announcements?: ModelAnnouncementConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAcademicYearConnection = {
  __typename: "ModelAcademicYearConnection",
  items:  Array<AcademicYear | null >,
  nextToken?: string | null,
};

export type AcademicYear = {
  __typename: "AcademicYear",
  id: string,
  yearLabel: string,
  schoolID: string,
  school?: School | null,
  terms?: ModelTermConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelTermConnection = {
  __typename: "ModelTermConnection",
  items:  Array<Term | null >,
  nextToken?: string | null,
};

export type Term = {
  __typename: "Term",
  id: string,
  termLabel: string,
  startDate?: string | null,
  endDate?: string | null,
  academicYearID: string,
  academicYear?: AcademicYear | null,
  assessments?: ModelAssessmentConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelAssessmentConnection = {
  __typename: "ModelAssessmentConnection",
  items:  Array<Assessment | null >,
  nextToken?: string | null,
};

export type Assessment = {
  __typename: "Assessment",
  id: string,
  title: string,
  assessmentDate: string,
  classID: string,
  class?: Class | null,
  subjectID: string,
  subject?: Subject | null,
  termID: string,
  term?: Term | null,
  grades?: ModelGradeConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Class = {
  __typename: "Class",
  id: string,
  name: string,
  schoolID: string,
  school?: School | null,
  teacherID?: string | null,
  students?: ModelStudentConnection | null,
  attendances?: ModelAttendanceConnection | null,
  subjects?: ModelSubjectConnection | null,
  assessments?: ModelAssessmentConnection | null,
  grades?: ModelGradeConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  name: string,
  classID: string,
  schoolID: string,
  class?: Class | null,
  school?: School | null,
  attendances?: ModelAttendanceConnection | null,
  grades?: ModelGradeConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelAttendanceConnection = {
  __typename: "ModelAttendanceConnection",
  items:  Array<Attendance | null >,
  nextToken?: string | null,
};

export type Attendance = {
  __typename: "Attendance",
  id: string,
  studentID: string,
  classID: string,
  date: string,
  status: string,
  student?: Student | null,
  class?: Class | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelGradeConnection = {
  __typename: "ModelGradeConnection",
  items:  Array<Grade | null >,
  nextToken?: string | null,
};

export type Grade = {
  __typename: "Grade",
  id: string,
  studentID: string,
  student?: Student | null,
  assessmentID: string,
  assessment?: Assessment | null,
  score: number,
  classID: string,
  class?: Class | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelSubjectConnection = {
  __typename: "ModelSubjectConnection",
  items:  Array<Subject | null >,
  nextToken?: string | null,
};

export type Subject = {
  __typename: "Subject",
  id: string,
  name: string,
  classID: string,
  class?: Class | null,
  assessments?: ModelAssessmentConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items:  Array<Class | null >,
  nextToken?: string | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  name: string,
  role: string,
  schoolID: string,
  school?: School | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelAnnouncementConnection = {
  __typename: "ModelAnnouncementConnection",
  items:  Array<Announcement | null >,
  nextToken?: string | null,
};

export type Announcement = {
  __typename: "Announcement",
  id: string,
  title: string,
  message: string,
  audience?: string | null,
  targetID?: string | null,
  createdBy: string,
  schoolID: string,
  classID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSchoolInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  subdomain?: string | null,
  schoolAdmin?: string | null,
  admins?: Array< string > | null,
  logoURL?: string | null,
  heroImageURL?: string | null,
  description?: string | null,
  contactEmail?: string | null,
  phone?: string | null,
  website?: string | null,
  news?: string | null,
  calendarInfo?: string | null,
};

export type DeleteSchoolInput = {
  id: string,
};

export type CreateAcademicYearInput = {
  id?: string | null,
  yearLabel: string,
  schoolID: string,
};

export type ModelAcademicYearConditionInput = {
  yearLabel?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  and?: Array< ModelAcademicYearConditionInput | null > | null,
  or?: Array< ModelAcademicYearConditionInput | null > | null,
  not?: ModelAcademicYearConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
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
  yearLabel?: string | null,
  schoolID?: string | null,
};

export type DeleteAcademicYearInput = {
  id: string,
};

export type CreateTermInput = {
  id?: string | null,
  termLabel: string,
  startDate?: string | null,
  endDate?: string | null,
  academicYearID: string,
};

export type ModelTermConditionInput = {
  termLabel?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  academicYearID?: ModelIDInput | null,
  and?: Array< ModelTermConditionInput | null > | null,
  or?: Array< ModelTermConditionInput | null > | null,
  not?: ModelTermConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateTermInput = {
  id: string,
  termLabel?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  academicYearID?: string | null,
};

export type DeleteTermInput = {
  id: string,
};

export type CreateClassInput = {
  id?: string | null,
  name: string,
  schoolID: string,
  teacherID?: string | null,
};

export type ModelClassConditionInput = {
  name?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  teacherID?: ModelIDInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateClassInput = {
  id: string,
  name?: string | null,
  schoolID?: string | null,
  teacherID?: string | null,
};

export type DeleteClassInput = {
  id: string,
};

export type CreateStudentInput = {
  id?: string | null,
  name: string,
  classID: string,
  schoolID: string,
};

export type ModelStudentConditionInput = {
  name?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  schoolID?: ModelIDInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateStudentInput = {
  id: string,
  name?: string | null,
  classID?: string | null,
  schoolID?: string | null,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  email: string,
  name: string,
  role: string,
  schoolID: string,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  role?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  role?: string | null,
  schoolID?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateSubjectInput = {
  id?: string | null,
  name: string,
  classID: string,
};

export type ModelSubjectConditionInput = {
  name?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelSubjectConditionInput | null > | null,
  or?: Array< ModelSubjectConditionInput | null > | null,
  not?: ModelSubjectConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateSubjectInput = {
  id: string,
  name?: string | null,
  classID?: string | null,
};

export type DeleteSubjectInput = {
  id: string,
};

export type CreateAssessmentInput = {
  id?: string | null,
  title: string,
  assessmentDate: string,
  classID: string,
  subjectID: string,
  termID: string,
};

export type ModelAssessmentConditionInput = {
  title?: ModelStringInput | null,
  assessmentDate?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  subjectID?: ModelIDInput | null,
  termID?: ModelIDInput | null,
  and?: Array< ModelAssessmentConditionInput | null > | null,
  or?: Array< ModelAssessmentConditionInput | null > | null,
  not?: ModelAssessmentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateAssessmentInput = {
  id: string,
  title?: string | null,
  assessmentDate?: string | null,
  classID?: string | null,
  subjectID?: string | null,
  termID?: string | null,
};

export type DeleteAssessmentInput = {
  id: string,
};

export type CreateGradeInput = {
  id?: string | null,
  studentID: string,
  assessmentID: string,
  score: number,
  classID: string,
};

export type ModelGradeConditionInput = {
  studentID?: ModelIDInput | null,
  assessmentID?: ModelIDInput | null,
  score?: ModelFloatInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelGradeConditionInput | null > | null,
  or?: Array< ModelGradeConditionInput | null > | null,
  not?: ModelGradeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
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
  classID?: string | null,
};

export type DeleteGradeInput = {
  id: string,
};

export type CreateAttendanceInput = {
  id?: string | null,
  studentID: string,
  classID: string,
  date: string,
  status: string,
};

export type ModelAttendanceConditionInput = {
  studentID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelAttendanceConditionInput | null > | null,
  or?: Array< ModelAttendanceConditionInput | null > | null,
  not?: ModelAttendanceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateAttendanceInput = {
  id: string,
  studentID?: string | null,
  classID?: string | null,
  date?: string | null,
  status?: string | null,
};

export type DeleteAttendanceInput = {
  id: string,
};

export type CreateAnnouncementInput = {
  id?: string | null,
  title: string,
  message: string,
  audience?: string | null,
  targetID?: string | null,
  createdBy: string,
  schoolID: string,
  classID?: string | null,
};

export type ModelAnnouncementConditionInput = {
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  audience?: ModelStringInput | null,
  targetID?: ModelIDInput | null,
  createdBy?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelAnnouncementConditionInput | null > | null,
  or?: Array< ModelAnnouncementConditionInput | null > | null,
  not?: ModelAnnouncementConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAnnouncementInput = {
  id: string,
  title?: string | null,
  message?: string | null,
  audience?: string | null,
  targetID?: string | null,
  createdBy?: string | null,
  schoolID?: string | null,
  classID?: string | null,
};

export type DeleteAnnouncementInput = {
  id: string,
};

export type ModelSchoolFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  subdomain?: ModelStringInput | null,
  schoolAdmin?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  logoURL?: ModelStringInput | null,
  heroImageURL?: ModelStringInput | null,
  description?: ModelStringInput | null,
  contactEmail?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  website?: ModelStringInput | null,
  news?: ModelStringInput | null,
  calendarInfo?: ModelStringInput | null,
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
  yearLabel?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAcademicYearFilterInput | null > | null,
  or?: Array< ModelAcademicYearFilterInput | null > | null,
  not?: ModelAcademicYearFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelTermFilterInput = {
  id?: ModelIDInput | null,
  termLabel?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  academicYearID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTermFilterInput | null > | null,
  or?: Array< ModelTermFilterInput | null > | null,
  not?: ModelTermFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  teacherID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  schoolID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  role?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubjectFilterInput | null > | null,
  or?: Array< ModelSubjectFilterInput | null > | null,
  not?: ModelSubjectFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelAssessmentFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  assessmentDate?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  subjectID?: ModelIDInput | null,
  termID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAssessmentFilterInput | null > | null,
  or?: Array< ModelAssessmentFilterInput | null > | null,
  not?: ModelAssessmentFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelGradeFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  assessmentID?: ModelIDInput | null,
  score?: ModelFloatInput | null,
  classID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGradeFilterInput | null > | null,
  or?: Array< ModelGradeFilterInput | null > | null,
  not?: ModelGradeFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelAttendanceFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  status?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAttendanceFilterInput | null > | null,
  or?: Array< ModelAttendanceFilterInput | null > | null,
  not?: ModelAttendanceFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelAnnouncementFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  audience?: ModelStringInput | null,
  targetID?: ModelIDInput | null,
  createdBy?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAnnouncementFilterInput | null > | null,
  or?: Array< ModelAnnouncementFilterInput | null > | null,
  not?: ModelAnnouncementFilterInput | null,
};

export type ModelSubscriptionSchoolFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  subdomain?: ModelSubscriptionStringInput | null,
  logoURL?: ModelSubscriptionStringInput | null,
  heroImageURL?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  contactEmail?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  news?: ModelSubscriptionStringInput | null,
  calendarInfo?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSchoolFilterInput | null > | null,
  or?: Array< ModelSubscriptionSchoolFilterInput | null > | null,
  schoolAdmin?: ModelStringInput | null,
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
  yearLabel?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAcademicYearFilterInput | null > | null,
  or?: Array< ModelSubscriptionAcademicYearFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionTermFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  termLabel?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  academicYearID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTermFilterInput | null > | null,
  or?: Array< ModelSubscriptionTermFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionClassFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  teacherID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClassFilterInput | null > | null,
  or?: Array< ModelSubscriptionClassFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  classID?: ModelSubscriptionIDInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionSubjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  classID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubjectFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionAssessmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  assessmentDate?: ModelSubscriptionStringInput | null,
  classID?: ModelSubscriptionIDInput | null,
  subjectID?: ModelSubscriptionIDInput | null,
  termID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAssessmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAssessmentFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionGradeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  assessmentID?: ModelSubscriptionIDInput | null,
  score?: ModelSubscriptionFloatInput | null,
  classID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGradeFilterInput | null > | null,
  or?: Array< ModelSubscriptionGradeFilterInput | null > | null,
  owner?: ModelStringInput | null,
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
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAttendanceFilterInput | null > | null,
  or?: Array< ModelSubscriptionAttendanceFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionAnnouncementFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  audience?: ModelSubscriptionStringInput | null,
  targetID?: ModelSubscriptionIDInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  classID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAnnouncementFilterInput | null > | null,
  or?: Array< ModelSubscriptionAnnouncementFilterInput | null > | null,
  createdBy?: ModelStringInput | null,
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
    address?: string | null,
    subdomain: string,
    schoolAdmin: string,
    admins: Array< string >,
    logoURL?: string | null,
    heroImageURL?: string | null,
    description?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    news?: string | null,
    calendarInfo?: string | null,
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
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
    address?: string | null,
    subdomain: string,
    schoolAdmin: string,
    admins: Array< string >,
    logoURL?: string | null,
    heroImageURL?: string | null,
    description?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    news?: string | null,
    calendarInfo?: string | null,
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
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
    address?: string | null,
    subdomain: string,
    schoolAdmin: string,
    admins: Array< string >,
    logoURL?: string | null,
    heroImageURL?: string | null,
    description?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    news?: string | null,
    calendarInfo?: string | null,
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
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
    yearLabel: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    yearLabel: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    yearLabel: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
    academicYearID: string,
    academicYear?:  {
      __typename: "AcademicYear",
      id: string,
      yearLabel: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
    academicYearID: string,
    academicYear?:  {
      __typename: "AcademicYear",
      id: string,
      yearLabel: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
    academicYearID: string,
    academicYear?:  {
      __typename: "AcademicYear",
      id: string,
      yearLabel: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teacherID?: string | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teacherID?: string | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teacherID?: string | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    name: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    name: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    name: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    email: string,
    name: string,
    role: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    email: string,
    name: string,
    role: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    email: string,
    name: string,
    role: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessmentID: string,
    assessment?:  {
      __typename: "Assessment",
      id: string,
      title: string,
      assessmentDate: string,
      classID: string,
      subjectID: string,
      termID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessmentID: string,
    assessment?:  {
      __typename: "Assessment",
      id: string,
      title: string,
      assessmentDate: string,
      classID: string,
      subjectID: string,
      termID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessmentID: string,
    assessment?:  {
      __typename: "Assessment",
      id: string,
      title: string,
      assessmentDate: string,
      classID: string,
      subjectID: string,
      termID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    message: string,
    audience?: string | null,
    targetID?: string | null,
    createdBy: string,
    schoolID: string,
    classID?: string | null,
    createdAt: string,
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
    message: string,
    audience?: string | null,
    targetID?: string | null,
    createdBy: string,
    schoolID: string,
    classID?: string | null,
    createdAt: string,
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
    message: string,
    audience?: string | null,
    targetID?: string | null,
    createdBy: string,
    schoolID: string,
    classID?: string | null,
    createdAt: string,
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
    address?: string | null,
    subdomain: string,
    schoolAdmin: string,
    admins: Array< string >,
    logoURL?: string | null,
    heroImageURL?: string | null,
    description?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    news?: string | null,
    calendarInfo?: string | null,
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
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
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SchoolsBySubdomainQueryVariables = {
  subdomain: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSchoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SchoolsBySubdomainQuery = {
  schoolsBySubdomain?:  {
    __typename: "ModelSchoolConnection",
    items:  Array< {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
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
    yearLabel: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAcademicYearsQueryVariables = {
  filter?: ModelAcademicYearFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAcademicYearsQuery = {
  listAcademicYears?:  {
    __typename: "ModelAcademicYearConnection",
    items:  Array< {
      __typename: "AcademicYear",
      id: string,
      yearLabel: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
    academicYearID: string,
    academicYear?:  {
      __typename: "AcademicYear",
      id: string,
      yearLabel: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTermsQueryVariables = {
  filter?: ModelTermFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTermsQuery = {
  listTerms?:  {
    __typename: "ModelTermConnection",
    items:  Array< {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teacherID?: string | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClassesQuery = {
  listClasses?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
    name: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
    email: string,
    name: string,
    role: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      role: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSubjectsQueryVariables = {
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubjectsQuery = {
  listSubjects?:  {
    __typename: "ModelSubjectConnection",
    items:  Array< {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAssessmentsQueryVariables = {
  filter?: ModelAssessmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssessmentsQuery = {
  listAssessments?:  {
    __typename: "ModelAssessmentConnection",
    items:  Array< {
      __typename: "Assessment",
      id: string,
      title: string,
      assessmentDate: string,
      classID: string,
      subjectID: string,
      termID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessmentID: string,
    assessment?:  {
      __typename: "Assessment",
      id: string,
      title: string,
      assessmentDate: string,
      classID: string,
      subjectID: string,
      termID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListGradesQueryVariables = {
  filter?: ModelGradeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
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
      classID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAttendancesQueryVariables = {
  filter?: ModelAttendanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
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
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
    message: string,
    audience?: string | null,
    targetID?: string | null,
    createdBy: string,
    schoolID: string,
    classID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAnnouncementsQueryVariables = {
  filter?: ModelAnnouncementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAnnouncementsQuery = {
  listAnnouncements?:  {
    __typename: "ModelAnnouncementConnection",
    items:  Array< {
      __typename: "Announcement",
      id: string,
      title: string,
      message: string,
      audience?: string | null,
      targetID?: string | null,
      createdBy: string,
      schoolID: string,
      classID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
  schoolAdmin?: string | null,
};

export type OnCreateSchoolSubscription = {
  onCreateSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    address?: string | null,
    subdomain: string,
    schoolAdmin: string,
    admins: Array< string >,
    logoURL?: string | null,
    heroImageURL?: string | null,
    description?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    news?: string | null,
    calendarInfo?: string | null,
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
  schoolAdmin?: string | null,
};

export type OnUpdateSchoolSubscription = {
  onUpdateSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    address?: string | null,
    subdomain: string,
    schoolAdmin: string,
    admins: Array< string >,
    logoURL?: string | null,
    heroImageURL?: string | null,
    description?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    news?: string | null,
    calendarInfo?: string | null,
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
  schoolAdmin?: string | null,
};

export type OnDeleteSchoolSubscription = {
  onDeleteSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    address?: string | null,
    subdomain: string,
    schoolAdmin: string,
    admins: Array< string >,
    logoURL?: string | null,
    heroImageURL?: string | null,
    description?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    news?: string | null,
    calendarInfo?: string | null,
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAcademicYearSubscriptionVariables = {
  filter?: ModelSubscriptionAcademicYearFilterInput | null,
  owner?: string | null,
};

export type OnCreateAcademicYearSubscription = {
  onCreateAcademicYear?:  {
    __typename: "AcademicYear",
    id: string,
    yearLabel: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAcademicYearSubscriptionVariables = {
  filter?: ModelSubscriptionAcademicYearFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAcademicYearSubscription = {
  onUpdateAcademicYear?:  {
    __typename: "AcademicYear",
    id: string,
    yearLabel: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAcademicYearSubscriptionVariables = {
  filter?: ModelSubscriptionAcademicYearFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAcademicYearSubscription = {
  onDeleteAcademicYear?:  {
    __typename: "AcademicYear",
    id: string,
    yearLabel: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTermSubscriptionVariables = {
  filter?: ModelSubscriptionTermFilterInput | null,
  owner?: string | null,
};

export type OnCreateTermSubscription = {
  onCreateTerm?:  {
    __typename: "Term",
    id: string,
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
    academicYearID: string,
    academicYear?:  {
      __typename: "AcademicYear",
      id: string,
      yearLabel: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTermSubscriptionVariables = {
  filter?: ModelSubscriptionTermFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTermSubscription = {
  onUpdateTerm?:  {
    __typename: "Term",
    id: string,
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
    academicYearID: string,
    academicYear?:  {
      __typename: "AcademicYear",
      id: string,
      yearLabel: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTermSubscriptionVariables = {
  filter?: ModelSubscriptionTermFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTermSubscription = {
  onDeleteTerm?:  {
    __typename: "Term",
    id: string,
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
    academicYearID: string,
    academicYear?:  {
      __typename: "AcademicYear",
      id: string,
      yearLabel: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
  owner?: string | null,
};

export type OnCreateClassSubscription = {
  onCreateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teacherID?: string | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
  owner?: string | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teacherID?: string | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
  owner?: string | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teacherID?: string | null,
    students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    subjects?:  {
      __typename: "ModelSubjectConnection",
      nextToken?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
  owner?: string | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    role: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    role: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    role: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      address?: string | null,
      subdomain: string,
      schoolAdmin: string,
      admins: Array< string >,
      logoURL?: string | null,
      heroImageURL?: string | null,
      description?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      news?: string | null,
      calendarInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
  owner?: string | null,
};

export type OnCreateSubjectSubscription = {
  onCreateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSubjectSubscription = {
  onUpdateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSubjectSubscription = {
  onDeleteSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateAssessmentSubscriptionVariables = {
  filter?: ModelSubscriptionAssessmentFilterInput | null,
  owner?: string | null,
};

export type OnCreateAssessmentSubscription = {
  onCreateAssessment?:  {
    __typename: "Assessment",
    id: string,
    title: string,
    assessmentDate: string,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAssessmentSubscriptionVariables = {
  filter?: ModelSubscriptionAssessmentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAssessmentSubscription = {
  onUpdateAssessment?:  {
    __typename: "Assessment",
    id: string,
    title: string,
    assessmentDate: string,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAssessmentSubscriptionVariables = {
  filter?: ModelSubscriptionAssessmentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAssessmentSubscription = {
  onDeleteAssessment?:  {
    __typename: "Assessment",
    id: string,
    title: string,
    assessmentDate: string,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateGradeSubscriptionVariables = {
  filter?: ModelSubscriptionGradeFilterInput | null,
  owner?: string | null,
};

export type OnCreateGradeSubscription = {
  onCreateGrade?:  {
    __typename: "Grade",
    id: string,
    studentID: string,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessmentID: string,
    assessment?:  {
      __typename: "Assessment",
      id: string,
      title: string,
      assessmentDate: string,
      classID: string,
      subjectID: string,
      termID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateGradeSubscriptionVariables = {
  filter?: ModelSubscriptionGradeFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGradeSubscription = {
  onUpdateGrade?:  {
    __typename: "Grade",
    id: string,
    studentID: string,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessmentID: string,
    assessment?:  {
      __typename: "Assessment",
      id: string,
      title: string,
      assessmentDate: string,
      classID: string,
      subjectID: string,
      termID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteGradeSubscriptionVariables = {
  filter?: ModelSubscriptionGradeFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGradeSubscription = {
  onDeleteGrade?:  {
    __typename: "Grade",
    id: string,
    studentID: string,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    assessmentID: string,
    assessment?:  {
      __typename: "Assessment",
      id: string,
      title: string,
      assessmentDate: string,
      classID: string,
      subjectID: string,
      termID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateAttendanceSubscriptionVariables = {
  filter?: ModelSubscriptionAttendanceFilterInput | null,
  owner?: string | null,
};

export type OnCreateAttendanceSubscription = {
  onCreateAttendance?:  {
    __typename: "Attendance",
    id: string,
    studentID: string,
    classID: string,
    date: string,
    status: string,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAttendanceSubscriptionVariables = {
  filter?: ModelSubscriptionAttendanceFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAttendanceSubscription = {
  onUpdateAttendance?:  {
    __typename: "Attendance",
    id: string,
    studentID: string,
    classID: string,
    date: string,
    status: string,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAttendanceSubscriptionVariables = {
  filter?: ModelSubscriptionAttendanceFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAttendanceSubscription = {
  onDeleteAttendance?:  {
    __typename: "Attendance",
    id: string,
    studentID: string,
    classID: string,
    date: string,
    status: string,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      classID: string,
      schoolID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateAnnouncementSubscriptionVariables = {
  filter?: ModelSubscriptionAnnouncementFilterInput | null,
  createdBy?: string | null,
};

export type OnCreateAnnouncementSubscription = {
  onCreateAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    message: string,
    audience?: string | null,
    targetID?: string | null,
    createdBy: string,
    schoolID: string,
    classID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAnnouncementSubscriptionVariables = {
  filter?: ModelSubscriptionAnnouncementFilterInput | null,
  createdBy?: string | null,
};

export type OnUpdateAnnouncementSubscription = {
  onUpdateAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    message: string,
    audience?: string | null,
    targetID?: string | null,
    createdBy: string,
    schoolID: string,
    classID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAnnouncementSubscriptionVariables = {
  filter?: ModelSubscriptionAnnouncementFilterInput | null,
  createdBy?: string | null,
};

export type OnDeleteAnnouncementSubscription = {
  onDeleteAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    message: string,
    audience?: string | null,
    targetID?: string | null,
    createdBy: string,
    schoolID: string,
    classID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
