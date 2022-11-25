class MiniGamesController < ApplicationController
  before_action :set_mini_game, only: %i[ show edit update destroy ]

  # GET /mini_games or /mini_games.json
  def index
    @mini_games = MiniGame.all
  end

  # GET /mini_games/1 or /mini_games/1.json
  def show
  end

  # GET /mini_games/new
  def new
    @mini_game = MiniGame.new
  end

  # GET /mini_games/1/edit
  def edit
  end

  # POST /mini_games or /mini_games.json
  def create
    @mini_game = MiniGame.new(mini_game_params)

    respond_to do |format|
      if @mini_game.save
        format.html { redirect_to mini_game_url(@mini_game), notice: "Mini game was successfully created." }
        format.json { render :show, status: :created, location: @mini_game }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @mini_game.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /mini_games/1 or /mini_games/1.json
  def update
    respond_to do |format|
      if @mini_game.update(mini_game_params)
        format.html { redirect_to mini_game_url(@mini_game), notice: "Mini game was successfully updated." }
        format.json { render :show, status: :ok, location: @mini_game }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @mini_game.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /mini_games/1 or /mini_games/1.json
  def destroy
    @mini_game.destroy

    respond_to do |format|
      format.html { redirect_to mini_games_url, notice: "Mini game was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mini_game
      @mini_game = MiniGame.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def mini_game_params
      params.require(:mini_game).permit(:type, :payload, :answer)
    end
end
