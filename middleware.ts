import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/hotel-details/:hotelId"],
});
export const config = {
  matcher: [
    "/((?!.+.[w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/((?!api|static|.*\\..*|_next).*)",
  ],
};
