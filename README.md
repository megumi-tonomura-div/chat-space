# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false, index : true, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- belongs_to :groups, through: :group_users
- has_many :groups_users, foreign_key: true
- has_many :messages

groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|bigint|null: false|
|group_id|bigint|null: false|
### Association
- has_many :user, foreign_key: true
- has_many :group, foreign_key: true


groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false,add_index :group_name|
### Association
- has_many :users, through: :group_users, foreign_key: true
- has_many :group_users, foreign_key: true
- accepts_nested_attributes_for :group_users
- has_many :messages

messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|MEDIUMTEXT|null: false|
|image|MEDIUMBLOB|null: false|
|user_id|bigint|null: false|
|group_id|bigint|null: false|
### Association
- has_many :group, foreign_key: true
- has_many :user, foreign_key: true



* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
