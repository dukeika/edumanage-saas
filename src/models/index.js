// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { School, AcademicYear, Term, Class, Student, User, Subject, Assessment, Grade, Attendance, Announcement, CalendarEntry, NewsEntry } = initSchema(schema);

export {
  School,
  AcademicYear,
  Term,
  Class,
  Student,
  User,
  Subject,
  Assessment,
  Grade,
  Attendance,
  Announcement,
  CalendarEntry,
  NewsEntry
};