# == Schema Information
#
# Table name: heros
#
#  id         :bigint           not null, primary key
#  name       :string
#  source_id  :bigint           not null
#  ph         :integer
#  mh         :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Hero < ApplicationRecord
  belongs_to :source
end
