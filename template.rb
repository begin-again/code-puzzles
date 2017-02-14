# Template

myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile).each_line do |line|
    line.strip!
    next if line.empty?
      # Do something
  end
end


