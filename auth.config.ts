import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// Edge-compatible auth config (no bcrypt, no MongoDB direct access)
export const authConfig: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    // Credentials provider placeholder for Edge - actual auth happens in auth.ts
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // This authorize function won't be called in Edge middleware
      // The actual authorization happens in the full auth.ts
      authorize: async () => null,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role || "user";
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
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
      const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/register");

      // Redirect logged-in users away from auth pages
      if (isAuthRoute && isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      // Protect dashboard routes
      if (isDashboardRoute && !isLoggedIn) {
        return false; // Will redirect to signIn page
      }

      // Protect admin routes
      if (isAdminRoute && !isLoggedIn) {
        return false;
      }

      // Check admin role for admin routes
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
