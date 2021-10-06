# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




user1 = User.create(username: "Sam123", password: "123")
user2 = User.create(username: "Mas321", password_digest: "123")

# t.string :username
# t.string :password_digest 

puts "
Users Seeded - Yay!!!!  :)

"



# woobly = Woobly.create(name: "Woobly")

# puts "🥰!!!!Woobliiiiiiiies!!!!🥰"




# snack = Snack.create(name: "Yumz")

# puts "SNACKZZZZ"

