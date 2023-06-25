import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spinner,
  Flex,
  ModalHeader,
  Stack,
  Tooltip,
} from '@chakra-ui/react';
import { FC } from 'react';
import { ActionButton } from '../ActionButton';
import { LoginComponent } from './LoginComponent';
import { useEffectOnlyOnUpdate } from '../../hooks/useEffectOnlyOnUpdate';
import { getSigningDeviceName } from '../../utils/getSigningDeviceName';
import { useLogin, useLogout, useLoginInfo } from '@useelven/core';

interface LoginModalButtonProps {
  onClose?: () => void;
  onOpen?: () => void;
}

const CustomModalOverlay = () => {
  return <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(5px)" />;
};

export const LoginModalButton: FC<LoginModalButtonProps> = ({
  onClose,
  onOpen,
}) => {
  const { isLoggedIn, isLoggingIn, setLoggingInState } = useLogin();
  const { loginMethod } = useLoginInfo();
  const { logout } = useLogout();
  const {
    isOpen: opened,
    onOpen: open,
    onClose: close,
  } = useDisclosure({ onClose, onOpen });

  useEffectOnlyOnUpdate(() => {
    if (isLoggedIn) {
      close();
    }
  }, [isLoggedIn]);

  const onCloseComplete = () => {
    setLoggingInState('error', '');
  };

  const ledgerOrPortalName = getSigningDeviceName(loginMethod);

  return (
    <>
      {isLoggedIn ? (
        <ActionButton onClick={logout} aria-label="logout">
          <Tooltip
            label="Logout"
            bg="ghostVerse.green.base"
            fontWeight="light"
            placement="top"
            py={3}
            px={5}
            mb={3}
            mt={3}
            hasArrow
            arrowSize={12}
            borderRadius={0}
          >
            <svg
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1290 1100"
            >
              <path
                d="M607 0h152v38h114v38h75v38h38v38h38v38h76v-76h76v417h38v38h38v38h38v152h-38v37h-38v-37h-38v341h-38v-38h-38v-38h-38v-38h-38v-38h-38v-76h-38v-38h-37v38h-38v38h-38v38h-38v38h-38v38h-38v38h-76v-38h-38v-38h-38v-38h-38v-38h-38v-38h-38v-38h-37v38h-38v76h-38v38h-38v38h-38v38h-38v38h-38V759H38v-38H0v-76h38v-38h38v-38h76v-38h38V114h76v76h76v-38h38v-38h38V76h75V38h114z"
                fill="#e5e8f1"
                fillRule="evenodd"
              />
            </svg>
          </Tooltip>
          <Text display="none">Logout</Text>
        </ActionButton>
      ) : (
        <ActionButton onClick={open} aria-label="login">
          <Tooltip
            label="Login"
            bg="ghostVerse.green.base"
            fontWeight="light"
            placement="top"
            py={3}
            px={5}
            mb={3}
            mt={3}
            hasArrow
            arrowSize={12}
            borderRadius={0}
          >
            <svg
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1290 1100"
            >
              <path
                d="M607 0h152v38h114v38h75v38h38v38h38v38h76v-76h76v417h38v38h38v38h38v152h-38v37h-38v-37h-38v341h-38v-38h-38v-38h-38v-38h-38v-38h-38v-76h-38v-38h-37v38h-38v38h-38v38h-38v38h-38v38h-38v38h-76v-38h-38v-38h-38v-38h-38v-38h-38v-38h-38v-38h-37v38h-38v76h-38v38h-38v38h-38v38h-38v38h-38V759H38v-38H0v-76h38v-38h38v-38h76v-38h38V114h76v76h76v-38h38v-38h38V76h75V38h114z"
                fill="#6dd0f6"
                fillRule="evenodd"
              />
            </svg>
          </Tooltip>
          <Text display="none">Login</Text>
        </ActionButton>
      )}
      <Modal
        isOpen={opened}
        size="sm"
        onClose={close}
        isCentered
        scrollBehavior="inside"
        onCloseComplete={onCloseComplete}
      >
        <CustomModalOverlay />
        <ModalContent
          bgColor="ghostVerse.dark.darker"
          pt={7}
          pb={10}
          px={0}
          borderRadius="none"
          position="relative"
        >
          <ModalCloseButton _focus={{ outline: 'none' }} />
          <ModalHeader>
            <Text textAlign="center" fontWeight="black" fontSize="2xl">
              Connect your wallet
            </Text>
          </ModalHeader>
          <ModalBody px={10}>
            {isLoggingIn && (
              <Flex
                alignItems="center"
                backdropFilter="blur(3px)"
                bgColor="blackAlpha.700"
                justifyContent="center"
                position="absolute"
                inset={0}
                zIndex="overlay"
              >
                <Stack alignItems="center">
                  {ledgerOrPortalName ? (
                    <>
                      <Text fontSize="lg">Confirmation required</Text>
                      <Text fontSize="sm">Approve on {ledgerOrPortalName}</Text>
                    </>
                  ) : null}
                  <Spinner
                    thickness="3px"
                    speed="0.4s"
                    color="elvenTools.color2.base"
                    size="xl"
                  />
                </Stack>
              </Flex>
            )}
            <LoginComponent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
