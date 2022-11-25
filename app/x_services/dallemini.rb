class Dallemini
  def initialize(prompt)
    @prompt = prompt
    @url = "https://api.replicate.com/v1/predictions"
  end

  def version
    # "2e3975b1692cd6aecac28616dba364cc9f1e30c610c6efd62dbe9b9c7d1d03ea"
    "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa"
  end

  def headers
    {
      "Content-Type" => 'application/json',
      "Accept" => 'application/json',
      "Authorization" => "Token #{Rails.application.credentials.dallemini.api_key}"
    }
  end

  def submit
    body = {
      version: version,
      input: {
        text: @prompt
      }
    }
    
    uri = URI(@url)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl=true

    request = Net::HTTP::Post.new(uri.path, headers)
    request.body = body.to_json

    response = http.request(request)
    json = JSON.parse(response.body).deep_symbolize_keys

    if json[:urls].present?
      DalleRequest.create(
        prompt: @prompt, 
        fetch_url: json[:urls][:get], 
        last_status: json[:status]
      )
    else
      return false
    end
  end

  def fetch(get_url)
    uri = URI(get_url)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl=true
    request = Net::HTTP::Get.new(uri.path, headers)
    http.request(request)

    response = http.request(request)
    json = JSON.parse(response.body).deep_symbolize_keys

    if json[:urls].present?
      return json  
    else
      return nil
    end
  end

  # TODO delete

  def debug_submit
    res = submit
    puts res.body
  end
end