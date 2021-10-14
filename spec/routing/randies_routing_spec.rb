require "rails_helper"

RSpec.describe RandiesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/randies").to route_to("randies#index")
    end

    it "routes to #show" do
      expect(get: "/randies/1").to route_to("randies#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/randies").to route_to("randies#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/randies/1").to route_to("randies#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/randies/1").to route_to("randies#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/randies/1").to route_to("randies#destroy", id: "1")
    end
  end
end
