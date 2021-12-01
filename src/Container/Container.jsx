import React, { Component } from 'react'
import { useState } from 'react'


export default class Container extends Component {

  const [head, setHead] = useState('dragon');
  const [torso, setTorso] = useState('cena');
  const [legs, setLegs] = useState('bird');
  const [catchphrases, setCatchphrases] = useState([]);
  const [newCatchphrase, setNewCatchphrase] = useState('');

    render() {
        // presentational components below! 
        return (
        <div>
            <select>

            </select>

            <select>

            </select>

            <select>

            </select>
        </div>
            
        )
    }
}

