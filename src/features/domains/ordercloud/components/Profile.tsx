import { FC, useMemo } from "react";
import { useCurrentUser, useMutateCurrentUser } from "../hooks/currentUser";
import { Button, Container, Heading } from "@chakra-ui/react";
import useOrderCloudContext from "../hooks/useOrderCloudContext";

const Profile: FC = () => {
  const {isLoggedIn} = useOrderCloudContext();
  const { data: user, status, error } = useCurrentUser();
  const {mutate, isPending} = useMutateCurrentUser();
  
  const content = useMemo(() => {
    switch (status) {
      case "pending":
        return "PENDING";
      case "error":
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
      case "success":
        return isLoggedIn ? (
          <>
            <Heading size="md" mb={5}>{`Welcome ${user.FirstName} ${user.LastName}!`}</Heading>
            <Button isDisabled={isPending} onClick={() => mutate({FirstName: "Buyer", LastName: "User"})}>Change Name</Button>
          </>
        ) : (
          <>
            <Heading size="md">Welcome to the app!</Heading>
          </>
        );
    }
  }, [error, isLoggedIn, isPending, mutate, status, user])

  return <Container maxW="full" pt={6} px={8}>{content}</Container>
};

export default Profile;
