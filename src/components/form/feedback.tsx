"use client";

import { useState } from "react";
import Form from "@/components/form/form";
import { FIELDS, ATTRIBUTES } from "@/data/form/feedback";
import { useSession } from "next-auth/react";
import { schema } from "@/schemas/feedback";
import { submit } from "@/utils/form";

const Feedback = () => {
  const { data: session } = useSession();

  const [feedback, setFeedback] = useState({
    ...ATTRIBUTES,
    roles: session?.user.roles || {},
    form: "feedback",
  });

  if (!session?.user) return null;

  const onSubmit = async (
    setLoading: (value: boolean) => void,
    setState: (value: number) => void,
  ) => {
    await submit({
      data: feedback,
      schema,
      url: "/api/dashboard/feedback",
      setLoading,
      setState,
    });
  };

  return (
    <Form
      fields={FIELDS}
      object={feedback}
      setObject={setFeedback}
      header="FEEDBACK APPLICATION"
      onSubmit={onSubmit}
      bypass={true}
    />
  );
};

export default Feedback;
