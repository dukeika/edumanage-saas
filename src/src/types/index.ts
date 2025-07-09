export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
}

export interface ClassItem {
  id: string;
  name: string;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  audience: "CLASS" | "SCHOOL";
}

export interface AttendanceRecord {
  id: string;
  studentName: string;
  date: string;
  status: "PRESENT" | "ABSENT";
}

export interface UpcomingClass {
  id: string;
  name: string;
  date: string;
}