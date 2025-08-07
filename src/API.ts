/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSchoolInput = {
  id?: string | null,
  name: string,
  subdomain: string,
  status: string,
  logoURL?: string | null,
  heroImageURL?: string | null,
  address?: string | null,
  contactEmail?: string | null,
  phone?: string | null,
  website?: string | null,
  description?: string | null,
  calendar?: Array< CalendarEntryInput | null > | null,
  news?: Array< NewsEntryInput | null > | null,
  schoolAdmin: string,
  admins: Array< string >,
  tempUpdateField?: string | null,
};

export type CalendarEntryInput = {
  label?: string | null,
  start?: string | null,
  end?: string | null,
  message?: string | null,
};

export type NewsEntryInput = {
  title?: string | null,
  message?: string | null,
  date?: string | null,
};

export type ModelSchoolConditionInput = {
  name?: ModelStringInput | null,
  subdomain?: ModelStringInput | null,
  status?: ModelStringInput | null,
  logoURL?: ModelStringInput | null,
  heroImageURL?: ModelStringInput | null,
  address?: ModelStringInput | null,
  contactEmail?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  website?: ModelStringInput | null,
  description?: ModelStringInput | null,
  schoolAdmin?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  tempUpdateField?: ModelStringInput | null,
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
  subdomain: string,
  status: string,
  logoURL?: string | null,
  heroImageURL?: string | null,
  address?: string | null,
  contactEmail?: string | null,
  phone?: string | null,
  website?: string | null,
  description?: string | null,
  calendar?:  Array<CalendarEntry | null > | null,
  news?:  Array<NewsEntry | null > | null,
  schoolAdmin: string,
  admins: Array< string >,
  academicYears?: ModelAcademicYearConnection | null,
  classes?: ModelClassConnection | null,
  students?: ModelStudentConnection | null,
  parents?: ModelParentConnection | null,
  users?: ModelUserConnection | null,
  announcements?: ModelAnnouncementConnection | null,
  tempUpdateField?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type CalendarEntry = {
  __typename: "CalendarEntry",
  label?: string | null,
  start?: string | null,
  end?: string | null,
  message?: string | null,
};

export type NewsEntry = {
  __typename: "NewsEntry",
  title?: string | null,
  message?: string | null,
  date?: string | null,
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
  owner?: string | null,
  admins?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
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
  owner?: string | null,
  admins?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
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
  owner?: string | null,
  admins?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
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
  announcements?: ModelAnnouncementConnection | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
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
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  gender?: string | null,
  studentID: string,
  classID: string,
  schoolID: string,
  class?: Class | null,
  school?: School | null,
  parentStudents?: ModelParentStudentConnection | null,
  attendances?: ModelAttendanceConnection | null,
  grades?: ModelGradeConnection | null,
  medicalInfo?: string | null,
  specialNeeds?: string | null,
  dietaryRestrictions?: string | null,
  userID?: string | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelParentStudentConnection = {
  __typename: "ModelParentStudentConnection",
  items:  Array<ParentStudent | null >,
  nextToken?: string | null,
};

export type ParentStudent = {
  __typename: "ParentStudent",
  id: string,
  parentID: string,
  studentID: string,
  parent?: Parent | null,
  student?: Student | null,
  relationship: string,
  isPrimaryContact: boolean,
  hasPickupRights: boolean,
  hasAccessToGrades: boolean,
  hasAccessToAttendance: boolean,
  legalCustody: boolean,
  custodyNotes?: string | null,
  courtOrderDocument?: string | null,
  schoolAdmins?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type Parent = {
  __typename: "Parent",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  phone?: string | null,
  alternatePhone?: string | null,
  address?: string | null,
  occupation?: string | null,
  employer?: string | null,
  relationshipType: string,
  userID?: string | null,
  schoolID: string,
  school?: School | null,
  parentStudents?: ModelParentStudentConnection | null,
  isEmergencyContact?: boolean | null,
  emergencyContactPriority?: number | null,
  schoolAdmins?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
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
  checkInTime?: string | null,
  checkOutTime?: string | null,
  notes?: string | null,
  student?: Student | null,
  class?: Class | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
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
  owner?: string | null,
  admins?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
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
  owner?: string | null,
  admins?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
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
  audience: string,
  targetID?: string | null,
  priority?: string | null,
  createdBy: string,
  schoolID: string,
  school?: School | null,
  classID?: string | null,
  class?: Class | null,
  viewCount?: number | null,
  acknowledgedBy?: Array< string | null > | null,
  publishDate?: string | null,
  expiryDate?: string | null,
  admins?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items:  Array<Class | null >,
  nextToken?: string | null,
};

export type ModelParentConnection = {
  __typename: "ModelParentConnection",
  items:  Array<Parent | null >,
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
  preferredLanguage?: string | null,
  notificationPreferences?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateSchoolInput = {
  id: string,
  name?: string | null,
  subdomain?: string | null,
  status?: string | null,
  logoURL?: string | null,
  heroImageURL?: string | null,
  address?: string | null,
  contactEmail?: string | null,
  phone?: string | null,
  website?: string | null,
  description?: string | null,
  calendar?: Array< CalendarEntryInput | null > | null,
  news?: Array< NewsEntryInput | null > | null,
  schoolAdmin?: string | null,
  admins?: Array< string > | null,
  tempUpdateField?: string | null,
};

export type DeleteSchoolInput = {
  id: string,
};

export type CreateAcademicYearInput = {
  id?: string | null,
  yearLabel: string,
  schoolID: string,
  owner?: string | null,
  admins?: Array< string | null > | null,
};

export type ModelAcademicYearConditionInput = {
  yearLabel?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
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
  yearLabel?: string | null,
  schoolID?: string | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
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
  owner?: string | null,
  admins?: Array< string | null > | null,
};

export type ModelTermConditionInput = {
  termLabel?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  academicYearID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  and?: Array< ModelTermConditionInput | null > | null,
  or?: Array< ModelTermConditionInput | null > | null,
  not?: ModelTermConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTermInput = {
  id: string,
  termLabel?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  academicYearID?: string | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
};

export type DeleteTermInput = {
  id: string,
};

export type CreateClassInput = {
  id?: string | null,
  name: string,
  schoolID: string,
  teacherID?: string | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
};

export type ModelClassConditionInput = {
  name?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  teacherID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
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
  teacherID?: string | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
};

export type DeleteClassInput = {
  id: string,
};

export type CreateParentInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  phone?: string | null,
  alternatePhone?: string | null,
  address?: string | null,
  occupation?: string | null,
  employer?: string | null,
  relationshipType: string,
  userID?: string | null,
  schoolID: string,
  isEmergencyContact?: boolean | null,
  emergencyContactPriority?: number | null,
  schoolAdmins?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelParentConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  alternatePhone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  occupation?: ModelStringInput | null,
  employer?: ModelStringInput | null,
  relationshipType?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  isEmergencyContact?: ModelBooleanInput | null,
  emergencyContactPriority?: ModelIntInput | null,
  schoolAdmins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelParentConditionInput | null > | null,
  or?: Array< ModelParentConditionInput | null > | null,
  not?: ModelParentConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
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

export type UpdateParentInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  alternatePhone?: string | null,
  address?: string | null,
  occupation?: string | null,
  employer?: string | null,
  relationshipType?: string | null,
  userID?: string | null,
  schoolID?: string | null,
  isEmergencyContact?: boolean | null,
  emergencyContactPriority?: number | null,
  schoolAdmins?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteParentInput = {
  id: string,
};

export type CreateStudentInput = {
  id?: string | null,
  name: string,
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  gender?: string | null,
  studentID: string,
  classID: string,
  schoolID: string,
  medicalInfo?: string | null,
  specialNeeds?: string | null,
  dietaryRestrictions?: string | null,
  userID?: string | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelStudentConditionInput = {
  name?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  studentID?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  schoolID?: ModelIDInput | null,
  medicalInfo?: ModelStringInput | null,
  specialNeeds?: ModelStringInput | null,
  dietaryRestrictions?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
};

export type UpdateStudentInput = {
  id: string,
  name?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  studentID?: string | null,
  classID?: string | null,
  schoolID?: string | null,
  medicalInfo?: string | null,
  specialNeeds?: string | null,
  dietaryRestrictions?: string | null,
  userID?: string | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateParentStudentInput = {
  id?: string | null,
  parentID: string,
  studentID: string,
  relationship: string,
  isPrimaryContact: boolean,
  hasPickupRights: boolean,
  hasAccessToGrades: boolean,
  hasAccessToAttendance: boolean,
  legalCustody: boolean,
  custodyNotes?: string | null,
  courtOrderDocument?: string | null,
  schoolAdmins?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelParentStudentConditionInput = {
  parentID?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  relationship?: ModelStringInput | null,
  isPrimaryContact?: ModelBooleanInput | null,
  hasPickupRights?: ModelBooleanInput | null,
  hasAccessToGrades?: ModelBooleanInput | null,
  hasAccessToAttendance?: ModelBooleanInput | null,
  legalCustody?: ModelBooleanInput | null,
  custodyNotes?: ModelStringInput | null,
  courtOrderDocument?: ModelStringInput | null,
  schoolAdmins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelParentStudentConditionInput | null > | null,
  or?: Array< ModelParentStudentConditionInput | null > | null,
  not?: ModelParentStudentConditionInput | null,
};

export type UpdateParentStudentInput = {
  id: string,
  parentID?: string | null,
  studentID?: string | null,
  relationship?: string | null,
  isPrimaryContact?: boolean | null,
  hasPickupRights?: boolean | null,
  hasAccessToGrades?: boolean | null,
  hasAccessToAttendance?: boolean | null,
  legalCustody?: boolean | null,
  custodyNotes?: string | null,
  courtOrderDocument?: string | null,
  schoolAdmins?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteParentStudentInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  email: string,
  name: string,
  role: string,
  schoolID: string,
  preferredLanguage?: string | null,
  notificationPreferences?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  role?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  preferredLanguage?: ModelStringInput | null,
  notificationPreferences?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  role?: string | null,
  schoolID?: string | null,
  preferredLanguage?: string | null,
  notificationPreferences?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateSubjectInput = {
  id?: string | null,
  name: string,
  classID: string,
  owner?: string | null,
  admins?: Array< string | null > | null,
};

export type ModelSubjectConditionInput = {
  name?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  and?: Array< ModelSubjectConditionInput | null > | null,
  or?: Array< ModelSubjectConditionInput | null > | null,
  not?: ModelSubjectConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateSubjectInput = {
  id: string,
  name?: string | null,
  classID?: string | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
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
  owner?: string | null,
  admins?: Array< string | null > | null,
};

export type ModelAssessmentConditionInput = {
  title?: ModelStringInput | null,
  assessmentDate?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  subjectID?: ModelIDInput | null,
  termID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
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
  classID?: string | null,
  subjectID?: string | null,
  termID?: string | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
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
  owner?: string | null,
  admins?: Array< string | null > | null,
};

export type ModelGradeConditionInput = {
  studentID?: ModelIDInput | null,
  assessmentID?: ModelIDInput | null,
  score?: ModelFloatInput | null,
  classID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
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
  classID?: string | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
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
  checkInTime?: string | null,
  checkOutTime?: string | null,
  notes?: string | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
};

export type ModelAttendanceConditionInput = {
  studentID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  status?: ModelStringInput | null,
  checkInTime?: ModelStringInput | null,
  checkOutTime?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
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
  checkInTime?: string | null,
  checkOutTime?: string | null,
  notes?: string | null,
  owner?: string | null,
  admins?: Array< string | null > | null,
};

export type DeleteAttendanceInput = {
  id: string,
};

export type CreateAnnouncementInput = {
  id?: string | null,
  title: string,
  message: string,
  audience: string,
  targetID?: string | null,
  priority?: string | null,
  createdBy: string,
  schoolID: string,
  classID?: string | null,
  viewCount?: number | null,
  acknowledgedBy?: Array< string | null > | null,
  publishDate?: string | null,
  expiryDate?: string | null,
  admins?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelAnnouncementConditionInput = {
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  audience?: ModelStringInput | null,
  targetID?: ModelIDInput | null,
  priority?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  viewCount?: ModelIntInput | null,
  acknowledgedBy?: ModelStringInput | null,
  publishDate?: ModelStringInput | null,
  expiryDate?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAnnouncementConditionInput | null > | null,
  or?: Array< ModelAnnouncementConditionInput | null > | null,
  not?: ModelAnnouncementConditionInput | null,
};

export type UpdateAnnouncementInput = {
  id: string,
  title?: string | null,
  message?: string | null,
  audience?: string | null,
  targetID?: string | null,
  priority?: string | null,
  createdBy?: string | null,
  schoolID?: string | null,
  classID?: string | null,
  viewCount?: number | null,
  acknowledgedBy?: Array< string | null > | null,
  publishDate?: string | null,
  expiryDate?: string | null,
  admins?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteAnnouncementInput = {
  id: string,
};

export type ModelSchoolFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  subdomain?: ModelStringInput | null,
  status?: ModelStringInput | null,
  logoURL?: ModelStringInput | null,
  heroImageURL?: ModelStringInput | null,
  address?: ModelStringInput | null,
  contactEmail?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  website?: ModelStringInput | null,
  description?: ModelStringInput | null,
  schoolAdmin?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  tempUpdateField?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSchoolFilterInput | null > | null,
  or?: Array< ModelSchoolFilterInput | null > | null,
  not?: ModelSchoolFilterInput | null,
};

export type ModelSchoolConnection = {
  __typename: "ModelSchoolConnection",
  items:  Array<School | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAcademicYearFilterInput = {
  id?: ModelIDInput | null,
  yearLabel?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAcademicYearFilterInput | null > | null,
  or?: Array< ModelAcademicYearFilterInput | null > | null,
  not?: ModelAcademicYearFilterInput | null,
};

export type ModelTermFilterInput = {
  id?: ModelIDInput | null,
  termLabel?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  academicYearID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTermFilterInput | null > | null,
  or?: Array< ModelTermFilterInput | null > | null,
  not?: ModelTermFilterInput | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  teacherID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
};

export type ModelParentFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  alternatePhone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  occupation?: ModelStringInput | null,
  employer?: ModelStringInput | null,
  relationshipType?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  isEmergencyContact?: ModelBooleanInput | null,
  emergencyContactPriority?: ModelIntInput | null,
  schoolAdmins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelParentFilterInput | null > | null,
  or?: Array< ModelParentFilterInput | null > | null,
  not?: ModelParentFilterInput | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  studentID?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  schoolID?: ModelIDInput | null,
  medicalInfo?: ModelStringInput | null,
  specialNeeds?: ModelStringInput | null,
  dietaryRestrictions?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelParentStudentFilterInput = {
  id?: ModelIDInput | null,
  parentID?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  relationship?: ModelStringInput | null,
  isPrimaryContact?: ModelBooleanInput | null,
  hasPickupRights?: ModelBooleanInput | null,
  hasAccessToGrades?: ModelBooleanInput | null,
  hasAccessToAttendance?: ModelBooleanInput | null,
  legalCustody?: ModelBooleanInput | null,
  custodyNotes?: ModelStringInput | null,
  courtOrderDocument?: ModelStringInput | null,
  schoolAdmins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelParentStudentFilterInput | null > | null,
  or?: Array< ModelParentStudentFilterInput | null > | null,
  not?: ModelParentStudentFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  role?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  preferredLanguage?: ModelStringInput | null,
  notificationPreferences?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelSubjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubjectFilterInput | null > | null,
  or?: Array< ModelSubjectFilterInput | null > | null,
  not?: ModelSubjectFilterInput | null,
};

export type ModelAssessmentFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  assessmentDate?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  subjectID?: ModelIDInput | null,
  termID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAssessmentFilterInput | null > | null,
  or?: Array< ModelAssessmentFilterInput | null > | null,
  not?: ModelAssessmentFilterInput | null,
};

export type ModelGradeFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  assessmentID?: ModelIDInput | null,
  score?: ModelFloatInput | null,
  classID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGradeFilterInput | null > | null,
  or?: Array< ModelGradeFilterInput | null > | null,
  not?: ModelGradeFilterInput | null,
};

export type ModelAttendanceFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  status?: ModelStringInput | null,
  checkInTime?: ModelStringInput | null,
  checkOutTime?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAttendanceFilterInput | null > | null,
  or?: Array< ModelAttendanceFilterInput | null > | null,
  not?: ModelAttendanceFilterInput | null,
};

export type ModelAnnouncementFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  audience?: ModelStringInput | null,
  targetID?: ModelIDInput | null,
  priority?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  schoolID?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  viewCount?: ModelIntInput | null,
  acknowledgedBy?: ModelStringInput | null,
  publishDate?: ModelStringInput | null,
  expiryDate?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAnnouncementFilterInput | null > | null,
  or?: Array< ModelAnnouncementFilterInput | null > | null,
  not?: ModelAnnouncementFilterInput | null,
};

export type ModelSubscriptionSchoolFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  subdomain?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  logoURL?: ModelSubscriptionStringInput | null,
  heroImageURL?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  contactEmail?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  tempUpdateField?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionParentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  alternatePhone?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  occupation?: ModelSubscriptionStringInput | null,
  employer?: ModelSubscriptionStringInput | null,
  relationshipType?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  isEmergencyContact?: ModelSubscriptionBooleanInput | null,
  emergencyContactPriority?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionParentFilterInput | null > | null,
  or?: Array< ModelSubscriptionParentFilterInput | null > | null,
  userID?: ModelStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
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

export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  dateOfBirth?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  studentID?: ModelSubscriptionStringInput | null,
  classID?: ModelSubscriptionIDInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  medicalInfo?: ModelSubscriptionStringInput | null,
  specialNeeds?: ModelSubscriptionStringInput | null,
  dietaryRestrictions?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionParentStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  parentID?: ModelSubscriptionIDInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  relationship?: ModelSubscriptionStringInput | null,
  isPrimaryContact?: ModelSubscriptionBooleanInput | null,
  hasPickupRights?: ModelSubscriptionBooleanInput | null,
  hasAccessToGrades?: ModelSubscriptionBooleanInput | null,
  hasAccessToAttendance?: ModelSubscriptionBooleanInput | null,
  legalCustody?: ModelSubscriptionBooleanInput | null,
  custodyNotes?: ModelSubscriptionStringInput | null,
  courtOrderDocument?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionParentStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionParentStudentFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  preferredLanguage?: ModelSubscriptionStringInput | null,
  notificationPreferences?: ModelSubscriptionStringInput | null,
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
  checkInTime?: ModelSubscriptionStringInput | null,
  checkOutTime?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
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
  priority?: ModelSubscriptionStringInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  classID?: ModelSubscriptionIDInput | null,
  viewCount?: ModelSubscriptionIntInput | null,
  acknowledgedBy?: ModelSubscriptionStringInput | null,
  publishDate?: ModelSubscriptionStringInput | null,
  expiryDate?: ModelSubscriptionStringInput | null,
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
    subdomain: string,
    status: string,
    logoURL?: string | null,
    heroImageURL?: string | null,
    address?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    description?: string | null,
    calendar?:  Array< {
      __typename: "CalendarEntry",
      label?: string | null,
      start?: string | null,
      end?: string | null,
      message?: string | null,
    } | null > | null,
    news?:  Array< {
      __typename: "NewsEntry",
      title?: string | null,
      message?: string | null,
      date?: string | null,
    } | null > | null,
    schoolAdmin: string,
    admins: Array< string >,
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
    parents?:  {
      __typename: "ModelParentConnection",
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
    tempUpdateField?: string | null,
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
    subdomain: string,
    status: string,
    logoURL?: string | null,
    heroImageURL?: string | null,
    address?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    description?: string | null,
    calendar?:  Array< {
      __typename: "CalendarEntry",
      label?: string | null,
      start?: string | null,
      end?: string | null,
      message?: string | null,
    } | null > | null,
    news?:  Array< {
      __typename: "NewsEntry",
      title?: string | null,
      message?: string | null,
      date?: string | null,
    } | null > | null,
    schoolAdmin: string,
    admins: Array< string >,
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
    parents?:  {
      __typename: "ModelParentConnection",
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
    tempUpdateField?: string | null,
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
    subdomain: string,
    status: string,
    logoURL?: string | null,
    heroImageURL?: string | null,
    address?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    description?: string | null,
    calendar?:  Array< {
      __typename: "CalendarEntry",
      label?: string | null,
      start?: string | null,
      end?: string | null,
      message?: string | null,
    } | null > | null,
    news?:  Array< {
      __typename: "NewsEntry",
      title?: string | null,
      message?: string | null,
      date?: string | null,
    } | null > | null,
    schoolAdmin: string,
    admins: Array< string >,
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
    parents?:  {
      __typename: "ModelParentConnection",
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
    tempUpdateField?: string | null,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    yearLabel: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    yearLabel: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
    academicYearID: string,
    academicYear?:  {
      __typename: "AcademicYear",
      id: string,
      yearLabel: string,
      schoolID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
    academicYearID: string,
    academicYear?:  {
      __typename: "AcademicYear",
      id: string,
      yearLabel: string,
      schoolID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
    academicYearID: string,
    academicYear?:  {
      __typename: "AcademicYear",
      id: string,
      yearLabel: string,
      schoolID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
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
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
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
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
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
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateParentMutationVariables = {
  input: CreateParentInput,
  condition?: ModelParentConditionInput | null,
};

export type CreateParentMutation = {
  createParent?:  {
    __typename: "Parent",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    alternatePhone?: string | null,
    address?: string | null,
    occupation?: string | null,
    employer?: string | null,
    relationshipType: string,
    userID?: string | null,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    isEmergencyContact?: boolean | null,
    emergencyContactPriority?: number | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateParentMutationVariables = {
  input: UpdateParentInput,
  condition?: ModelParentConditionInput | null,
};

export type UpdateParentMutation = {
  updateParent?:  {
    __typename: "Parent",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    alternatePhone?: string | null,
    address?: string | null,
    occupation?: string | null,
    employer?: string | null,
    relationshipType: string,
    userID?: string | null,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    isEmergencyContact?: boolean | null,
    emergencyContactPriority?: number | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteParentMutationVariables = {
  input: DeleteParentInput,
  condition?: ModelParentConditionInput | null,
};

export type DeleteParentMutation = {
  deleteParent?:  {
    __typename: "Parent",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    alternatePhone?: string | null,
    address?: string | null,
    occupation?: string | null,
    employer?: string | null,
    relationshipType: string,
    userID?: string | null,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    isEmergencyContact?: boolean | null,
    emergencyContactPriority?: number | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    gender?: string | null,
    studentID: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    medicalInfo?: string | null,
    specialNeeds?: string | null,
    dietaryRestrictions?: string | null,
    userID?: string | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    gender?: string | null,
    studentID: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    medicalInfo?: string | null,
    specialNeeds?: string | null,
    dietaryRestrictions?: string | null,
    userID?: string | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    gender?: string | null,
    studentID: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    medicalInfo?: string | null,
    specialNeeds?: string | null,
    dietaryRestrictions?: string | null,
    userID?: string | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateParentStudentMutationVariables = {
  input: CreateParentStudentInput,
  condition?: ModelParentStudentConditionInput | null,
};

export type CreateParentStudentMutation = {
  createParentStudent?:  {
    __typename: "ParentStudent",
    id: string,
    parentID: string,
    studentID: string,
    parent?:  {
      __typename: "Parent",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      alternatePhone?: string | null,
      address?: string | null,
      occupation?: string | null,
      employer?: string | null,
      relationshipType: string,
      userID?: string | null,
      schoolID: string,
      isEmergencyContact?: boolean | null,
      emergencyContactPriority?: number | null,
      schoolAdmins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    relationship: string,
    isPrimaryContact: boolean,
    hasPickupRights: boolean,
    hasAccessToGrades: boolean,
    hasAccessToAttendance: boolean,
    legalCustody: boolean,
    custodyNotes?: string | null,
    courtOrderDocument?: string | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateParentStudentMutationVariables = {
  input: UpdateParentStudentInput,
  condition?: ModelParentStudentConditionInput | null,
};

export type UpdateParentStudentMutation = {
  updateParentStudent?:  {
    __typename: "ParentStudent",
    id: string,
    parentID: string,
    studentID: string,
    parent?:  {
      __typename: "Parent",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      alternatePhone?: string | null,
      address?: string | null,
      occupation?: string | null,
      employer?: string | null,
      relationshipType: string,
      userID?: string | null,
      schoolID: string,
      isEmergencyContact?: boolean | null,
      emergencyContactPriority?: number | null,
      schoolAdmins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    relationship: string,
    isPrimaryContact: boolean,
    hasPickupRights: boolean,
    hasAccessToGrades: boolean,
    hasAccessToAttendance: boolean,
    legalCustody: boolean,
    custodyNotes?: string | null,
    courtOrderDocument?: string | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteParentStudentMutationVariables = {
  input: DeleteParentStudentInput,
  condition?: ModelParentStudentConditionInput | null,
};

export type DeleteParentStudentMutation = {
  deleteParentStudent?:  {
    __typename: "ParentStudent",
    id: string,
    parentID: string,
    studentID: string,
    parent?:  {
      __typename: "Parent",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      alternatePhone?: string | null,
      address?: string | null,
      occupation?: string | null,
      employer?: string | null,
      relationshipType: string,
      userID?: string | null,
      schoolID: string,
      isEmergencyContact?: boolean | null,
      emergencyContactPriority?: number | null,
      schoolAdmins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    relationship: string,
    isPrimaryContact: boolean,
    hasPickupRights: boolean,
    hasAccessToGrades: boolean,
    hasAccessToAttendance: boolean,
    legalCustody: boolean,
    custodyNotes?: string | null,
    courtOrderDocument?: string | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    preferredLanguage?: string | null,
    notificationPreferences?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    preferredLanguage?: string | null,
    notificationPreferences?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    preferredLanguage?: string | null,
    notificationPreferences?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    checkInTime?: string | null,
    checkOutTime?: string | null,
    notes?: string | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    checkInTime?: string | null,
    checkOutTime?: string | null,
    notes?: string | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    checkInTime?: string | null,
    checkOutTime?: string | null,
    notes?: string | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
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
    message: string,
    audience: string,
    targetID?: string | null,
    priority?: string | null,
    createdBy: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    classID?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    viewCount?: number | null,
    acknowledgedBy?: Array< string | null > | null,
    publishDate?: string | null,
    expiryDate?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    audience: string,
    targetID?: string | null,
    priority?: string | null,
    createdBy: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    classID?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    viewCount?: number | null,
    acknowledgedBy?: Array< string | null > | null,
    publishDate?: string | null,
    expiryDate?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    audience: string,
    targetID?: string | null,
    priority?: string | null,
    createdBy: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    classID?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    viewCount?: number | null,
    acknowledgedBy?: Array< string | null > | null,
    publishDate?: string | null,
    expiryDate?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    subdomain: string,
    status: string,
    logoURL?: string | null,
    heroImageURL?: string | null,
    address?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    description?: string | null,
    calendar?:  Array< {
      __typename: "CalendarEntry",
      label?: string | null,
      start?: string | null,
      end?: string | null,
      message?: string | null,
    } | null > | null,
    news?:  Array< {
      __typename: "NewsEntry",
      title?: string | null,
      message?: string | null,
      date?: string | null,
    } | null > | null,
    schoolAdmin: string,
    admins: Array< string >,
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
    parents?:  {
      __typename: "ModelParentConnection",
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
    tempUpdateField?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSchoolsQueryVariables = {
  filter?: ModelSchoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSchoolsQuery = {
  listSchools?:  {
    __typename: "ModelSchoolConnection",
    items:  Array< {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
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
      yearLabel: string,
      schoolID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
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
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
    academicYearID: string,
    academicYear?:  {
      __typename: "AcademicYear",
      id: string,
      yearLabel: string,
      schoolID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
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
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
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
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
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
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
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
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetParentQueryVariables = {
  id: string,
};

export type GetParentQuery = {
  getParent?:  {
    __typename: "Parent",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    alternatePhone?: string | null,
    address?: string | null,
    occupation?: string | null,
    employer?: string | null,
    relationshipType: string,
    userID?: string | null,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    isEmergencyContact?: boolean | null,
    emergencyContactPriority?: number | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListParentsQueryVariables = {
  filter?: ModelParentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParentsQuery = {
  listParents?:  {
    __typename: "ModelParentConnection",
    items:  Array< {
      __typename: "Parent",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      alternatePhone?: string | null,
      address?: string | null,
      occupation?: string | null,
      employer?: string | null,
      relationshipType: string,
      userID?: string | null,
      schoolID: string,
      isEmergencyContact?: boolean | null,
      emergencyContactPriority?: number | null,
      schoolAdmins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ParentsByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelParentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ParentsByEmailQuery = {
  parentsByEmail?:  {
    __typename: "ModelParentConnection",
    items:  Array< {
      __typename: "Parent",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      alternatePhone?: string | null,
      address?: string | null,
      occupation?: string | null,
      employer?: string | null,
      relationshipType: string,
      userID?: string | null,
      schoolID: string,
      isEmergencyContact?: boolean | null,
      emergencyContactPriority?: number | null,
      schoolAdmins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ParentsBySchoolIDQueryVariables = {
  schoolID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelParentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ParentsBySchoolIDQuery = {
  parentsBySchoolID?:  {
    __typename: "ModelParentConnection",
    items:  Array< {
      __typename: "Parent",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      alternatePhone?: string | null,
      address?: string | null,
      occupation?: string | null,
      employer?: string | null,
      relationshipType: string,
      userID?: string | null,
      schoolID: string,
      isEmergencyContact?: boolean | null,
      emergencyContactPriority?: number | null,
      schoolAdmins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    gender?: string | null,
    studentID: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    medicalInfo?: string | null,
    specialNeeds?: string | null,
    dietaryRestrictions?: string | null,
    userID?: string | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudentsByStudentIDQueryVariables = {
  studentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudentsByStudentIDQuery = {
  studentsByStudentID?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudentsByClassIDQueryVariables = {
  classID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudentsByClassIDQuery = {
  studentsByClassID?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetParentStudentQueryVariables = {
  id: string,
};

export type GetParentStudentQuery = {
  getParentStudent?:  {
    __typename: "ParentStudent",
    id: string,
    parentID: string,
    studentID: string,
    parent?:  {
      __typename: "Parent",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      alternatePhone?: string | null,
      address?: string | null,
      occupation?: string | null,
      employer?: string | null,
      relationshipType: string,
      userID?: string | null,
      schoolID: string,
      isEmergencyContact?: boolean | null,
      emergencyContactPriority?: number | null,
      schoolAdmins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    relationship: string,
    isPrimaryContact: boolean,
    hasPickupRights: boolean,
    hasAccessToGrades: boolean,
    hasAccessToAttendance: boolean,
    legalCustody: boolean,
    custodyNotes?: string | null,
    courtOrderDocument?: string | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListParentStudentsQueryVariables = {
  filter?: ModelParentStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParentStudentsQuery = {
  listParentStudents?:  {
    __typename: "ModelParentStudentConnection",
    items:  Array< {
      __typename: "ParentStudent",
      id: string,
      parentID: string,
      studentID: string,
      relationship: string,
      isPrimaryContact: boolean,
      hasPickupRights: boolean,
      hasAccessToGrades: boolean,
      hasAccessToAttendance: boolean,
      legalCustody: boolean,
      custodyNotes?: string | null,
      courtOrderDocument?: string | null,
      schoolAdmins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ParentStudentsByParentIDQueryVariables = {
  parentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelParentStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ParentStudentsByParentIDQuery = {
  parentStudentsByParentID?:  {
    __typename: "ModelParentStudentConnection",
    items:  Array< {
      __typename: "ParentStudent",
      id: string,
      parentID: string,
      studentID: string,
      relationship: string,
      isPrimaryContact: boolean,
      hasPickupRights: boolean,
      hasAccessToGrades: boolean,
      hasAccessToAttendance: boolean,
      legalCustody: boolean,
      custodyNotes?: string | null,
      courtOrderDocument?: string | null,
      schoolAdmins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ParentStudentsByStudentIDQueryVariables = {
  studentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelParentStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ParentStudentsByStudentIDQuery = {
  parentStudentsByStudentID?:  {
    __typename: "ModelParentStudentConnection",
    items:  Array< {
      __typename: "ParentStudent",
      id: string,
      parentID: string,
      studentID: string,
      relationship: string,
      isPrimaryContact: boolean,
      hasPickupRights: boolean,
      hasAccessToGrades: boolean,
      hasAccessToAttendance: boolean,
      legalCustody: boolean,
      custodyNotes?: string | null,
      courtOrderDocument?: string | null,
      schoolAdmins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    preferredLanguage?: string | null,
    notificationPreferences?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
      preferredLanguage?: string | null,
      notificationPreferences?: string | null,
      owner?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByEmailQuery = {
  usersByEmail?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      role: string,
      schoolID: string,
      preferredLanguage?: string | null,
      notificationPreferences?: string | null,
      owner?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
      email: string,
      name: string,
      role: string,
      schoolID: string,
      preferredLanguage?: string | null,
      notificationPreferences?: string | null,
      owner?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
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
      classID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
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
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AssessmentsByClassIDQueryVariables = {
  classID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAssessmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AssessmentsByClassIDQuery = {
  assessmentsByClassID?:  {
    __typename: "ModelAssessmentConnection",
    items:  Array< {
      __typename: "Assessment",
      id: string,
      title: string,
      assessmentDate: string,
      classID: string,
      subjectID: string,
      termID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
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
      classID: string,
      subjectID: string,
      termID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AssessmentsByTermIDQueryVariables = {
  termID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAssessmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AssessmentsByTermIDQuery = {
  assessmentsByTermID?:  {
    __typename: "ModelAssessmentConnection",
    items:  Array< {
      __typename: "Assessment",
      id: string,
      title: string,
      assessmentDate: string,
      classID: string,
      subjectID: string,
      termID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
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
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
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
      classID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
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
      classID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GradesByClassIDQueryVariables = {
  classID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGradeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GradesByClassIDQuery = {
  gradesByClassID?:  {
    __typename: "ModelGradeConnection",
    items:  Array< {
      __typename: "Grade",
      id: string,
      studentID: string,
      assessmentID: string,
      score: number,
      classID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
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
    checkInTime?: string | null,
    checkOutTime?: string | null,
    notes?: string | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      checkInTime?: string | null,
      checkOutTime?: string | null,
      notes?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
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
      checkInTime?: string | null,
      checkOutTime?: string | null,
      notes?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
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
      checkInTime?: string | null,
      checkOutTime?: string | null,
      notes?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
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
    message: string,
    audience: string,
    targetID?: string | null,
    priority?: string | null,
    createdBy: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    classID?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    viewCount?: number | null,
    acknowledgedBy?: Array< string | null > | null,
    publishDate?: string | null,
    expiryDate?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
      audience: string,
      targetID?: string | null,
      priority?: string | null,
      createdBy: string,
      schoolID: string,
      classID?: string | null,
      viewCount?: number | null,
      acknowledgedBy?: Array< string | null > | null,
      publishDate?: string | null,
      expiryDate?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
      message: string,
      audience: string,
      targetID?: string | null,
      priority?: string | null,
      createdBy: string,
      schoolID: string,
      classID?: string | null,
      viewCount?: number | null,
      acknowledgedBy?: Array< string | null > | null,
      publishDate?: string | null,
      expiryDate?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AnnouncementsByClassIDQueryVariables = {
  classID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAnnouncementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AnnouncementsByClassIDQuery = {
  announcementsByClassID?:  {
    __typename: "ModelAnnouncementConnection",
    items:  Array< {
      __typename: "Announcement",
      id: string,
      title: string,
      message: string,
      audience: string,
      targetID?: string | null,
      priority?: string | null,
      createdBy: string,
      schoolID: string,
      classID?: string | null,
      viewCount?: number | null,
      acknowledgedBy?: Array< string | null > | null,
      publishDate?: string | null,
      expiryDate?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
    subdomain: string,
    status: string,
    logoURL?: string | null,
    heroImageURL?: string | null,
    address?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    description?: string | null,
    calendar?:  Array< {
      __typename: "CalendarEntry",
      label?: string | null,
      start?: string | null,
      end?: string | null,
      message?: string | null,
    } | null > | null,
    news?:  Array< {
      __typename: "NewsEntry",
      title?: string | null,
      message?: string | null,
      date?: string | null,
    } | null > | null,
    schoolAdmin: string,
    admins: Array< string >,
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
    parents?:  {
      __typename: "ModelParentConnection",
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
    tempUpdateField?: string | null,
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
    subdomain: string,
    status: string,
    logoURL?: string | null,
    heroImageURL?: string | null,
    address?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    description?: string | null,
    calendar?:  Array< {
      __typename: "CalendarEntry",
      label?: string | null,
      start?: string | null,
      end?: string | null,
      message?: string | null,
    } | null > | null,
    news?:  Array< {
      __typename: "NewsEntry",
      title?: string | null,
      message?: string | null,
      date?: string | null,
    } | null > | null,
    schoolAdmin: string,
    admins: Array< string >,
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
    parents?:  {
      __typename: "ModelParentConnection",
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
    tempUpdateField?: string | null,
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
    subdomain: string,
    status: string,
    logoURL?: string | null,
    heroImageURL?: string | null,
    address?: string | null,
    contactEmail?: string | null,
    phone?: string | null,
    website?: string | null,
    description?: string | null,
    calendar?:  Array< {
      __typename: "CalendarEntry",
      label?: string | null,
      start?: string | null,
      end?: string | null,
      message?: string | null,
    } | null > | null,
    news?:  Array< {
      __typename: "NewsEntry",
      title?: string | null,
      message?: string | null,
      date?: string | null,
    } | null > | null,
    schoolAdmin: string,
    admins: Array< string >,
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
    parents?:  {
      __typename: "ModelParentConnection",
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
    tempUpdateField?: string | null,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    terms?:  {
      __typename: "ModelTermConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
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
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
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
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
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
    announcements?:  {
      __typename: "ModelAnnouncementConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateParentSubscriptionVariables = {
  filter?: ModelSubscriptionParentFilterInput | null,
  userID?: string | null,
};

export type OnCreateParentSubscription = {
  onCreateParent?:  {
    __typename: "Parent",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    alternatePhone?: string | null,
    address?: string | null,
    occupation?: string | null,
    employer?: string | null,
    relationshipType: string,
    userID?: string | null,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    isEmergencyContact?: boolean | null,
    emergencyContactPriority?: number | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateParentSubscriptionVariables = {
  filter?: ModelSubscriptionParentFilterInput | null,
  userID?: string | null,
};

export type OnUpdateParentSubscription = {
  onUpdateParent?:  {
    __typename: "Parent",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    alternatePhone?: string | null,
    address?: string | null,
    occupation?: string | null,
    employer?: string | null,
    relationshipType: string,
    userID?: string | null,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    isEmergencyContact?: boolean | null,
    emergencyContactPriority?: number | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteParentSubscriptionVariables = {
  filter?: ModelSubscriptionParentFilterInput | null,
  userID?: string | null,
};

export type OnDeleteParentSubscription = {
  onDeleteParent?:  {
    __typename: "Parent",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone?: string | null,
    alternatePhone?: string | null,
    address?: string | null,
    occupation?: string | null,
    employer?: string | null,
    relationshipType: string,
    userID?: string | null,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    isEmergencyContact?: boolean | null,
    emergencyContactPriority?: number | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    gender?: string | null,
    studentID: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    medicalInfo?: string | null,
    specialNeeds?: string | null,
    dietaryRestrictions?: string | null,
    userID?: string | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    gender?: string | null,
    studentID: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    medicalInfo?: string | null,
    specialNeeds?: string | null,
    dietaryRestrictions?: string | null,
    userID?: string | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    gender?: string | null,
    studentID: string,
    classID: string,
    schoolID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentStudents?:  {
      __typename: "ModelParentStudentConnection",
      nextToken?: string | null,
    } | null,
    attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    medicalInfo?: string | null,
    specialNeeds?: string | null,
    dietaryRestrictions?: string | null,
    userID?: string | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateParentStudentSubscriptionVariables = {
  filter?: ModelSubscriptionParentStudentFilterInput | null,
};

export type OnCreateParentStudentSubscription = {
  onCreateParentStudent?:  {
    __typename: "ParentStudent",
    id: string,
    parentID: string,
    studentID: string,
    parent?:  {
      __typename: "Parent",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      alternatePhone?: string | null,
      address?: string | null,
      occupation?: string | null,
      employer?: string | null,
      relationshipType: string,
      userID?: string | null,
      schoolID: string,
      isEmergencyContact?: boolean | null,
      emergencyContactPriority?: number | null,
      schoolAdmins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    relationship: string,
    isPrimaryContact: boolean,
    hasPickupRights: boolean,
    hasAccessToGrades: boolean,
    hasAccessToAttendance: boolean,
    legalCustody: boolean,
    custodyNotes?: string | null,
    courtOrderDocument?: string | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateParentStudentSubscriptionVariables = {
  filter?: ModelSubscriptionParentStudentFilterInput | null,
};

export type OnUpdateParentStudentSubscription = {
  onUpdateParentStudent?:  {
    __typename: "ParentStudent",
    id: string,
    parentID: string,
    studentID: string,
    parent?:  {
      __typename: "Parent",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      alternatePhone?: string | null,
      address?: string | null,
      occupation?: string | null,
      employer?: string | null,
      relationshipType: string,
      userID?: string | null,
      schoolID: string,
      isEmergencyContact?: boolean | null,
      emergencyContactPriority?: number | null,
      schoolAdmins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    relationship: string,
    isPrimaryContact: boolean,
    hasPickupRights: boolean,
    hasAccessToGrades: boolean,
    hasAccessToAttendance: boolean,
    legalCustody: boolean,
    custodyNotes?: string | null,
    courtOrderDocument?: string | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteParentStudentSubscriptionVariables = {
  filter?: ModelSubscriptionParentStudentFilterInput | null,
};

export type OnDeleteParentStudentSubscription = {
  onDeleteParentStudent?:  {
    __typename: "ParentStudent",
    id: string,
    parentID: string,
    studentID: string,
    parent?:  {
      __typename: "Parent",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      phone?: string | null,
      alternatePhone?: string | null,
      address?: string | null,
      occupation?: string | null,
      employer?: string | null,
      relationshipType: string,
      userID?: string | null,
      schoolID: string,
      isEmergencyContact?: boolean | null,
      emergencyContactPriority?: number | null,
      schoolAdmins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    relationship: string,
    isPrimaryContact: boolean,
    hasPickupRights: boolean,
    hasAccessToGrades: boolean,
    hasAccessToAttendance: boolean,
    legalCustody: boolean,
    custodyNotes?: string | null,
    courtOrderDocument?: string | null,
    schoolAdmins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    preferredLanguage?: string | null,
    notificationPreferences?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    preferredLanguage?: string | null,
    notificationPreferences?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    preferredLanguage?: string | null,
    notificationPreferences?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    assessments?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Subject",
      id: string,
      name: string,
      classID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    termID: string,
    term?:  {
      __typename: "Term",
      id: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      academicYearID: string,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    score: number,
    classID: string,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
    checkInTime?: string | null,
    checkOutTime?: string | null,
    notes?: string | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
    checkInTime?: string | null,
    checkOutTime?: string | null,
    notes?: string | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
    checkInTime?: string | null,
    checkOutTime?: string | null,
    notes?: string | null,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      dateOfBirth: string,
      gender?: string | null,
      studentID: string,
      classID: string,
      schoolID: string,
      medicalInfo?: string | null,
      specialNeeds?: string | null,
      dietaryRestrictions?: string | null,
      userID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    owner?: string | null,
    admins?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
    audience: string,
    targetID?: string | null,
    priority?: string | null,
    createdBy: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    classID?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    viewCount?: number | null,
    acknowledgedBy?: Array< string | null > | null,
    publishDate?: string | null,
    expiryDate?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    audience: string,
    targetID?: string | null,
    priority?: string | null,
    createdBy: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    classID?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    viewCount?: number | null,
    acknowledgedBy?: Array< string | null > | null,
    publishDate?: string | null,
    expiryDate?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
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
    audience: string,
    targetID?: string | null,
    priority?: string | null,
    createdBy: string,
    schoolID: string,
    school?:  {
      __typename: "School",
      id: string,
      name: string,
      subdomain: string,
      status: string,
      logoURL?: string | null,
      heroImageURL?: string | null,
      address?: string | null,
      contactEmail?: string | null,
      phone?: string | null,
      website?: string | null,
      description?: string | null,
      schoolAdmin: string,
      admins: Array< string >,
      tempUpdateField?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    classID?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      schoolID: string,
      teacherID?: string | null,
      owner?: string | null,
      admins?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    viewCount?: number | null,
    acknowledgedBy?: Array< string | null > | null,
    publishDate?: string | null,
    expiryDate?: string | null,
    admins?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
