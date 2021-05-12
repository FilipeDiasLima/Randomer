import Head from 'next/head'
import { useEffect, useState } from 'react';
import { OddsEvens } from '../components/OddsEvens';
import { RandomNumber } from '../components/RandomNumber';
import { RandomOptions } from '../components/RandomOptions';
import { SideMenu } from '../components/SideMenu'
import { ChoiceContext } from '../contexts/ChoiceContext';

import styles from './home.module.scss';

export default function Home() {
  const [optionSelected, setOptionSelected] = useState('randomNumber');

  function renderOption() {
    if ( optionSelected === 'randomNumber' ) {
      return (
        <RandomNumber />
      )
    }
    if ( optionSelected === 'randomOptions' ) {
      return (
        <RandomOptions />
      )
    }
    if ( optionSelected === 'oddsEvens' ) {
      return (
        <OddsEvens />
      )
    }
  }

  function selectOption(name) {
    setOptionSelected(name);
    console.log(name);
  }

  return (
    <ChoiceContext.Provider value={{ optionSelected, selectOption }}>
      <div className={styles.container}>
      <Head>
        <title>Randomer</title>
      </Head>
      <main className={styles.main}>
        <SideMenu />
        {renderOption()}
      </main>
    </div>
    </ChoiceContext.Provider>
  )
}
