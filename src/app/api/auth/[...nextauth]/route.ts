import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import axios from "axios";
import { JWT } from "next-auth/jwt";
import * as jwt from "jsonwebtoken";
import { HOST_API } from "@/config-global";

const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  useSecureCookies: false,
  jwt: {
    encode: ({ secret, token }) => {
      return jwt.sign(token as object, secret);
    },
    decode: ({ secret, token }) => {
      const data = jwt.verify(token!, secret);
      return data as JWT;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      if (!profile?.email) {
        throw new Error("No profile email");
      }
      try {
        let image: string = "";
        if (account?.provider === "google") {
          image = (profile as any).picture;
        } else if (account?.provider === "facebook") {
          image = (profile as any).picture.data.url;
        }

        const newUser = await axios.post(`${HOST_API}/user`, {
          secret: process.env.NEXTAUTH_SECRET,
          name: profile.name,
          email: profile.email,
          image,
          provider: account?.provider,
          providerAccountId: account?.providerAccountId,
        });
        user.id = newUser.data.id;
        return true;
      } catch (e) {
        console.log(e);
        console.log("Entered catch");
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
