class CreateDalleRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :dalle_requests do |t|
      t.string :fetch_url
      t.string :prompt
      t.string :last_status
      t.integer :retry_count, default: 0

      t.timestamps
    end
  end
end
