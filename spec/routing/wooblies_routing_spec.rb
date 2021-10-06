require "rails_helper"

RSpec.describe WoobliesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/wooblies").to route_to("wooblies#index")
    end

    it "routes to #show" do
      expect(get: "/wooblies/1").to route_to("wooblies#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/wooblies").to route_to("wooblies#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/wooblies/1").to route_to("wooblies#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/wooblies/1").to route_to("wooblies#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/wooblies/1").to route_to("wooblies#destroy", id: "1")
    end
  end
end
