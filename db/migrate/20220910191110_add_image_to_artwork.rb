class AddImageToArtwork < ActiveRecord::Migration[7.0]
  def change
    add_column :artworks, :image, :string
  end
end
