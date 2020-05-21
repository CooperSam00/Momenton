## Scripts to run

- All commands should be run from root directory.
- To install react + express npm packages run

npm run project-setup

- Once complete use the following command to boot both node-express/react on ports 1337 + 3000 consecutively

npm run start

- To run Jest testing and provide coverage report for client run

npm run test

## Notes

Recursive function is used to create FE friendly JSON as response to API endpoints.

On start all employees are shown. Once a search is completed this list is filtered to return matching results.

Multiple employee ID's can be searched, seperated by ' ' or ','

## Main areas not actioned/Room for improvement
    - Better handling of styling, preferred tool is Emotion https://github.com/emotion-js/emotion
    - Proper error reporting such as Sentry using the Raven package https://www.npmjs.com/package/raven
    - Better Security around express using tools such as https://github.com/helmetjs/helmet
    - Package security testing using Snyk
    - Cleaner project structure/setup.
    - Better state management such as Redux instead of passing around hooks (Prefer not to prop drill whenever possible but this depends on project).
    - Angular 9 Version instead of React.
    - Inclusion of some DB (Example: SQL Server)
    - Better Testing/Linting (Implementation/Coverage)
    - Better seperation of BE/FE
    - Testcafe intergration
    - Proper sanitation of user inputs
    - Better Form creation
    - Typescript
    - Fix Spacing
    - Error Handling in FE code
    - CSS Grid
    - Better structure/extra data for pacakges
    - Mobile Styling
