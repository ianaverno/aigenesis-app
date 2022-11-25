require "application_system_test_case"

class BiomesTest < ApplicationSystemTestCase
  setup do
    @biome = biomes(:one)
  end

  test "visiting the index" do
    visit biomes_url
    assert_selector "h1", text: "Biomes"
  end

  test "should create biome" do
    visit biomes_url
    click_on "New biome"

    fill_in "Name", with: @biome.name
    fill_in "Source", with: @biome.source_id
    fill_in "Text", with: @biome.text
    click_on "Create Biome"

    assert_text "Biome was successfully created"
    click_on "Back"
  end

  test "should update Biome" do
    visit biome_url(@biome)
    click_on "Edit this biome", match: :first

    fill_in "Name", with: @biome.name
    fill_in "Source", with: @biome.source_id
    fill_in "Text", with: @biome.text
    click_on "Update Biome"

    assert_text "Biome was successfully updated"
    click_on "Back"
  end

  test "should destroy Biome" do
    visit biome_url(@biome)
    click_on "Destroy this biome", match: :first

    assert_text "Biome was successfully destroyed"
  end
end
