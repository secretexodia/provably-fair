# Provably Fair Checker

This guide will help you manually verify game outcomes on [exodiarewards.com](https://exodiarewards.com).

## Prerequisites

- Node.js installed on your machine
- Basic knowledge of JavaScript

## Setup

Clone the repository:  
```sh
git clone https://github.com/yourusername/yourrepository.git
cd yourrepository
```

## Verify case outcomes

1. Open the `cases.js` file in your preferred code editor.  

2. Change the constants SERVER_SEED, SERVER_SEED_HASHED, and CLIENT_SEED to the ones used in the case open you wish to verify.  

3. Run the file using `node cases.js` and verify the calculated ticket with the one presented on your [profile page](https://exodiarewards.com/profile).

