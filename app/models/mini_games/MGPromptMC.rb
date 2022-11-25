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
class MGPromptMC < MiniGame
  after_create: generate

  def generate
    artwork = Artwork.all.sample
    filler_prompts = Prompts.where.not(id: artwork.prompt_id).sample(3)
    prompts = [
      {id: artwork.prompt_id, text: arwork.prompt.text}
    ]

    filler_prompts.each do |fp|
      prompts << {id: fp.id, text: fp.text}
    end

    update(
      payload: {
        artwork: { url: artwork.url },
        prompts: prompts.shuffe
      },
      answer: { prompt_id: artwork.prompt_id }
    )
  end

  def result_from_response(json)
    if json[:prompt_id] == answer[:prompt_id]
      return 1
    else
      0
    end
  end
end
