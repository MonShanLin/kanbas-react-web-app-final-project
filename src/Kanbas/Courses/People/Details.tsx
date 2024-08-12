import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import * as client from "./client";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function PeopleDetails({ fetchUsers, selectedUserId }: 
    { fetchUsers: () => void; selectedUserId: string; }) {
  const navigate = useNavigate();
  const { cid } = useParams();
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);

  const fetchUser = async () => {
    if (!selectedUserId) return;
    const user = await client.findUserById(selectedUserId);
    setUser(user);
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email);
    setRole(user.role);
  };

  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName, email, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };

  const deleteUser = async (userId: string) => {
    await client.deleteUser(userId);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };

  useEffect(() => {
    fetchUser();
  }, [selectedUserId]);

  if (!user) return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <IoCloseSharp
        className="fs-1 position-absolute top-0 start-0 m-3 cursor-pointer"
        onClick={() => navigate(`/Kanbas/Courses/${cid}/People`)}
      />

      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      <div className="text-danger fs-4 wd-name">
        {!editing && (
          <FaPencil
            onClick={() => setEditing(true)}
            className="float-end fs-5 mt-2 wd-edit"
          />
        )}
        {editing && (
          <FaCheck
            onClick={saveUser}
            className="float-end fs-5 mt-2 me-2 wd-save"
          />
        )}
        {!editing && (
          <div className="wd-name" onClick={() => setEditing(true)}>
            {user.firstName} {user.lastName}
          </div>
        )}

        {editing && (
          <input
            className="form-control w-50 wd-edit-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveUser();
            }}
          />
        )}
      </div>

      <div className="mt-3">
        <b>Email:</b>
        {!editing ? (
          <div className="wd-email">{user.email}</div>
        ) : (
          <input
            type="email"
            className="form-control w-75 wd-edit-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
      </div>

      <div className="mt-3">
        <b>Roles:</b>
        {!editing ? (
          <div className="wd-roles">{user.role}</div>
        ) : (
          <select
            className="form-select w-50 wd-edit-role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="STUDENT">Student</option>
            <option value="TA">Assistant</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Admin</option>
          </select>
        )}
      </div>

      <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
      <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
      <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>
      
      <hr />
      <button
        onClick={() => deleteUser(selectedUserId)}
        className="btn btn-danger float-end wd-delete"
      >
        Delete
      </button>
      <button
        onClick={() => navigate(`/Kanbas/Courses/${cid}/People`)}
        className="btn btn-secondary float-start float-end me-2 wd-cancel"
      >
        Cancel
      </button>
    </div>
  );
}