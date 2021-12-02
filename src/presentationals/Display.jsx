import React from 'react'

export default function Display({catchphrases}) {
    return (
        <div>
            {catchphrases.map((phrase) => (
                <p key={phrase} style={{marginLeft: 50}}>{phrase}</p>
            ))}
        </div>
    )
}
