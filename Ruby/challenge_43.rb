def jolly_jumper?(s)
  data = s.split(' ')[1..-1].map(&:to_i)
  diffs = []
  data.each_cons(2) {|i, j| diffs << (i - j).abs}
  diffs.sort == (1...data.size).to_a
end

File.readlines(ARGV[0]).each do |line|
  result = jolly_jumper?( line )
  puts result ? 'Jolly' : 'Not jolly'
end
