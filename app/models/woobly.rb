class Woobly < ApplicationRecord
    has_many :woobly_snacks
    has_many :snacks, through: :woobly_snacks 


    # WE COULD WRITE A CUSTOM VALIDATION FOR THE  :favorite_snack  ATTRUBUTE 


    def update_favorite_snack(some_hash_data, some_id)
        # some_hash_data -> whatever the 1ST Argment Is
        # some_id -> whatever the 1ST Argment Is
    
        woobly_found = Woobly.find_by(id: some_id)
        # woobly_found = Woobly.find_by(id: params[:id])
        
        self.update(some_hash_data)        
    end 
    # def update_any_woobly_attribute(some_hash_data, some_id)
    # def custom_update_method(some_hash_data, some_id)



    # def add_a_sparkly
    #     woobly_found = Woobly.find_by(id: params[:id])

    #     woobly_found.favorite_snack

    # end


####  THE END    
end
