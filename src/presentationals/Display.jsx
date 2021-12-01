import React from 'react'

export default function Display({catchphrases}) {
    return (
        <div>
            {catchphrases.map((phrase) => (
                <p key={phrase}>{phrase}</p>
            ))}
        </div>
    )
}
