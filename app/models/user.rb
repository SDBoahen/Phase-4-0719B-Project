class User < ApplicationRecord
    # has_many 

    has_secure_password

    validates :username, presence: true

end
