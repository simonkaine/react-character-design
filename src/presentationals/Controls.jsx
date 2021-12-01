import React from 'react'

export default function Controls({
    head, 
    onHeadChange,
    torso,
    onTorsoChange,
    legs,
    onLegsChange,
    newPhrase,
    setcatchphrase,
    handleClick
}) {
    // deconstruct pictures for mapping
    const headPix = ['rock', 'mario', 'fish', 'dragon'];
    const torsoPix = ['purple', 'dress', 'cena', 'armor'];
    const legsPix = ['bird', 'robot', 'chicken', 'cartoon'];

    // Per onChange event, Map thru pictures
    return (
        <div>
            <label>
                HEAD
                <select value={head} onChange={(event) => onHeadChange(event.target.value)}>
                    {headPix.map((picture) => (
                        <option key={picture}>{picture}</option>
                    ))}
                </select>
            </label>

            <label>
                TORSO
                <select value={torso}>
                    
                </select>
            </label>

            <label>
                LEGS
                <select value={legs}>
                    
                </select>
            </label>
        </div>
    );
}

