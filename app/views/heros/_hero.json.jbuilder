json.extract! hero, :id, :name, :source_id, :ph, :mh, :created_at, :updated_at
json.url hero_url(hero, format: :json)
