import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  course: string;
  due: string;
  available: string;
  points: number;
  editing?: boolean;
}

const initialState = {
  assignments: assignments.map(assignment => ({ ...assignment, editing: false })),
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        ...assignment,
        _id: new Date().getTime().toString(),
        editing: false,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      );
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;