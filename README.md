# Embedding Metabase Dashboards in a ReactJS Web App

This application embeds one dashboard (TB Treatment Initiations) from a demo instance of Metabase.
This instance uses test data to generate the charts

## Please check package.json for requirements (npm install) before running

Filters can be passed to Metabase via the `{filters}` object in `MetabaseDashboardTemplate.js`

`var filters = `
    {
        
        //"province": ["ec Eastern Cape Province"],
        //"district": ["ec Alfred Nzo District Municipality"],
        //"sub-district": ["ec Matatiele Local Municipality"],
        //"facility": ["ec Maluti CHC"],
        //"start_date": '2021-01-01',
        //"end_date": '2021-12-31'

`};`

You may un/comment as required to test

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


