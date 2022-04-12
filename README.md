African Leadership University Undergraduate Thesis Project 
==================

### A blockchain-enabled framework for enhancing the traceability of biodiversity-based supply chains in Africa.


Link to [paper] 

Link to low/mediumish fidelity [prototype]

 The study investigates and proposes a blockchain-based system for enhancing traceability in multi-tier biodiversity-based supply chains. It conceptualizes the interaction of supply chain partners, and related network architecture at the organizational level, smart contract and transaction validation rule at the operational level. The study propose building the system on the  Near Protocol, a carbon neutral blockchain and [IPFS] content addressing to store certifications, tenders, media, etc off-chain putting immutable, permanent links in transactions — timestamping and securing content without having to put the data on-chain. The case example maps the formal supply chain for organic honey in Rwanda. 
 


Quick Start
===========

To run this project locally:

1. Prerequisites: Make sure you've installed [Node.js] ≥ 12
2. Install dependencies: `yarn install`
3. Run the local development server: `yarn dev` (see `package.json` for a
   full list of `scripts` you can run with `yarn`)


The Code
==================

1. The "backend" code lives in the `/contract` folder. See the README there for
   more info.
2. The frontend code lives in the `/src` folder. 
3. Tests: there are different kinds of tests for the frontend and the smart
   contract. See `contract/README` for info about how it's tested. The frontend
   code gets tested with [jest]. You can run both of these at once with `yarn
   run test`.


  [paper]: https://docs.google.com/document/d/1ydkruxQHBMlz2ABHlSRWF2m9nqz2lK7YBvkfmxE0hZQ/edit?usp=sharing
  [prototype]: https://www.figma.com/file/qABFBFAA7XdnoFh8XZmscI/thesis?node-id=0%3A1
  [IPFS]: https://ipfs.io/
  [React]: https://reactjs.org/
  [create-near-app]: https://github.com/near/create-near-app
  [Node.js]: https://nodejs.org/en/download/package-manager/
  [jest]: https://jestjs.io/
  [NEAR accounts]: https://docs.near.org/docs/concepts/account
  [NEAR Wallet]: https://wallet.testnet.near.org/
  [near-cli]: https://github.com/near/near-cli
  [gh-pages]: https://github.com/tschaub/gh-pages
