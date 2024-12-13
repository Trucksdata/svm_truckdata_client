import React, { useState, useEffect } from "react";

const Test5 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll event to add/remove the fixed header class
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <div className="header-banner">
          <h1>Visit Finland</h1>
        </div>
        <div className="clear"></div>
        <nav className={isScrolled ? "fixed-header" : ""}>
          <div className={isScrolled ? "visible-title" : ""}>Finland</div>
          <ul>
            <li>
              <a href="/archive">Archive</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="content">
        <article>
          <p>
            Wolf vinyl hella, jean shorts disrupt skateboard master cleanse
            hashtag iPhone. Pop-up bicycle rights Brooklyn iPhone Helvetica
            kitsch Godard, XOXO blog aesthetic beard quinoa...
          </p>
          <p>
            <img src="http://placehold.it/660x150" alt="placeholder" />
          </p>
          <p>
            Twee 8-bit Blue Bottle, wolf tattooed distillery retro dreamcatcher
            put a bird on it letterpress asymmetrical actually Austin crucifix
            cred...
          </p>
          <p>
            Fixie gluten-free sriracha flannel, selfies chambray direct trade.
            Authentic mixtape semiotics deep v jean shorts pork belly occupy
            shabby chic sriracha...
          </p>
        </article>

        <aside>
          <img src="http://placehold.it/144x150" alt="placeholder" />
          <img src="http://placehold.it/144x150" alt="placeholder" />
        </aside>
      </section>
    </div>
  );
};

export default Test5;
