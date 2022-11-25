# == Schema Information
#
# Table name: mini_games
#
#  id         :bigint           not null, primary key
#  type       :string
#  payload    :json
#  answer     :json
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class MiniGame < ApplicationRecord
end
