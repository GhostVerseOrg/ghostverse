import { Box, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

interface EarnItemProps {
  name: string;
  imageUrl: string;
  link: string;
  bio?: string;
}

export const EarnItem: FC<EarnItemProps> = ({ name, imageUrl, bio, link }) => {
  return (
    <Text
      as="a"
      p={4}
      rel="noopener noreferrer nofollow"
      borderColor="ghostVerse.color2.base"
      borderWidth={1}
      backdropFilter="blur(3px)"
      display={'flex'}
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <Box w={'20%'} display="flex" alignItems="center" justifyContent="center">
        <Image src={imageUrl} alt={name} boxSize="140px" objectFit="contain" />
      </Box>
      <Box w={'80%'}>
        <Text
          as="h2"
          color="ghostVerse.color2.darker"
          fontSize="xl"
          fontWeight="black"
          mt={5}
          mb={3}
        >
          {name}
        </Text>
        {bio && <Text mt={5}>{bio}</Text>}
        {link && (
          <Link passHref href={link}>
            <Box color="ghostVerse.blue.base" mt={2}>
              Play
            </Box>
          </Link>
        )}
      </Box>
    </Text>
  );
};
