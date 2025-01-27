import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { MainMenu } from '../components/MainMenu';
import { MainMenuButtons } from '../components/MainMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';

const ClanPage: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Our clan is expanding by the day. Don't be afraid to communicate with the ghosts." />
      <MainMenu>
        <MainMenuButtons
          enabled={[
            'twitter',
            'discord',
            'egldcommunity',
            'builders',
            'kavarii',
          ]}
        />
      </MainMenu>
    </MainLayout>
  );
};

export default ClanPage;
