
myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile).each_line do |line|
    line.strip!
    next if line.empty?
    x = line.split(',').map(&:to_i)
    bits = x.first.to_s(2)
    bits[ 0-x[1] ] == bits[ 0-x[2] ]
  end
end
