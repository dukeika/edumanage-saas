import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RecordAttendance from "../pages/admin/RecordAttendance";
import * as authUtils from "../utils/auth";
import { generateClient } from "aws-amplify/api";

jest.mock("aws-amplify/api");
jest.mock("../utils/auth");

const mockClient = {
  graphql: jest.fn(),
};

beforeEach(() => {
  (generateClient as jest.Mock).mockReturnValue(mockClient);
  (authUtils.getCurrentUserInfo as jest.Mock).mockResolvedValue({
    sub: "school-123",
  });
});

test("renders class selector and attendance list", async () => {
  mockClient.graphql
    .mockResolvedValueOnce({
      data: { listClasses: { items: [{ id: "class1", name: "Primary 1" }] } },
    })
    .mockResolvedValueOnce({
      data: { listStudents: { items: [{ id: "student1", name: "John Doe" }] } },
    });

  render(<RecordAttendance />);

  await waitFor(() => screen.getByText("Record Attendance"));
  fireEvent.mouseDown(screen.getByLabelText("Class"));
  fireEvent.click(screen.getByText("Primary 1"));

  await waitFor(() => screen.getByText("John Doe"));
  expect(screen.getByText("John Doe")).toBeInTheDocument();
});

test("submits attendance successfully", async () => {
  mockClient.graphql
    .mockResolvedValueOnce({
      data: { listClasses: { items: [{ id: "class1", name: "Primary 1" }] } },
    })
    .mockResolvedValueOnce({
      data: { listStudents: { items: [{ id: "student1", name: "John Doe" }] } },
    })
    .mockResolvedValue({});

  window.alert = jest.fn();

  render(<RecordAttendance />);
  await waitFor(() => screen.getByLabelText("Class"));
  fireEvent.mouseDown(screen.getByLabelText("Class"));
  fireEvent.click(screen.getByText("Primary 1"));

  await waitFor(() => screen.getByText("John Doe"));

  fireEvent.click(screen.getByLabelText("John Doe"));
  fireEvent.click(screen.getByText("Submit Attendance"));

  await waitFor(() => {
    expect(window.alert).toHaveBeenCalledWith(
      "Attendance recorded successfully!"
    );
  });
});
