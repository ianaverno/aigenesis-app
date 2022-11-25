# == Schema Information
#
# Table name: biomes
#
#  id         :bigint           not null, primary key
#  name       :string
#  text       :string
#  source_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Biome < ApplicationRecord
  belongs_to :source
end
