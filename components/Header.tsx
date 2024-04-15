import { UserButton, auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { LuChevronsUpDown } from "react-icons/lu";
import Container from "./UI/Container";
import { Button } from "./UI/button";
import { ModeToggle } from "./theme";
const Header = () => {
  const { userId } = auth();

  return (
    <>
      <header className="sticky top-0 border-b-primary/10 bg-secondary">
        <Container>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Image
                src="/figma/logo.png"
                alt="Logo"
                width={100}
                height={100}
              ></Image>
              Asma-Hotel
            </div>
            <div className="flex gap-2 items-center">
              <div className="cursor-pointer">
                <LuChevronsUpDown />
              </div>
              <div className="cursor-pointer">
                <ModeToggle />
              </div>
              {userId ? (
                <UserButton afterSignOutUrl="/" />
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
