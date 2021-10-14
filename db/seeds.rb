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

# puts "
# Users Seeded - Yay!!!!  :)

# "







woobly = Woobly.create(name: "Woobly", favorite_snack: "Ice Cream")
joobly = Woobly.create(name: "Joobly", favorite_snack: nil)

puts "
🥰!!!!Woobliiiiiiiies!!!!🥰
"




snack_chips = Snack.create(name: "Chips", flavor: "salty")
snack_cookies = Snack.create(name: "Cookies", flavor: "sweet")
snack_icecream = Snack.create(name: "Ice Cream", flavor: "sweet")
snack_yums = Snack.create(name: "Yumz", flavor: "yummy")

puts "
SNACKZZZZ Seeded!
"




woobly_snack1 = WooblySnack.create(
    woobly: woobly, 
    snack: snack_icecream, 
    likes_snack: true, 
    favorite_snack: true
)

joobly_snack1 = WooblySnack.create(
    woobly_id: joobly.id, 
    snack_id: snack_yums.id, 
    likes_snack: true, 
    favorite_snack: false
)

puts "
WooblySnacks Seeded!
"
