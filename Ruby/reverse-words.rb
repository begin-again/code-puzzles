# Reverse words
# Input: Hello World
# Output: World Hello

myfile = ARGV[0]

if File.exists?(myfile)
  File.open(myfile) do |file|
    file.each_line do |line|
      # Do something
      puts line.split(' ').reverse.join(' ')
    end
  end
end
