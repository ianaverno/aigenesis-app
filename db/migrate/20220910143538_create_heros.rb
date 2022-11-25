class CreateHeros < ActiveRecord::Migration[7.0]
  def change
    create_table :heros do |t|
      t.string :name
      t.belongs_to :source, null: false, foreign_key: true
      t.integer :ph
      t.integer :mh

      t.timestamps
    end
  end
end
