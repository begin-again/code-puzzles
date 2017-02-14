# Template

myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile).each_line do |line|
    line.strip!
    next if line.empty?
      x = line.split(',').collect{|e| e.to_i}
      puts x.first - (x.last * (x.first / x.last))
  end
end




