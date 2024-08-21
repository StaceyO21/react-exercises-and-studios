export default function BookList() {
   let pageTitle = "Sucka";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcesBopsy0G1DlgqgY-fwyaAWotjjm454sXw&s";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVtu6EtpHF5Mi7J3oPH7MR9eg6onKkX7pCQ&s";
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHGG25szuc-ffdnm3ZIt8AxbzDuxzxNb3Vw&s";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="This is Why We Lied by Karin Slaughter" />
         <img src={book2} alt="You Like it Darker by Stephen King" />
         <img src={book3} alt="The Book of Bill by Alex Hirsch" />
      </div>      
   );
}