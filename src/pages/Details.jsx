import React from 'react'

function Details() {
  return (
    <section className="details">
        <div className="details__header">
            <div className="details__basicInfo">
                <span className="font-largest--bold mb-tn">The Oppenheimer</span>
                <span className="font-small--muted">2023 ● PG  ● 2h 15m</span>
            </div>
            <div className="details__rating">
                <span className="font-small--mutedBold">TMDB Rating</span>
                <div className="details__rating--container">
                    <svg width="34" height="34" viewBox="0 0 24 24" >
                        <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                    </svg>
                    <div className="details__rating--wrapper">
                    <p>
                        <span className="font-largest">7.9</span>
                        <span className="font-small--muted">/10</span>
                    </p>
                    <span className="font-small--mutedBold">96k</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    // <div className='details-header'>
    //     <div className='font-largest--bold'>Little Mermaid</div>
    //     <div className='font-tiny'>2023 ● PG  ● 2h 15m</div>
    //     <div className='font-tiny details-imdb'>imdb rating</div>
    //     <div className='details-rating font-tiny--muted'>7.2</div>
    //     <div className='details-rating font-tiny--muted'>/10</div>
    //     <div className='details-rating font-tiny--muted'>96k</div>


    // </div>
  )
}

export default Details