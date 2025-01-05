import "next-auth";

declare module "next-auth" {
  export interface User {
    id: string;
    email: string;
    name: string;
    image: string;
    roles: {
      [key: string]: number;
    };
    team: string;
    photo: string;
  }

  export interface Session {
    user: User;
  }
}
