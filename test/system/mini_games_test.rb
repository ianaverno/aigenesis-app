require "application_system_test_case"

class MiniGamesTest < ApplicationSystemTestCase
  setup do
    @mini_game = mini_games(:one)
  end

  test "visiting the index" do
    visit mini_games_url
    assert_selector "h1", text: "Mini games"
  end

  test "should create mini game" do
    visit mini_games_url
    click_on "New mini game"

    fill_in "Answer", with: @mini_game.answer
    fill_in "Payload", with: @mini_game.payload
    fill_in "Type", with: @mini_game.type
    click_on "Create Mini game"

    assert_text "Mini game was successfully created"
    click_on "Back"
  end

  test "should update Mini game" do
    visit mini_game_url(@mini_game)
    click_on "Edit this mini game", match: :first

    fill_in "Answer", with: @mini_game.answer
    fill_in "Payload", with: @mini_game.payload
    fill_in "Type", with: @mini_game.type
    click_on "Update Mini game"

    assert_text "Mini game was successfully updated"
    click_on "Back"
  end

  test "should destroy Mini game" do
    visit mini_game_url(@mini_game)
    click_on "Destroy this mini game", match: :first

    assert_text "Mini game was successfully destroyed"
  end
end
