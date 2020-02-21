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
|user_name|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|
### Association
- belongs_to :groups, through: :group_users
- has_many :groups_users

groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|bigint|null: false, foreign_key: true|
|group_id|bigint|null: false, foreign_key: true|
### Association
- has_many :user
- has_many :group 


groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreign_key: true|
### Association
- has_many :users, through: :group_users
- has_many :group_users
- accepts_nested_attributes_for :group_users

messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|MEDIUMTEXT|null: false, foreign_key: true|
|image|MEDIUMBLOB|null: false, foreign_key: true|
|user_id|bigint|null: false, foreign_key: true|
|group_id|bigint|null: false, foreign_key: true|
### Association
- has_many :group
- has_many :user



* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
