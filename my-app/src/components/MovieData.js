
//array with the movie data 
const movies = [
    {id: 1, 
    title: 'MURDER ON THE ORIENT EXPRESS',
    synopsis: 'Sidney Lumets 1974 adaptation of Agatha Christis classic mystery starred Albert Finney as Hercule Poirot, with a supporting cast that included Lauren Bacall, Sean Connery, John Gielgud, Ingrid Bergman, and Anthony Perkins, just to name a few. Poirot is traveling from Istanbul to London on the famous Orient Express along with an intriguing cast of characters, one of whom is a man named Ratchett (Richard Widmark), who tries to hire Poirot to protect him for the duration of the journey.Poirot declines, but after the train is stalled in a snowdrift, Ratchett is found stabbed to death. A letter at the scene of the crime reveals Ratchett’s true identity as Lanfranco Cassetti, who not only planned but profited from the recent kidnapping and killing of infant Daisy Armstrong. Poirot sets out to solve the crime, interviewing each and every passenger, teasing out possible motives.',
      rating: 4, 
      reviews: [
        {text: 'Great movie!', user: 'User1'},
        {text:'I loved it!', user: 'User2'},
      ], 
     
     image:'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/08/3a35c0d8-502b-4b43-91f0-6fb6a2295566.jpeg?q=50&fit=crop&w=1500&dpr=1.5',
     
    },
    
    {id: 2, 
      title: 'THE MALTESE FALCON',
      synopsis: 'Another stellar Dashiell Hammett adaptation (see The Thin Man, above) was directed by John Huston in 1941, this one starring Humphrey Bogart as the seminal private detective Sam Spade. Spade and his partner, Miles Archer, are approached by a femme fatale named Ruth Wonderly (Mary Astor), who wishes for him to find her missing sister, who has come to San Francisco with an unsuitable man. In quick succession, Archer and the unsuitable man turn up murdered, and Wonderly is nowhere to be found. Like many women in detective films, it turns out she is not who she claimed to be, and Spade’s case soon widens to include tracking down a statue of a bird called the Maltese Falcon, and wouldn’t you know it, his femme fatale is involved with that as well.',
        rating: 3, 
        reviews: [
          {text: 'Good movie!', user: 'User3'},
          {text:'It was ok!', user: 'User4'},
        ], 
       image: 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/06/detective-philip-marlowe-2-1200x630.jpg?q=50&fit=crop&w=1500&dpr=1.5', 
      },
    
      {id: 3, 
        title: 'CHINATOWN',
        synopsis: 'Jack Nicholson reached icon status as P.I. Jake Gittes in Roman Polanskis psychological neo-noir classic Chinatown. In a gray fedora and tan suit, with his nose bandaged after a gangster played by Polanski gives him a cut, Gittes is looking into a husband’s infidelity, only to find that the wife is also not who she says she is. A murder, spurious land deals, and one of film history’s most twisted family trees collide as Gittes works for the enigmatic Evelyn Mulwray (Faye Dunaway), untangling knots that range from scandalous family drama to the machinations of the Los Angeles Department of Water and Power.',
          rating: 2, 
          reviews: [
            {text: 'Nothing Special!', user: 'User5'},
            {text:'I loved it!', user: 'User6'},
          ], 
          image:'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/06/detective-jake-jj-gittes-1200x630.jpg?q=50&fit=crop&w=1500&dpr=1.5', 
        },
     
    ] 

    
    export default movies;
    
    