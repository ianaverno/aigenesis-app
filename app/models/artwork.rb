# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  prompt_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image      :string
#  url        :string
#
class Artwork < ApplicationRecord
  belongs_to :prompt
  mount_uploader :image, ArtworkUploader
end
