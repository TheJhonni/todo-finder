import Cards from "../components_2nd_Layer/Cards";

function CardsHomepage() {
  return (
    <div className="p-1 space-x-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {/* CARD 1 */}
      <Cards name="Games" link="/games" img="../assets/images/plane.jfif" />
      {/* CARD 2 */}
      <Cards
        name="Culture"
        link="/culture"
        img="https://th.bing.com/th?q=Travel+Icon+Transparent+Black+PNG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=it-IT&cc=IT&setlang=it&adlt=moderate&t=1&mw=247"
      />
      {/* CARD 3 */}
      <Cards
        name="Food"
        link="/food"
        img="https://th.bing.com/th/id/OIP.XdgH5tuH_cMEkG3T6jHsBAHaEK?w=293&h=180&c=7&r=0&o=5&pid=1.7"
      />
      {/* CARD 4 */}
      <Cards
        name="Movies"
        link="/movies"
        img="https://th.bing.com/th/id/OIP.UAravuNFRKEDpsaSM4u3fwHaEK?w=295&h=180&c=7&r=0&o=5&pid=1.7"
      />
      {/* CARD 5 */}
      <Cards
        name="News"
        link="/news"
        img="https://th.bing.com/th/id/OIP.a9x0YJnx6584HSMTekQCEAHaEK?w=303&h=180&c=7&r=0&o=5&pid=1.7"
      />
      {/* CARD 6 */}
      <Cards
        name="Welness"
        link="/welness"
        img="https://th.bing.com/th/id/OIP.SbcLjweo2FOAdds9WBP98QHaEK?w=300&h=180&c=7&r=0&o=5&pid=1.7"
      />
    </div>
  );
}

export default CardsHomepage;
