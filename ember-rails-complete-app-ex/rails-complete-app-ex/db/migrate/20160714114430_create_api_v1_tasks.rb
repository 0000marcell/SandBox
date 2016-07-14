class CreateApiV1Tasks < ActiveRecord::Migration
  def change
    create_table :api_v1_tasks do |t|
      t.string :title
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
