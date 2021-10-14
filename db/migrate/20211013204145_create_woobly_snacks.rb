class CreateWooblySnacks < ActiveRecord::Migration[6.1]
  def change
    create_table :woobly_snacks do |t|

      t.boolean :likes_snack
      t.boolean :favorite_snack

      t.belongs_to :woobly, null: false, foreign_key: true
      t.belongs_to :snack, null: false, foreign_key: true

      t.timestamps
    end
  end
end
