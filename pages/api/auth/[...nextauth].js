import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: "226064510379-8u85c4cc66h4v1qsldomtt3h2gmhg2ts.apps.googleusercontent.com",
        clientSecret: "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"
    })
  ],
}
export default NextAuth(authOptions)