export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  classId?: string;
}
export interface Teacher {
  id: string;
  name: string;
  email: string;
  classIds?: string[];
}
export interface ClassItem {
  id: string;
  name: string;
}
export type AudienceType = "CLASS" | "SCHOOL";
export interface Announcement {
  id: string;
  title: string;
  body: string;
  audience: AudienceType;
}
export interface AttendanceRecord {
  id: string;
  studentName: string;
  date: string; // ISO date
  status: "PRESENT" | "ABSENT";
}
export interface UpcomingClass {
  id: string;
  name: string;
  date: string; // ISO date
}
