import React from 'react'
import Character from './Character'
import Spinner from './Spinner'

function CharacterGrid({ items, isLoading }) {
    return isLoading ? (
        <Spinner />
    ) : (
            <section className="cards">
                {items.map((item) => (
                    <Character key={item.char_id} {...item} />
                ))}
            </section>
        )
}

export default CharacterGrid
