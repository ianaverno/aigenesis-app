# == Schema Information
#
# Table name: sources
#
#  id         :bigint           not null, primary key
#  name       :string
#  icon       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Source < ApplicationRecord
end
