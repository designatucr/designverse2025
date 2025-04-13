"use client";
import { useState } from "react";
import Form from "./form";
import { submit } from "@/utils/form";
import { schema } from "@/schemas/judging";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";
import { FIELDS } from "@/data/judge/form";
interface props {
  id: string;
  name: string;
  round: string;
  table: string;
}

const Start = ({ id, name, round, table }: props) => {
  const [form, setForm] = useState({
    teamId: id,
    teamName: name,
    round: round,
    table,
    tracks: [],
    implementation: { rating: 0, comment: "" },
    idea: { rating: 0, comment: "" },
    design: { rating: 0, comment: "" },
  });
  const onSubmit = async (
    setLoading: (value: boolean) => void,
    setState: (value: number) => void,
  ) => {
    await submit({
      data: form,
      schema: schema,
      url: "/api/judging/start",
      method: "PUT",
      setLoading,
      setState,
    });
  };
  // const onSubmit = async () => {
  //   try {
  //     const result = await api({
  //       method: "PUT",
  //       url: "/api/judging/start",
  //       body: form,
  //     });
  //     console.log("✅ Success:", result);
  //     toaster("Submitted successfully!", "success");
  //   } catch (err) {
  //     console.error("❌ API Error:", err);
  //     toaster("Something went wrong", "error");
  //   }
  // };
  return (
    <Form
      fields={FIELDS}
      object={form}
      setObject={setForm}
      header={`Team ${table} - ${name}`}
      onSubmit={onSubmit}
      round={round}
    />
  );
};

export default Start;
