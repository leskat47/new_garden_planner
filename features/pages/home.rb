require "site_prism"

module Pages
  class Home < SitePrism::Page
    set_url "/"

    element :areas, "h1"

  end
end