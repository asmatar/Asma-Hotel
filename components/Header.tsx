import { Logo } from "@/components/logo";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { LuChevronsUpDown } from "react-icons/lu";
import { ModeToggle } from "./theme";
import Container from "./ui/Container";
import { Button } from "./ui/button";

const Header = () => {
  const { userId } = auth();

  return (
    <>
      <header className="sticky top-0 border-b-primary/10 bg-secondary">
        <Container>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Logo />
            </div>
            <div className="flex gap-2 items-center">
              <div className="cursor-pointer">
                <ModeToggle />
              </div>
              {userId ? (
                <>
                  <div className="cursor-pointer">
                    <LuChevronsUpDown />
                  </div>
                  <UserButton afterSignOutUrl="/" />
                </>
              ) : (
                <div className="flex items-center gap-1">
                  <Link href={"/sign-in"}>
                    <Button variant="secondary">Sign-in</Button>
                  </Link>
                  <Link href={"/sign-up"}>
                    <Button variant="default">Sign-up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
