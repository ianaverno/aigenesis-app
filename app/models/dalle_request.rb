# == Schema Information
#
# Table name: dalle_requests
#
#  id          :bigint           not null, primary key
#  fetch_url   :string
#  prompt      :string
#  last_status :string
#  retry_count :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class DalleRequest < ApplicationRecord
  after_create :schedule_fetch
  
  def fetch
    dm = Dallemini.new(nil)

    response = dm.fetch(self.fetch_url)
    
    if response.nil?
      self.update(last_status: "request error", retry_count: 1000)
    else
      self.update(
        last_status: response[:status], 
        retry_count: self.retry_count + 1
      )
    end

    case self.last_status
    when "succeeded"
      prompt = Prompt.create(text: self.prompt) 

      response[:output].each do |i|
        prompt.artworks.create(url: i[:image])
      end
    else
      unless self.retry_count > 5
        self.schedule_fetch
      end
    end
  end

  def schedule_fetch
    DalleminiFetchWorker.perform_in(2.minutes, self.id)
  end
end
