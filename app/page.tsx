import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();
  console.log(userId);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
