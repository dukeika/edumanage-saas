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
    academicYears {
      nextToken
      __typename
    }
    classes {
      nextToken
      __typename
    }
    admins
    owner
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
    academicYears {
      nextToken
      __typename
    }
    classes {
      nextToken
      __typename
    }
    admins
    owner
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
    academicYears {
      nextToken
      __typename
    }
    classes {
      nextToken
      __typename
    }
    admins
    owner
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
    schoolID
    yearLabel
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
    schoolID
    yearLabel
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
    schoolID
    yearLabel
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
    academicYearID
    termLabel
    startDate
    endDate
    createdAt
    updatedAt
    owner
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
    academicYearID
    termLabel
    startDate
    endDate
    createdAt
    updatedAt
    owner
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
    academicYearID
    termLabel
    startDate
    endDate
    createdAt
    updatedAt
    owner
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
    schoolID
    name
    teacherID
    studentIDs
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
    schoolID
    name
    teacherID
    studentIDs
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
    schoolID
    name
    teacherID
    studentIDs
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
