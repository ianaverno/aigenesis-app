class BiomesController < ApplicationController
  before_action :set_biome, only: %i[ show edit update destroy ]

  # GET /biomes or /biomes.json
  def index
    @biomes = Biome.all
  end

  # GET /biomes/1 or /biomes/1.json
  def show
  end

  # GET /biomes/new
  def new
    @biome = Biome.new
  end

  # GET /biomes/1/edit
  def edit
  end

  # POST /biomes or /biomes.json
  def create
    @biome = Biome.new(biome_params)

    respond_to do |format|
      if @biome.save
        format.html { redirect_to biome_url(@biome), notice: "Biome was successfully created." }
        format.json { render :show, status: :created, location: @biome }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @biome.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /biomes/1 or /biomes/1.json
  def update
    respond_to do |format|
      if @biome.update(biome_params)
        format.html { redirect_to biome_url(@biome), notice: "Biome was successfully updated." }
        format.json { render :show, status: :ok, location: @biome }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @biome.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /biomes/1 or /biomes/1.json
  def destroy
    @biome.destroy

    respond_to do |format|
      format.html { redirect_to biomes_url, notice: "Biome was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_biome
      @biome = Biome.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def biome_params
      params.require(:biome).permit(:name, :text, :source_id)
    end
end
