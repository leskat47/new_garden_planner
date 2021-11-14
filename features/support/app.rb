require_relative '../pages/home'

class App
  attr_accessor :current_page

  def go_to_home
    self.current_page = Pages::Home.new
    current_page.load
  end

  def seed_areas
    FactoryBot.create(:area)
  end  
end