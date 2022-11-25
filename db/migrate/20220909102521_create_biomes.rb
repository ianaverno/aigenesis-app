class CreateBiomes < ActiveRecord::Migration[7.0]
  def change
    create_table :biomes do |t|
      t.string :name
      t.string :text
      t.belongs_to :source, null: false, foreign_key: true

      t.timestamps
    end
  end
end
