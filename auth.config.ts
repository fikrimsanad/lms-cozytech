import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async () => null,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
        token.role = (user as { role?: string }).role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        (session.user as { role?: string }).role = token.role as string;
        (session.user as { id?: string }).id = token.id as string;
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const pathname = nextUrl.pathname;

      const isAdminRoute = pathname.startsWith("/admin");
      const isDashboardRoute = pathname.startsWith("/dashboard");
      const isLoginRoute = pathname === "/login";

      // Redirect logged-in users away from login
      if (isLoginRoute && isLoggedIn) {
        const role = (auth?.user as { role?: string })?.role;
        const target = role === "admin" ? "/admin" : "/dashboard";
        return Response.redirect(new URL(target, nextUrl));
      }

      // Protect dashboard — must be logged in
      if (isDashboardRoute && !isLoggedIn) {
        return false;
      }

      // Protect admin — must be logged in AND role admin
      if (isAdminRoute && !isLoggedIn) {
        return false;
      }
      if (isAdminRoute && isLoggedIn) {
        const role = (auth?.user as { role?: string })?.role;
        if (role !== "admin") {
          return Response.redirect(new URL("/dashboard", nextUrl));
        }
      }

      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
