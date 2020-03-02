* Database creation

usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false, index : true|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :groups, through: :group_users
- has_many :messages

groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|bigint|null: false, foreign_key: true|
|group_id|bigint|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group


groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false,add_index :group_name, foreign_key: true|
### Association
- has_many :users, through: :group_users
- has_many :messages

messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|image|text|
|user_id|bigint|null: false, foreign_key: true|
|group_id|bigint|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

* ...

—————————————————————————————————————————

