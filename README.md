
# Angular-TOH-Cypress

Angular Tour of Heroes Application with Cypress Testing Framework

## Install Node Packages

```
npm install
```

In one terminal run the following command from the root directory for the repo:

```
npm run server
```

In another terminal run the following command:

```
npm start
```

then browse to localhost:4200 and make sure that the website is running. 
Finally double check your cypress installation by running the following command in a 3rd terminal

```
npx cypress open
```

A cypress window should open. If it does you are good.

## Modify tsconfig.json

Add "types": ["cypress"],

```
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "module": "es2015",
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es5",
    "types": ["cypress"],
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2018",
      "dom"
    ]
  }
}
```

## Create Integration Directory

Under the cyrpess folder create the directory integration and then create the file initial-page.spec.ts

## Test #1

```
describe('dashboard', () => {
    it(`true is true`, () => {

    })
})
```

## Test #2

```
describe('dashboard', () => {
    it(`has title 'Tour of Heroes'`, () => {
      cy.visit("localhost:4200/dashboard");
    })
})
```

## Test #3

```
describe('dashboard', () => {
    it(`has title 'Tour of Heroes'`, () => {
      cy.visit("localhost:4200/dashboard");
      cy.get('h1').should('contain', 'Tour of Heroes');
    })
})
```

## Test #4

```
describe('dashboard', () => {
    it(`has title 'Tour of Heroes'`, () => {
      cy.visit("localhost:4200/dashboard");
      cy.get('h1').should('contain', 'Tour of Heroes');
      cy.title().should('eq', 'Tour of Heroes');
    })
})
```

## Test #5

```
describe('dashboard', () => {
    it(`has title 'Tour of Heroes'`, () => {
      cy.visit("localhost:4200/dashboard");
      cy.contains('Tour of Heroes')
      cy.get('h1').should('contain', 'Tour of Heroes');
      cy.title().should('eq', 'Tour of Heroes');
    })
})
```

## Test #6

```
describe('dashboard', () => {
    it(`has title 'Tour of Heroes'`, () => {
      cy.visit("localhost:4200/dashboard");
      cy.contains('Tour of Heroes');
      cy.get('.hero');
      cy.get('h1').should('contain', 'Tour of Heroes');
      cy.title().should('eq', 'Tour of Heroes');
    })
})
```

## Test #7

```
describe('dashboard', () => {
    it(`has title 'Tour of Heroes'`, () => {
      cy.visit("localhost:4200/dashboard");
      cy.contains('Tour of Heroes');
      cy.get('h1').then(h1 => {
      // Get access to the raw DOM node  
      })
    })
})
```

## Test #8

```
describe('dashboard', () => {

  it(`has title 'Tour of Heroes'`, () => {
    cy.visit("localhost:4200/dashboard");
    cy.contains('Tour of Heroes');
    cy.get('.hero');
    cy.get('h1').should('contain', 'Tour of Heroes');
    cy.title().should('eq', 'Tour of Heroes');
  })

  it (`has the correct header`, () => {
    cy.visit("localhost:4200/dashboard");
    cy.contains('Dashboard');
    cy.get('nav a').eq(1).should('contain', 'Heroes');
    cy.contains('Top Heroes');
  })
})
```

## Test #9

```
describe('dashboard', () => {

  it(`has title 'Tour of Heroes'`, () => {
    cy.visit("localhost:4200/dashboard");
    cy.contains('Tour of Heroes');
    cy.get('.hero');
    cy.get('h1').should('contain', 'Tour of Heroes');
    cy.title().should('eq', 'Tour of Heroes');
  })

  it (`has the correct header`, () => {
    cy.visit("localhost:4200/dashboard");
    cy.contains('Dashboard');
    cy.get('nav a').eq(1).should('contain', 'Heroes');
    cy.contains('Top Heroes');
  })

  it (`has the correct search header`, () =>{
    cy.visit("localhost:4200/dashboard");
    cy.contains("Hero Search");

  })
})
```

## Test #10

```
describe('dashboard', () => {

  beforeEach(() => {
    cy.visit("localhost:4200/dashboard");
  })

  it(`has title 'Tour of Heroes'`, () => {
    
    cy.contains('Tour of Heroes');
    cy.get('.hero');
    cy.get('h1').should('contain', 'Tour of Heroes');
    cy.title().should('eq', 'Tour of Heroes');
  })

  it (`has the correct header`, () => {
    cy.contains('Dashboard');
    cy.get('nav a').eq(1).should('contain', 'Heroes');
    cy.contains('Top Heroes');
  })

  it (`has the correct search header`, () =>{
    cy.contains("Hero Search");
    cy.get('app-hero-search h4').should('contain', 'Hero Search');
  })
})
```

## Test #11

```
describe('dashboard', () => {

  beforeEach(() => {
    cy.visit("localhost:4200/dashboard");
  })

  it(`has title 'Tour of Heroes'`, () => {
    
    cy.contains('Tour of Heroes');
    cy.get('.hero');
    cy.get('h1').should('contain', 'Tour of Heroes');
    cy.title().should('eq', 'Tour of Heroes');
  })

  it (`has the correct header`, () => {
    cy.contains('Dashboard');
    cy.get('nav a').eq(1).should('contain', 'Heroes');
    cy.contains('Top Heroes');
  })

  it (`has the correct search header`, () =>{
    cy.contains("Hero Search");
    cy.get('app-hero-search h4').should('contain', 'Hero Search');
  })

  it ('can search', () => {
    cy.get('#search-box').type('Mr. Nice');
    cy.get('.search-result li').contains('Mr. Nice').click();
    cy.url().should('include', '/detail/11');
  })
})
```