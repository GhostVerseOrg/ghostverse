import { Box, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useElvenScQuery } from '../hooks/useElvenScQuery';
import { SCQueryType } from '@useelven/core';

interface NFTLeftToMintProps {
  data?: number;
  dropData?: number;
  dataLoading?: boolean;
}

export const NFTLeftToMint: FC<NFTLeftToMintProps> = ({
  data,
  dropData,
  dataLoading,
}) => {
  const { data: dropActive } = useElvenScQuery<boolean>({
    funcName: 'isDropActive',
    type: SCQueryType.BOOLEAN,
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      mb={2}
      justifyContent={{ base: 'center', md: 'flex-start' }}
    >
      <Text>{dropActive ? 'Drop #3' : 'Total'} NFTs left to mint: </Text>
      {dataLoading ? (
        <Spinner ml={3} color="ghostVerse.color1.darker" />
      ) : (
        <Text
          color="ghostVerse.color1.darker"
          fontSize="xl"
          fontWeight="black"
          ml={3}
        >
          {dropActive ? dropData : data}
        </Text>
      )}
    </Box>
  );
};
