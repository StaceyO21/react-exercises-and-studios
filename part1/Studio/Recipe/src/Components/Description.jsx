import styles from './Description.module.css';
import React from 'react';

 function RecipeAuthor(){
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src="https://www.melskitchencafe.com/peanut-butter-kitchen-sink-cookies/" alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>Mel</h3>
              <a href="https://www.melskitchencafe.com/wp-content/uploads/2024/02/melheadshot2-2024smallblog.webp">Mel's Kitchen Cafe</a> 
           </div>
        </div>
     );
    }

    class RecipeDescription extends React.Component {
        render() {
            return (
            <div> 
   <div>
      <h1>Peanut Butter Kitchen Sink Cookies</h1>
      <p>Oh yes, these peanut butter kitchen sink cookies (as in, there’s EVERYTHING but the kitchen sink in them) are amazing! Soft, crunchy, caramelly, delicious!</p>
   </div>
   <RecipeAuthor />
</div>
            );
        }
     }

export default RecipeDescription;