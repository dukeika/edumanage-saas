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
` as GeneratedMutation<
  APITypes.DeleteClassMutationVariables,
  APITypes.DeleteClassMutation
>;
