# Template

myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile) do |file|
    file.each_line do |line|
      puts line.downcase
    end
  end
end
