This project uses the following main packages:
* [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
* [TypeScript](https://www.typescriptlang.org/) to `type` the project.
* [TailWindCSS](https://tailwindcss.com/) to `style` the project.
* [StoryBook](https://storybook.js.org/) as components repository.
* [Apollo GraphQL](https://www.apollographql.com/) to communicate with the `backend`.


# Development
## Getting Started

1. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

2. Create and fill `.env` file using as template `.env.template`

3. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```


4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook
1. Run StoryBook
    ```bash
    npm run storybook
    # or
    yarn storybook
    ```
2. Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.
# Production
## Getting Started
1. Build the project:
    ```bash
    npm run build
    # or
    yarn build
    ```

2. Run the production server:
    ```bash
    npm run start
    # or
    yarn start
    ```