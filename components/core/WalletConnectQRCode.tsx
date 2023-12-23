import { useEffect, useState, FunctionComponent } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { useConfig } from '@useelven/core';
import { isMobile } from '../../utils/isMobile';
import QRCode from 'qrcode';

interface WalletConnectQRCodeProps {
  uri: string;
}

export const WalletConnectQRCode: FunctionComponent<
  WalletConnectQRCodeProps
> = ({ uri }) => {
  const [qrCodeSvg, setQrCodeSvg] = useState('');
  const { walletConnectDeepLink } = useConfig();

  useEffect(() => {
    const generateQRCode = async () => {
      if (!uri) {
        return;
      }

      const svg = await QRCode.toString(uri, {
        type: 'svg',
      });

      setQrCodeSvg(svg);
    };
    generateQRCode();
  }, [uri]);

  const mobile = isMobile();

  return (
    <Box>
      <Box
        sx={{
          svg: {
            borderRadius: 'xl',
          },
        }}
        dangerouslySetInnerHTML={{
          __html: qrCodeSvg,
        }}
      />
      {mobile ? (
        <Flex justifyContent="center" background="black">
          <Box
            width="100%"
            textAlign="center"
            borderColor="ghostVerse.color1.darker"
            borderWidth={1}
            bgColor="transparent"
            py={2}
            px={6}
            mt={6}
            fontWeight="normal"
            _hover={{ bg: 'GhostVerse.color2.lighter' }}
            transition="background-color .3s"
            as="a"
            href={`${walletConnectDeepLink}?wallet-connect=${encodeURIComponent(
              uri
            )}`}
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            xPortal Login
          </Box>
        </Flex>
      ) : null}
    </Box>
  );
};
