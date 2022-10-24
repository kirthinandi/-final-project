class User < ApplicationRecord
    has_many :reviews
    has_many :products, through: :reviews

    has_secure_password

    validates :username, presence: true, uniqueness: true
    
    # validates_presence_of :username, :password_digest
    # validates_uniqueness_of :username
    # validates :username, length: { minimum: 5}
    # validates :password, length: { minimum: 6}
end
