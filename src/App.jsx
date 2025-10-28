import React from "react";
import Card from "./components/Card";
import InputField from "./components/InputField";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="min-h-screen bg-muted-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <h1 className="my-4 text-align-center bg-color-blue-400 mx-auto">hello to my dashboard</h1>
        <Card title="User & Posts Manager">
          <p>Manage users, posts, and to-dos efficiently.</p>
        </Card>
      <Button label="Submit" onClick={() => alert("Clicked!")} />
        <Card title="Note Manager">
          <p>Create, prioritize, and organize your notes easily.</p>
        </Card>
        <Button label="Cancel" variant="secondary" />

        <Card title="Simple Analytics">
          <p>View quick user and post statistics.</p>
        </Card>
        <Button label="Delete" variant="danger" />

      </div>
    </div>
  );
}
