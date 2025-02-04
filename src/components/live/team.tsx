import Image from "next/image";
import Link from "next/link";
import Mock from "@/public/mock/mock_divyank.webp";

const directors = [
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Ashna Pradhan",
    position: "Director",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Sarah Sha",
    position: "Director",
  },
];

const first = [
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Subah Awal",
    position: "Operations",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Tiana Nguyen",
    position: "Operations",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Ashley Tsai",
    position: "Operations",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Kaitlin Ching",
    position: "Marketing",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Hannah Hwang",
    position: "Marketing",
  },
];

const leads = [
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Hrithik Jariwala",
    position: "Marketing",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Adrian Pantoja",
    position: "Sponsorship",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Anjaline Singh",
    position: "Sponsorship",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Amanda Mancia",
    position: "Sponsorship",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Charleen Chen",
    position: "UI/UX",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Saanvi Dalal",
    position: "UI/UX",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Natalie Trinh",
    position: "Public Relations",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Anjali Vaddepaty",
    position: "Public Relations",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Andrew Khadder",
    position: "SWE",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Stanley Lew",
    position: "SWE",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Peter Lu",
    position: "SWE",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/3zwMVvkBe2qIKDObWgXw4N?si=895394f089554963",
    name: "Divyank Shah",
    position: "SWE",
  },
];

const committees = [
  {
    team: "Marketing",
    members: ["Divyank Shah", "Divyank Shah", "Divyank Shah", "Divyank Shah"],
  },
  {
    team: "UI/UX",
    members: ["Divyank Shah", "Divyank Shah", "Divyank Shah", "Divyank Shah"],
  },
  {
    team: "SWE",
    members: ["Divyank Shah", "Divyank Shah", "Divyank Shah", "Divyank Shah"],
  },
  {
    team: "Operations",
    members: ["Divyank Shah", "Divyank Shah", "Divyank Shah", "Divyank Shah"],
  },
  {
    team: "Sponsorship",
    members: ["Divyank Shah", "Divyank Shah", "Divyank Shah", "Divyank Shah"],
  },
  {
    team: "Public Relations",
    members: ["Divyank Shah", "Divyank Shah", "Divyank Shah", "Divyank Shah"],
  },
];

const Team = () => {
  return (
    <div className="flex h-[275vh] flex-col items-center justify-start bg-[#2C6273]">
      <p className="mt-5 flex font-sora text-3xl font-bold text-white lg:mb-8 lg:mt-0 lg:text-5xl">
        MEET THE TEAM
      </p>

      <p className="mt-5 flex font-sora text-xl font-bold text-white lg:mb-8 lg:mt-0 lg:text-3xl">
        LEADS
      </p>

      <div className="grid grid-cols-2 gap-16">
        {directors.map(({ image, profile, name, position }, index) => (
          <Link
            href={profile}
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={image}
              alt="Lead picture"
              width={200}
              height={200}
              className="aspect-square rounded-full hover:scale-110"
            />
            <p className="mt-3 text-2xl font-semibold text-white">{name}</p>
            <p className="mt-3 text-xl font-semibold text-white">{position}</p>
          </Link>
        ))}
      </div>

      <div className="my-16 grid grid-cols-5 gap-16">
        {first.map(({ image, profile, name, position }, index) => (
          <Link
            href={profile}
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={image}
              alt="Lead picture"
              width={200}
              height={200}
              className="aspect-square rounded-full hover:scale-110"
            />
            <p className="mt-3 text-2xl font-semibold text-white">{name}</p>
            <p className="mt-3 text-xl font-semibold text-white">{position}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-16">
        {leads.map(({ image, profile, name, position }, index) => (
          <Link
            href={profile}
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={image}
              alt="Lead picture"
              width={200}
              height={200}
              className="aspect-square rounded-full hover:scale-110"
            />
            <p className="mt-3 text-2xl font-semibold text-white">{name}</p>
            <p className="mt-3 text-xl font-semibold text-white">{position}</p>
          </Link>
        ))}
      </div>

      <p className="mt-5 flex font-sora text-xl font-bold text-white lg:mb-8 lg:mt-12 lg:text-3xl">
        COMMITTEE MEMBERS
      </p>

      <div className="gap- grid grid-cols-3 gap-16 text-center text-white">
        {committees.map(({ team, members }, index) => (
          <div key={index}>
            <p className="text-2xl font-bold">{team}</p>
            {members.map((member, i) => (
              <p key={i} className="my-1 text-lg">
                {member}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
