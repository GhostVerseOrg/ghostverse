import NextLink from 'next/link';
import { Box, Text } from '@chakra-ui/react';
import { useConfig } from '@useelven/core';
import { ImgEarth } from './ImgEarth';
import { ImgG } from './ImgG';

export const Logo = () => {
  const { chainType } = useConfig();

  return (
    <NextLink href="/">
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        position="relative"
        userSelect="none"
        cursor="pointer"
      >
        <ImgEarth />
        <Box width={{ base: '130px', md: '200px' }}>
          <ImgG />
        </Box>
        <Text
          position="absolute"
          right="0"
          top="0"
          fontSize="10px"
          fontWeight="semibold"
          px={1.5}
          borderRadius="sm"
          color="elvenTools.color2.base"
        >
          {chainType}
        </Text>
      </Box>
    </NextLink>
  );
};
