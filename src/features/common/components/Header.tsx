import { Container, HStack, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import AuthToggle from "../../auth/components/AuthToggle";
import { useCurrentUser } from "../../domains/ordercloud/hooks/currentUser";
import useOrderCloudContext from "../../domains/ordercloud/hooks/useOrderCloudContext";
import { APP_NAME } from "../constants";

const Header: FC = () => {
  const { isLoggedIn } = useOrderCloudContext();
  const { data: user } = useCurrentUser();
  return (
    <HStack h="full" maxW="full" as={Container} justifyContent="space-between">
      <Heading size="md">{APP_NAME}</Heading>
      <HStack gap={5}>
        {isLoggedIn && (
          <Text
            fontWeight="normal"
          >{`Welcome, ${user?.FirstName} ${user?.LastName}!`}</Text>
        )}
        <AuthToggle />
      </HStack>
    </HStack>
  );
};

export default Header;
