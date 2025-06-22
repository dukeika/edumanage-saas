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
      address
      admins
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
  APITypes.ListSchoolsQueryVariables,
  APITypes.ListSchoolsQuery
>;
export const getAcademicYear = /* GraphQL */ `query GetAcademicYear($id: ID!) {
  getAcademicYear(id: $id) {
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
      schoolID
      yearLabel
      createdAt
      updatedAt
      owner
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
export const getTerm = /* GraphQL */ `query GetTerm($id: ID!) {
  getTerm(id: $id) {
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
` as GeneratedQuery<APITypes.GetTermQueryVariables, APITypes.GetTermQuery>;
export const listTerms = /* GraphQL */ `query ListTerms(
  $filter: ModelTermFilterInput
  $limit: Int
  $nextToken: String
) {
  listTerms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTermsQueryVariables, APITypes.ListTermsQuery>;
export const getClass = /* GraphQL */ `query GetClass($id: ID!) {
  getClass(id: $id) {
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
` as GeneratedQuery<APITypes.GetClassQueryVariables, APITypes.GetClassQuery>;
export const listClasses = /* GraphQL */ `query ListClasses(
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClassesQueryVariables,
  APITypes.ListClassesQuery
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
      schoolID
      yearLabel
      createdAt
      updatedAt
      owner
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
      academicYearID
      termLabel
      startDate
      endDate
      createdAt
      updatedAt
      owner
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
      schoolID
      name
      teacherID
      studentIDs
      createdAt
      updatedAt
      owner
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
