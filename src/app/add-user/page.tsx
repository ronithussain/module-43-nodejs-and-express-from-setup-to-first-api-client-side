'use client';
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

const AddUsersPage = () => {
  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
    };
    console.log(data, 'form data');
    // console.log(data, 'form submit successfully! ');
    const response = await fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(data),
    })
    const result = await response.json();
    console.log('after submit post', result);

    if(result.success){
        redirect('/users')
    }
  };

  return (
    <div className="min-h-screen bg-black/10 flex justify-center items-center  ">
      <Form className="w-full max-w-96" onSubmit={onSubmit}>
        <h2 className="text-2xl font-bold mb-2 text-blue-700">Add Users</h2>
        <Fieldset>
          <Fieldset.Legend>Profile Settings</Fieldset.Legend>
          <Description>Update your profile information.</Description>
          <FieldGroup>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>
            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
         
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">
          
              Add User
            </Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
};

export default AddUsersPage;
