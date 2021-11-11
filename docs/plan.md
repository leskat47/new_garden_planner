### MVP

- User can see a table of plants in the Plant Catalog Section, and add and remove plants. 
- User can see a list of areas and for each area, the locations within that area. Each location show a table of plants that have been planted there.
- User can add and delete areas, locations, and 'plantings', i.e. plants that have been added to a location. 

# Implementation details
- Set up react within a rails app. 
- Database with minimal seed data is set up.
- Unit testing and linting is set up both for rails and react (yarn unit tests, rspec unit tests, eslint, rubocop). 
- Github actions for CI are set up.

## v2
- User can add more detail in data including: flowering season, flower color, annual/perennial 
- User can drag a planting from one location in an area to another
- User can sort locations by flowering season

# Implementation details
- Behavioral tests (cucumber) are set up
- Set up enums where appropriate for database fields
- Determine appropriate specificity of flowering season
- Find appropriate drag-and-drop react library
- API endpoint for changing location (and area?)

## v3
- User can run visualization of what is flowering throughout the year. 

