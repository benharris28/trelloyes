import React from 'react';
import Card from './Card';
import './List.css';

// The list function populates cards in each list

export default function List(props) {
return (
    <section className="List">
        <header className="List-header">
            <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
            {props.cards.map(card => 
                <Card 
                    key={card.id}
                    title={card.title}
                    content={card.content}
                    onDeleteItem={props.onDeleteItem}
                    id={card.id}
                    />
                    )}
                <button 
                    onClick={() => props.onClickAddItem(props.id)}
                    type="button"
                    className='List-add-button'
                    >  
                    Add Random Card
                    </button>
            
        </div>
    </section>
)

}
    
List.defaultProps = {
    onClickAddItem: () => {},
    
}