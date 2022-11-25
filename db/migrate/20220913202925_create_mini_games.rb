class CreateMiniGames < ActiveRecord::Migration[7.0]
  def change
    create_table :mini_games do |t|
      t.string :type
      t.json :payload
      t.json :answer

      t.timestamps
    end
  end
end
