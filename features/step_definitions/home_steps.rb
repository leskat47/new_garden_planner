Given("I have an area") do
  app.seed_areas  
end

When("I go to the home page") do
  app.go_to_home
end

Then("I expect to see garden info") do
  app.current_page.wait_until_areas_visible
  expect(app.current_page).to have_areas
  expect(app.current_page.areas.text).to eq('Areas')
end
