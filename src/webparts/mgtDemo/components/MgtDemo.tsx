import * as React from 'react';
import styles from './MgtDemo.module.scss';
import { IMgtDemoProps } from './IMgtDemoProps';
import { Login, PeoplePicker, Person } from '@microsoft/mgt-react/dist/es6/spfx';
import { ViewType } from '@microsoft/mgt-spfx';

const MgtDemo: React.FC<IMgtDemoProps> = (props) => {
  const {
    // description,
    isDarkTheme,
    environmentMessage,
    hasTeamsContext,
  } = props;
  const startPeople: string[] = ["33e38fbb-2645-461d-a430-97ab224bb768", "ebe35fd9-72c2-4bd6-b941-ca98c248a76a"]
  return (
    <section className={`${styles.mgtDemo} ${hasTeamsContext ? styles.teams : ''}`}>
      <div className={styles.welcome}>
        <h2>Microsoft Graph Toolkit Demo!</h2>
        <img alt="" src={isDarkTheme ? require('../assets/MGT-Logo.png') : require('../assets/MGT-Logo.png')} className={styles.welcomeImage} />
        <div>{environmentMessage}</div>
      </div>
      <div>
        <Login />
        <Person personQuery='me' view={ViewType.threelines} />
        <PeoplePicker placeholder='Find your colleague' selectionMode='single' userIds={startPeople} />
        <PeoplePicker
          placeholder={'Up to 50 people'}
          selectionMode={'multiple'}
          id="AdditionalRecipients"
          defaultSelectedUserIds={startPeople}
        />
        {console.log(startPeople)}
      </div>
    </section>
  );
}

export default MgtDemo;