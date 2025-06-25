import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerSchool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<School, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly academicYears?: (AcademicYear | null)[] | null;
  readonly classes?: (Class | null)[] | null;
  readonly students?: (Student | null)[] | null;
  readonly users?: (User | null)[] | null;
  readonly announcements?: (Announcement | null)[] | null;
  readonly owner?: string | null;
  readonly admins?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySchool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<School, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly academicYears: AsyncCollection<AcademicYear>;
  readonly classes: AsyncCollection<Class>;
  readonly students: AsyncCollection<Student>;
  readonly users: AsyncCollection<User>;
  readonly announcements: AsyncCollection<Announcement>;
  readonly owner?: string | null;
  readonly admins?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type School = LazyLoading extends LazyLoadingDisabled ? EagerSchool : LazySchool

export declare const School: (new (init: ModelInit<School>) => School) & {
  copyOf(source: School, mutator: (draft: MutableModel<School>) => MutableModel<School> | void): School;
}

type EagerAcademicYear = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AcademicYear, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly yearLabel: string;
  readonly schoolID: string;
  readonly school?: School | null;
  readonly terms?: (Term | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAcademicYear = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AcademicYear, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly yearLabel: string;
  readonly schoolID: string;
  readonly school: AsyncItem<School | undefined>;
  readonly terms: AsyncCollection<Term>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AcademicYear = LazyLoading extends LazyLoadingDisabled ? EagerAcademicYear : LazyAcademicYear

export declare const AcademicYear: (new (init: ModelInit<AcademicYear>) => AcademicYear) & {
  copyOf(source: AcademicYear, mutator: (draft: MutableModel<AcademicYear>) => MutableModel<AcademicYear> | void): AcademicYear;
}

type EagerTerm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Term, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly termLabel: string;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly academicYearID: string;
  readonly academicYear?: AcademicYear | null;
  readonly assessments?: (Assessment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTerm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Term, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly termLabel: string;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly academicYearID: string;
  readonly academicYear: AsyncItem<AcademicYear | undefined>;
  readonly assessments: AsyncCollection<Assessment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Term = LazyLoading extends LazyLoadingDisabled ? EagerTerm : LazyTerm

export declare const Term: (new (init: ModelInit<Term>) => Term) & {
  copyOf(source: Term, mutator: (draft: MutableModel<Term>) => MutableModel<Term> | void): Term;
}

type EagerClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly schoolID: string;
  readonly school?: School | null;
  readonly teacherID?: string | null;
  readonly students?: (Student | null)[] | null;
  readonly attendances?: (Attendance | null)[] | null;
  readonly subjects?: (Subject | null)[] | null;
  readonly assessments?: (Assessment | null)[] | null;
  readonly grades?: (Grade | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly schoolID: string;
  readonly school: AsyncItem<School | undefined>;
  readonly teacherID?: string | null;
  readonly students: AsyncCollection<Student>;
  readonly attendances: AsyncCollection<Attendance>;
  readonly subjects: AsyncCollection<Subject>;
  readonly assessments: AsyncCollection<Assessment>;
  readonly grades: AsyncCollection<Grade>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Class = LazyLoading extends LazyLoadingDisabled ? EagerClass : LazyClass

export declare const Class: (new (init: ModelInit<Class>) => Class) & {
  copyOf(source: Class, mutator: (draft: MutableModel<Class>) => MutableModel<Class> | void): Class;
}

type EagerStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly classID: string;
  readonly schoolID: string;
  readonly class?: Class | null;
  readonly school?: School | null;
  readonly attendances?: (Attendance | null)[] | null;
  readonly grades?: (Grade | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly classID: string;
  readonly schoolID: string;
  readonly class: AsyncItem<Class | undefined>;
  readonly school: AsyncItem<School | undefined>;
  readonly attendances: AsyncCollection<Attendance>;
  readonly grades: AsyncCollection<Grade>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Student = LazyLoading extends LazyLoadingDisabled ? EagerStudent : LazyStudent

export declare const Student: (new (init: ModelInit<Student>) => Student) & {
  copyOf(source: Student, mutator: (draft: MutableModel<Student>) => MutableModel<Student> | void): Student;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly role: string;
  readonly schoolID: string;
  readonly school?: School | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly role: string;
  readonly schoolID: string;
  readonly school: AsyncItem<School | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerSubject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly classID: string;
  readonly class?: Class | null;
  readonly assessments?: (Assessment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly classID: string;
  readonly class: AsyncItem<Class | undefined>;
  readonly assessments: AsyncCollection<Assessment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Subject = LazyLoading extends LazyLoadingDisabled ? EagerSubject : LazySubject

export declare const Subject: (new (init: ModelInit<Subject>) => Subject) & {
  copyOf(source: Subject, mutator: (draft: MutableModel<Subject>) => MutableModel<Subject> | void): Subject;
}

type EagerAssessment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Assessment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly assessmentDate: string;
  readonly classID: string;
  readonly class?: Class | null;
  readonly subjectID: string;
  readonly subject?: Subject | null;
  readonly termID: string;
  readonly term?: Term | null;
  readonly grades?: (Grade | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssessment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Assessment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly assessmentDate: string;
  readonly classID: string;
  readonly class: AsyncItem<Class | undefined>;
  readonly subjectID: string;
  readonly subject: AsyncItem<Subject | undefined>;
  readonly termID: string;
  readonly term: AsyncItem<Term | undefined>;
  readonly grades: AsyncCollection<Grade>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Assessment = LazyLoading extends LazyLoadingDisabled ? EagerAssessment : LazyAssessment

export declare const Assessment: (new (init: ModelInit<Assessment>) => Assessment) & {
  copyOf(source: Assessment, mutator: (draft: MutableModel<Assessment>) => MutableModel<Assessment> | void): Assessment;
}

type EagerGrade = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grade, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentID: string;
  readonly student?: Student | null;
  readonly assessmentID: string;
  readonly assessment?: Assessment | null;
  readonly score: number;
  readonly classID: string;
  readonly class?: Class | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGrade = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grade, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentID: string;
  readonly student: AsyncItem<Student | undefined>;
  readonly assessmentID: string;
  readonly assessment: AsyncItem<Assessment | undefined>;
  readonly score: number;
  readonly classID: string;
  readonly class: AsyncItem<Class | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Grade = LazyLoading extends LazyLoadingDisabled ? EagerGrade : LazyGrade

export declare const Grade: (new (init: ModelInit<Grade>) => Grade) & {
  copyOf(source: Grade, mutator: (draft: MutableModel<Grade>) => MutableModel<Grade> | void): Grade;
}

type EagerAttendance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attendance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentID: string;
  readonly classID: string;
  readonly date: string;
  readonly status: string;
  readonly student?: Student | null;
  readonly class?: Class | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttendance = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attendance, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentID: string;
  readonly classID: string;
  readonly date: string;
  readonly status: string;
  readonly student: AsyncItem<Student | undefined>;
  readonly class: AsyncItem<Class | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Attendance = LazyLoading extends LazyLoadingDisabled ? EagerAttendance : LazyAttendance

export declare const Attendance: (new (init: ModelInit<Attendance>) => Attendance) & {
  copyOf(source: Attendance, mutator: (draft: MutableModel<Attendance>) => MutableModel<Attendance> | void): Attendance;
}

type EagerAnnouncement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Announcement, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly message: string;
  readonly audience?: string | null;
  readonly targetID?: string | null;
  readonly createdBy: string;
  readonly schoolID: string;
  readonly school?: School | null;
  readonly classID?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyAnnouncement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Announcement, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly message: string;
  readonly audience?: string | null;
  readonly targetID?: string | null;
  readonly createdBy: string;
  readonly schoolID: string;
  readonly school: AsyncItem<School | undefined>;
  readonly classID?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type Announcement = LazyLoading extends LazyLoadingDisabled ? EagerAnnouncement : LazyAnnouncement

export declare const Announcement: (new (init: ModelInit<Announcement>) => Announcement) & {
  copyOf(source: Announcement, mutator: (draft: MutableModel<Announcement>) => MutableModel<Announcement> | void): Announcement;
}