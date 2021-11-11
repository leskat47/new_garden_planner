### Garden Planner

This is a personal project to keep track of what is planted in different parts of my garden and plan for the coming season. For specifics on the plan for this project see my [planning doc](./docs/plan.md). 

# Getting setup

Assuming you have rails installed, run `bundle install`. 
For Javascript dependencies run `yarn install`.

# Database setup

You'll need Postgres 14 installed. 

Set up the database with `db:create` and `rake db:migrate`.
For sample data run `rake db:seed`.


# Testing

For backend, run

```
	rspec
```

For frontend, run 
```
	yarn test
```
