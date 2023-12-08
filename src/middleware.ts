export { default } from "next-auth/middleware";

export const config = { matcher: ["/quiz/play/:id","/quiz/select", "/data" ] };