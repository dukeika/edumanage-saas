/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSchoolInput = {
  id?: string | null,
  name: string,
  address?: string | null,
  admins?: Array< string | null > | null,
  owner?: string | null,
};

export type ModelSchoolConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  owner?: ModelStringInput | null,
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
  academicYears?: ModelAcademicYearConnection | null,
  classes?: ModelClassConnection | null,
  admins?: Array< string | null > | null,
  owner?: string | null,
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
  schoolID: string,
  yearLabel: string,
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
  academicYearID: string,
  termLabel: string,
  startDate?: string | null,
  endDate?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items:  Array<Class | null >,
  nextToken?: string | null,
};

export type Class = {
  __typename: "Class",
  id: string,
  schoolID: string,
  name: string,
  teacherID?: string | null,
  studentIDs?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateSchoolInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  admins?: Array< string | null > | null,
  owner?: string | null,
};

export type DeleteSchoolInput = {
  id: string,
};

export type CreateAcademicYearInput = {
  id?: string | null,
  schoolID: string,
  yearLabel: string,
};

export type ModelAcademicYearConditionInput = {
  schoolID?: ModelIDInput | null,
  yearLabel?: ModelStringInput | null,
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
  schoolID?: string | null,
  yearLabel?: string | null,
};

export type DeleteAcademicYearInput = {
  id: string,
};

export type CreateTermInput = {
  id?: string | null,
  academicYearID: string,
  termLabel: string,
  startDate?: string | null,
  endDate?: string | null,
};

export type ModelTermConditionInput = {
  academicYearID?: ModelIDInput | null,
  termLabel?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  and?: Array< ModelTermConditionInput | null > | null,
  or?: Array< ModelTermConditionInput | null > | null,
  not?: ModelTermConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateTermInput = {
  id: string,
  academicYearID?: string | null,
  termLabel?: string | null,
  startDate?: string | null,
  endDate?: string | null,
};

export type DeleteTermInput = {
  id: string,
};

export type CreateClassInput = {
  id?: string | null,
  schoolID: string,
  name: string,
  teacherID?: string | null,
  studentIDs?: Array< string | null > | null,
};

export type ModelClassConditionInput = {
  schoolID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  studentIDs?: ModelIDInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateClassInput = {
  id: string,
  schoolID?: string | null,
  name?: string | null,
  teacherID?: string | null,
  studentIDs?: Array< string | null > | null,
};

export type DeleteClassInput = {
  id: string,
};

export type ModelSchoolFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  admins?: ModelStringInput | null,
  owner?: ModelStringInput | null,
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

export type ModelAcademicYearFilterInput = {
  id?: ModelIDInput | null,
  schoolID?: ModelIDInput | null,
  yearLabel?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAcademicYearFilterInput | null > | null,
  or?: Array< ModelAcademicYearFilterInput | null > | null,
  not?: ModelAcademicYearFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelTermFilterInput = {
  id?: ModelIDInput | null,
  academicYearID?: ModelIDInput | null,
  termLabel?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTermFilterInput | null > | null,
  or?: Array< ModelTermFilterInput | null > | null,
  not?: ModelTermFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  schoolID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  studentIDs?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
  owner?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionSchoolFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSchoolFilterInput | null > | null,
  or?: Array< ModelSubscriptionSchoolFilterInput | null > | null,
  owner?: ModelStringInput | null,
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
  schoolID?: ModelSubscriptionIDInput | null,
  yearLabel?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAcademicYearFilterInput | null > | null,
  or?: Array< ModelSubscriptionAcademicYearFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionTermFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  academicYearID?: ModelSubscriptionIDInput | null,
  termLabel?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTermFilterInput | null > | null,
  or?: Array< ModelSubscriptionTermFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionClassFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  schoolID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  teacherID?: ModelSubscriptionIDInput | null,
  studentIDs?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClassFilterInput | null > | null,
  or?: Array< ModelSubscriptionClassFilterInput | null > | null,
  owner?: ModelStringInput | null,
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
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    admins?: Array< string | null > | null,
    owner?: string | null,
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
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    admins?: Array< string | null > | null,
    owner?: string | null,
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
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    admins?: Array< string | null > | null,
    owner?: string | null,
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
    schoolID: string,
    yearLabel: string,
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
    schoolID: string,
    yearLabel: string,
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
    schoolID: string,
    yearLabel: string,
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
    academicYearID: string,
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
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
    academicYearID: string,
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
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
    academicYearID: string,
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
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
    schoolID: string,
    name: string,
    teacherID?: string | null,
    studentIDs?: Array< string | null > | null,
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
    schoolID: string,
    name: string,
    teacherID?: string | null,
    studentIDs?: Array< string | null > | null,
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
    schoolID: string,
    name: string,
    teacherID?: string | null,
    studentIDs?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    admins?: Array< string | null > | null,
    owner?: string | null,
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
      address?: string | null,
      admins?: Array< string | null > | null,
      owner?: string | null,
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
    schoolID: string,
    yearLabel: string,
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
      schoolID: string,
      yearLabel: string,
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
    academicYearID: string,
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
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
      academicYearID: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
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
    schoolID: string,
    name: string,
    teacherID?: string | null,
    studentIDs?: Array< string | null > | null,
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
      schoolID: string,
      name: string,
      teacherID?: string | null,
      studentIDs?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
      schoolID: string,
      yearLabel: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
      academicYearID: string,
      termLabel: string,
      startDate?: string | null,
      endDate?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
      schoolID: string,
      name: string,
      teacherID?: string | null,
      studentIDs?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
  owner?: string | null,
};

export type OnCreateSchoolSubscription = {
  onCreateSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    address?: string | null,
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    admins?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSchoolSubscription = {
  onUpdateSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    address?: string | null,
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    admins?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSchoolSubscriptionVariables = {
  filter?: ModelSubscriptionSchoolFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSchoolSubscription = {
  onDeleteSchool?:  {
    __typename: "School",
    id: string,
    name: string,
    address?: string | null,
    academicYears?:  {
      __typename: "ModelAcademicYearConnection",
      nextToken?: string | null,
    } | null,
    classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    admins?: Array< string | null > | null,
    owner?: string | null,
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
    schoolID: string,
    yearLabel: string,
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
    schoolID: string,
    yearLabel: string,
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
    schoolID: string,
    yearLabel: string,
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
    academicYearID: string,
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
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
    academicYearID: string,
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
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
    academicYearID: string,
    termLabel: string,
    startDate?: string | null,
    endDate?: string | null,
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
    schoolID: string,
    name: string,
    teacherID?: string | null,
    studentIDs?: Array< string | null > | null,
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
    schoolID: string,
    name: string,
    teacherID?: string | null,
    studentIDs?: Array< string | null > | null,
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
    schoolID: string,
    name: string,
    teacherID?: string | null,
    studentIDs?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
