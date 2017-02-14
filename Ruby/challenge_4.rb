# sum of first 1000 primes
# output: 3_682_913


def is_prime x
  (2..Math.sqrt(x)).none? {|f| x % f == 0}
end

max_primes = ARGV[0].to_i || 1000
prime_count = 0
prime_sum = 0
int_value = 2
primes = []
while prime_count < (max_primes) do
  if is_prime(int_value)
    primes << int_value
    prime_count += 1
    prime_sum += int_value
  end
  int_value += 1
end
#puts "Found #{prime_count} primes that sum to #{prime_sum}"
puts prime_sum
puts primes.join(' ')


