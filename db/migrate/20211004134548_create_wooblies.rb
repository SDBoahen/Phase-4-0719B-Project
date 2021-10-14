class CreateWooblies < ActiveRecord::Migration[6.1]
  def change
    create_table :wooblies do |t|
      t.string :name
      t.string :favorite_snack

      t.timestamps
    end
  end
end

