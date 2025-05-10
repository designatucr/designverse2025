import { AUTH } from "@/data/admin/dashboard";
import { authenticate } from "@/utils/auth";
import { db } from "@/utils/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { NextResponse } from "next/server";

interface project {
  firstName: string;
  lastName: string[];
  email: string;
  discord: string;
  project: string;
  slides: string;
  design: string;
  devpost: string;
  mlh: boolean;
  number: number;
  timestamp: Date;
}

export const GET = async () => {
  const res = NextResponse;
  const { auth, message } = await authenticate(AUTH.GET);

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth },
    );
  }

  try {
    const mlh: project[] = [];
    const nonmlh: project[] = [];

    const snapshot = await getDocs(query(collection(db, "submissions")));

    snapshot.forEach((doc) => {
      const data = doc.data() as project;

      if (data["mlh"]) mlh.push(data);
      else nonmlh.push(data);
    });

    const output = [...mlh, ...nonmlh];

    let index = 1;

    output.forEach((project) => {
      project["number"] = index;
      index += 1;
    });

    return res.json(
      {
        message: "OK",
        items: output,
      },
      { status: 200 },
    );
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
};

export const POST = async (req: Request) => {
  const { auth, message } = await authenticate(AUTH.POST);

  const res = NextResponse;

  if (auth !== 200) {
    return res.json(
      { message: `Authentication Error: ${message}` },
      { status: auth },
    );
  }

  const {
    firstName,
    lastName,
    email,
    discord,
    project,
    slides,
    design,
    devpost,
    copilot,
  } = await req.json();

  try {
    await setDoc(doc(db, "submissions", email), {
      firstName,
      lastName,
      email,
      discord,
      project,
      slides,
      design,
      devpost,
      mlh: copilot === "Yes" ? true : false,
      timestamp: Timestamp.now(),
    });
    return res.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return res.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
};
