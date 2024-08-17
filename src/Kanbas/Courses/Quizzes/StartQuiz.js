import React from 'react';

export default function StartQuizScreen({ userRole }: { userRole: string }) {
  return (
    <div>
      <h1>Start Quiz Screen</h1>
      <p>User Role: {userRole}</p>
      {/* Add your quiz start screen logic here */}
    </div>
  );
}
