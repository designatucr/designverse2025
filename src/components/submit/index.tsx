"use client";

import { useState } from "react";
import Form from "@/components/form/form";
import { FIELDS, ATTRIBUTES } from "@/data/form/submit";
import { useSession } from "next-auth/react";
import { schema } from "@/schemas/submit";
import { submit } from "@/utils/form";

const Submit = () => {
  const { data: session } = useSession();

  const [submitProject, setSubmitProject] = useState({
    ...ATTRIBUTES,
    firstName: session?.user.firstName || "",
    lastName: session?.user.lastName || "",
    email: session?.user.email || "",
    roles: session?.user.roles || {},
  });

  if (!session?.user) return null;

  const onSubmit = async (
    setLoading: (value: boolean) => void,
    setState: (value: number) => void,
  ) => {
    await submit({
      data: submitProject,
      schema,
      url: "/api/submit",
      setLoading,
      setState,
    });
  };
  return (
    <Form
      fields={FIELDS}
      object={submitProject}
      setObject={setSubmitProject}
      header="SUBMIT A PROJECT"
      onSubmit={onSubmit}
      bypass={true}
    />
  );
};

export default Submit;
