import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { api } from "./axiosConfig";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);

        //API Fec
        const { data } = await api.post("/auth/login", credentials);
        // if (username == "admin" && password == "admin123") {
        //   return { id: 1, name: "super admin", email: "admin@sldfjkl.com" };
        // }
        if (!data) {
          throw new Error("Invalid credentials");
        }
        return data;
      },
    }),
  ],
//   callbacks: {
//     async jwt({ token, user }) {
//       console.log("token");

//       console.log(token, user);
//       token = { ...user };
//       return token;
//     },
//     async session({ session, user }) {
//       console.log("session");
//       session = { ...user };

//       return session;
//     },
//   },
});
