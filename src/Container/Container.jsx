import React from 'react'
import { useState } from 'react'
import Controls from '../presentationals/Controls';
import Display from '../presentationals/Display';
import Character from '../presentationals/Character';

export default function Container() {

  const [head, setHead] = useState('dragon');
  const [torso, setTorso] = useState('cena');
  const [legs, setLegs] = useState('bird');
  const [newPhrase, setNewPhrase] = useState('');
  const [catchphrases, setCatchphrases] = useState([]);

  const handleClick = () => {
      setCatchphrases((previousSate) => [...previousSate, newPhrase]);
  }
        // presentational components below! 
        return (
            <div className='Container' >
                <main >
                <header style={{backgroundColor: 'black', color: 'white'}}>
                    <h1>Character Design</h1>
                    <h2>Pick out your character!</h2>
                    <Controls 
                        head={head}
                        onHeadChange={setHead}
                        torso={torso}
                        onTorsoChange={setTorso}
                        legs={legs}
                        onLegsChange={setLegs}
                        newPhrase={newPhrase}
                        setCatchphrase={setNewPhrase}
                        handleClick={handleClick}
                    />
                    <Display catchphrases={catchphrases} />
                    <Character head={head} torso={torso} legs={legs}/>
                </header>
                </main>
            </div>
        )
}

