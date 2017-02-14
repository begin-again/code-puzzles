# Thttps://www.codeeval.com/open_challenges/24/

myfile = ARGV[0]

if File.exists?(myfile)
  running_sum = 0
  File.open(myfile).each_line do |line|
    line.strip!
    next if line.empty?
    running_sum += line.to_i
  end
  puts running_sum
end


