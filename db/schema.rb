# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_13_202925) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artworks", force: :cascade do |t|
    t.bigint "prompt_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
    t.string "url"
    t.index ["prompt_id"], name: "index_artworks_on_prompt_id"
  end

  create_table "biomes", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.bigint "source_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["source_id"], name: "index_biomes_on_source_id"
  end

  create_table "dalle_requests", force: :cascade do |t|
    t.string "fetch_url"
    t.string "prompt"
    t.string "last_status"
    t.integer "retry_count", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "heros", force: :cascade do |t|
    t.string "name"
    t.bigint "source_id", null: false
    t.integer "ph"
    t.integer "mh"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["source_id"], name: "index_heros_on_source_id"
  end

  create_table "mini_games", force: :cascade do |t|
    t.string "type"
    t.json "payload"
    t.json "answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "prompts", force: :cascade do |t|
    t.string "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sources", force: :cascade do |t|
    t.string "name"
    t.string "icon"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "artworks", "prompts"
  add_foreign_key "biomes", "sources"
  add_foreign_key "heros", "sources"
end
