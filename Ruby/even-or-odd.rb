# Even Numbers
myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile) do |file|
    file.each_line do |line|
      puts line.to_i % 2 == 0 ? 1 : 0
    end
  end
end
