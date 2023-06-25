import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

const InstallXportal: NextPage = () => {
  return (
    <>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Install xPortal app." />
        <Box
          display={'flex'}
          flexDirection={'column'}
          as="div"
          color={'white'}
          fontSize={{ base: '3xl' }}
          fontFamily={'vt323'}
          borderColor={'ghostVerse.color2.base'}
          bgColor={'ghostVerse.dark.lighter'}
          borderWidth={1}
          backdropFilter={'blur(3px)'}
          mt={5}
          mb={6}
          p={4}
        >
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: '4xl' }}
            fontWeight={'black'}
            mb={4}
          >
            01 - Download xPortal app on your mobile phone
          </Text>
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            maxWidth="400px"
          >
            <Box mb={4} width={'100%'} mr={2}>
              <Link
                href="https://apps.apple.com/app/xportal/id1519405832"
                target="_blank"
                title="Install xPortal App on Apple"
                passHref
              >
                <Image
                  src="/media/app-store.svg"
                  alt="GhostVerse - Install xPortal - App Store"
                  title="GhostVerse - Install xPortal - App Store"
                  width="120"
                  height="40"
                />
              </Link>
            </Box>
            <Box mb={4} width={'100%'} mr={2}>
              <Link
                href="https://play.google.com/store/apps/details?id=com.elrond.maiar.wallet"
                target="_blank"
                title="Install xPortal App on Android"
                passHref
              >
                <Image
                  src="/media/play-store.svg"
                  width="135"
                  height="40"
                  alt="GhostVerse - Install xPortal - Play Store"
                  title="GhostVerse - Install xPortal - Play Store"
                />
              </Link>
            </Box>
            <Box mb={4} width={'100%'} mr={2}>
              <Link
                href="https://appgallery.huawei.com/app/C104325151"
                target="_blank"
                title="Install xPortal App on Huawei"
                passHref
              >
                <Image
                  src="/media/huawei-store.svg"
                  width="133"
                  height="40"
                  alt="GhostVerse - Install xPortal - Huawei Store"
                  title="GhostVerse - Install xPortal - Huawei Store"
                />
              </Link>
            </Box>
          </Box>
          <br />
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: '4xl' }}
            fontWeight={'black'}
            mb={4}
          >
            02 - Install xPortal with our referral code:{' '}
            <Box as={'span'} color={'ghostVerse.blue.base'}>
              7nvae7kpo1
            </Box>
          </Text>
          <Box as="ul" listStyleType="none" pl={4}>
            <Box as="li">
              a. Clic on &quot;Have a referral code?&quot; link.
            </Box>
            <Box as="li">
              b. Fill with our referral code: &quot;7nvae7kpo1&quot;.
            </Box>
            <Box as="li">c. Verify your phone number and continue.</Box>
          </Box>
          <br />
          <Box display={'flex'} flexDirection={{ base: 'column', md: 'row' }}>
            <Box
              width={{ base: '100%', md: '30%' }}
              marginRight={{ base: '0', md: '4' }}
              marginBottom={4}
              position={'relative'}
            >
              {' '}
              <Image
                src="/media/green-ghost-degen-weed-shop-install-xportal-app-click-referral-link.webp"
                alt="GhostVerse - Install xPortal - Click Referral Link"
                title="GhostVerse - Install xPortal - Click Referral Link"
                width={500}
                height={1029}
              />
            </Box>
            <Box
              width={{ base: '100%', md: '30%' }}
              marginRight={{ base: '0', md: '4' }}
              marginBottom={4}
              position={'relative'}
            >
              {' '}
              <Image
                src="/media/green-ghost-degen-weed-shop-install-xportal-app-enter-referral-code.webp"
                alt="GhostVerse - Install xPortal - Enter Referral code"
                title="GhostVerse - Install xPortal - Enter Referral code"
                width={500}
                height={1029}
              />
            </Box>
            <Box
              width={{ base: '100%', md: '30%' }}
              marginRight={{ base: '0', md: '4' }}
              marginBottom={4}
              position={'relative'}
            >
              {' '}
              <Image
                src="/media/green-ghost-degen-weed-shop-install-xportal-app-verify-phone-number.webp"
                alt="GhostVerse - Install xPortal - Verify Phone Number"
                title="GhostVerse - Install xPortal - Verify Phone Number"
                width={500}
                height={1029}
              />
            </Box>
          </Box>
          <Text>
            Follow the process to generate your secret phrase.{' '}
            <Box as={'span'} color="ghostVerse.orange.base">
              The secret phrase is the only access to your funds, never share
              it.
            </Box>
          </Text>
          <br />
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: '4xl' }}
            fontWeight={'black'}
            mb={4}
          >
            03 - Claim your{' '}
            <Box as={'span'} color={'ghostVerse.green.base'}>
              @herotag
            </Box>
          </Text>
          <Text>
            Click on the Play section and follow the quests until you can claim
            your Herotag.
          </Text>
          <br />
          <Box display={'flex'} flexDirection={{ base: 'column', md: 'row' }}>
            <Box
              width={{ base: '100%', md: '30%' }}
              marginRight={{ base: '0', md: '4' }}
              marginBottom={4}
              position={'relative'}
            >
              {' '}
              <Image
                src="/media/green-ghost-degen-weed-shop-install-xportal-app-click-play-menu.webp"
                alt="GhostVerse - Install xPortal - Click Play Menu"
                title="GhostVerse - Install xPortal - Click Play Menu"
                width={500}
                height={1029}
              />
            </Box>
            <Box
              width={{ base: '100%', md: '30%' }}
              marginRight={{ base: '0', md: '4' }}
              marginBottom={4}
              position={'relative'}
            >
              {' '}
              <Image
                src="/media/green-ghost-degen-weed-shop-install-xportal-app-claim-your-herotag.webp"
                alt="GhostVerse - Install xPortal - Claim Your Herotag"
                title="GhostVerse - Install xPortal - Claim Your Herotag"
                width={500}
                height={1029}
              />
            </Box>
          </Box>
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: '4xl' }}
            fontWeight={'black'}
            mb={4}
          >
            04 - Congratulations! You are all set.
          </Text>
        </Box>
      </MainLayout>
    </>
  );
};

export default InstallXportal;
