import React from 'react'

export default function Display({catchphrases}) {
    return (
        <div>
            {catchphrases.map((phrase) => (
                <span>{catchphrases}</span>
            ))}
        </div>
    )
}
