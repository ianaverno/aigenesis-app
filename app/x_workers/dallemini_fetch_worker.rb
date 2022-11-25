class DalleminiFetchWorker
  include Sidekiq::Worker

  def perform(id)
    dr = DalleRequest.find_by(id: id)

    dr.try(:fetch)
  end
end
