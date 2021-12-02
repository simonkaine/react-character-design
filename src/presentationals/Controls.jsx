import React from 'react'

export default function Controls({
    head, 
    onHeadChange,
    torso,
    onTorsoChange,
    legs,
    onLegsChange,
    newPhrase,
    setCatchphrase,
    handleClick
}) {
    // deconstruct pictures for mapping
    const headPix = ['rock', 'mario', 'fish', 'dragon'];
    const torsoPix = ['purple', 'dress', 'cena', 'armor'];
    const legsPix = ['bird', 'robot', 'chicken', 'cartoon'];

    // Per onChange event, Map thru pictures
    // input for catchphrase + button to add to array
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
                <select value={torso} onChange={(event) => onTorsoChange(event.target.value)}>
                    {torsoPix.map((picture) => (
                        <option key={picture}>{picture}</option>
                    ))}
                </select>
            </label>

            <label>
                LEGS
                <select value={legs} onChange={(event) => onLegsChange(event.target.value)}>
                    {legsPix.map((picture) => (
                        <option key={picture}>{picture}</option>
                    ))}
                </select>
            </label>

            <label>
                New Catchphrase:
                <input value={newPhrase} onChange={(event) => setCatchphrase(event.target.value)} />
            </label>
        
            <button type='button' onClick={handleClick}>Add it!</button>

        </div> 

    ); 
}

