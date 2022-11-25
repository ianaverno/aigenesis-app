# == Schema Information
#
# Table name: prompts
#
#  id         :bigint           not null, primary key
#  text       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Prompt < ApplicationRecord
  has_many :artworks
end
