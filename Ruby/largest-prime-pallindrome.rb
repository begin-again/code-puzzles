# prime pallindrome (pp)
#     7
#     11
#     929

# find a prime
# determine if pallindrome
# if larger than prior pp, replace it
require 'byebug'

def prime? x
  (2..Math.sqrt(x)).none? {|f| x % f == 0}
end

def pallindrome? x
  s = x.to_s.split('')
  if s.size == 0
    false
  elsif s.size == 1
    true
  elsif s.size == 2
    s[0] == s[1]
  else
    # [1,2,1] = true
    # [1,2,3] = false
    # [1,1] = true
    is_palindrome = true

    (0..(s.size / 2)).each do |i|
      if s.slice(i) != s.slice(0-(i+1))
        is_palindrome = false
        next
      end
    end
    is_palindrome
  end
end

# n = ARGV[0].to_i || 1000
n = 1000
last_pp = 0
i = 2
begin
  if prime?(i) && pallindrome?(i) && last_pp < i
    last_pp = i
  end
  i+= 1
end while i < n
puts last_pp
