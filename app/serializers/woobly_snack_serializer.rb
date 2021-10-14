class WooblySnackSerializer < ActiveModel::Serializer
  attributes :id, :likes_snack
  has_one :woobly
  has_one :snack
end
