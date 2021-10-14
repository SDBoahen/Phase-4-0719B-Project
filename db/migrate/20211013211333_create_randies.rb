class CreateRandies < ActiveRecord::Migration[6.1]
  def change
    create_table :randies do |t|
      t.string :random_name

      t.timestamps
    end
  end
end
