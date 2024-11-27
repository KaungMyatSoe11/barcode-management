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
        console.log(data);

        if (!data) {
          throw new Error("Invalid credentials");
        }
        return data;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = { ...user };
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = { ...token };
        session.id = token.id;
      }
      return session;
    },
  },
});
