import React, { useState, useEffect } from "react";
import Card from "./Cards";
import styles from '../App.module.css'

function Emoji() {

    const [value, setValue] = useState('')
    const [emoji, setEmoji] = useState([])
  
    console.log(value);
    console.log(emoji);
  
    const url = 'https://6423241f001cb9fc20393732.mockapi.io/emoji';
  
    // pagination //

    const [current, setCurrent] = useState(1);
    const [cardPages, getCardsPages] = useState(12);

    const lastCardIndex = current * getCardsPages;
    const firstCardIndex = lastCardIndex - cardPages;
    const currentCards = Math.ceil(emoji.length / cardPages);

    
 
    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(data => setEmoji(data))
         
      },[])


      

    const clearClick = () => {
        setValue('');
    }

    return (
    <div className={styles.emoji}>
        <input type='text' value={value} placeholder="Placeholder" onChange={(e) => setValue(e.target.value)} className={styles.input}/>
        <button onClick={clearClick}> X </button>
        <div className={styles.sectioncard}>
            <div style ={{display: 'flex', flexWrap: 'wrap', width: '80%'}} >
                {emoji.filter((el) => {
                if (el.title.toLowerCase().includes(value.toLowerCase()) || el.keywords.toLowerCase().includes(value.toLowerCase()) ) {
                    return true
                } else {
                    return false
                }
                   })
                .map((el, index) => (
                    <div key = {index} className={styles.cardfont} >
                
                        <p className={styles.cardsimbol}>{el.symbol}</p>
                        <p className={styles.cardtitle}>{el.title}</p>
                        <p className={styles.cardkeywords}>{el.keywords}</p>
            
                    </div>
                )
                ) }
            </div>
        </div>
    </div>
    )
}

export default Emoji